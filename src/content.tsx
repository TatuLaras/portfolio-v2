import { Project } from './types';

export const dummySourceCode = `
#include "management.h"
#include "limine.h"
#include "kernel.h"


#define INIT_MEMORY_NEEDED 0xffffff
#define TSS_STACK_SIZE 0x10000 // 64 kB



/* will overflow into non-usable memory,
Just a temporary convenience thing for the moment */
void *manag_kmalloc(size_t amount)
{
    void *ret = usable_memory;
    usable_memory += amount;
    return usable_memory;
}

void manag_init_userspace()
{
    __setup_userspace_segments();
}

void __init_memory()
{
    // Get first usable memory region large enough
    for (size_t i = 0; i < memmap_request.response->entry_count; i++)
    {
        struct limine_memmap_entry *entry = memmap_request.response->entries[i];
        if(entry->type != LIMINE_MEMMAP_USABLE) continue;
        if(entry->length < INIT_MEMORY_NEEDED) continue;

        usable_memory = (void*)hhdm_request.response->offset + entry->base;
        return;
    }

    halt(); // Such region not found
}


void *__create_tss()
{
    // Stacks 
    memset(usable_memory, 0, TSS_STACK_SIZE * 10);
    usable_memory += TSS_STACK_SIZE * 10;

    void *tss_dest = usable_memory;

    Tss tss = {
        .rsp = {
            usable_memory,
            usable_memory + TSS_STACK_SIZE * 1,
            usable_memory + TSS_STACK_SIZE * 2,
        },
        .ist = {
            usable_memory + TSS_STACK_SIZE * 3,
            usable_memory + TSS_STACK_SIZE * 4,
            usable_memory + TSS_STACK_SIZE * 5,
            usable_memory + TSS_STACK_SIZE * 6,
            usable_memory + TSS_STACK_SIZE * 7,
            usable_memory + TSS_STACK_SIZE * 8,
            usable_memory + TSS_STACK_SIZE * 9,
        },
        .io_map_base = 0
    };

    memcpy(usable_memory, &tss, sizeof(tss));
    usable_memory += sizeof(tss);

    return tss_dest;
}

void __create_gdt(void *tss_addr, size_t *out_gdt_size, void **out_gdt_addr,
                        uint16_t *out_tss_index)
{
    *out_gdt_addr = usable_memory;
    *out_tss_index = 5;

    SegmentDescriptor gdt[5] = {
        {0},
        { // kernel code
            .flags = 0xa, .access_byte = 0x9a, .limit_15_0 = 0xffff, 
            .limit_19_16 = 0xf, .base_address_23_0 = 0, .base_address_31_24 = 0
        },
        { // kernel data
            .flags = 0xc, .access_byte = 0x92, .limit_15_0 = 0xffff, 
            .limit_19_16 = 0xf, .base_address_23_0 = 0, .base_address_31_24 = 0
        },
        { // user code
            .flags = 0xa, .access_byte = 0xfa, .limit_15_0 = 0xffff, 
            .limit_19_16 = 0xf, .base_address_23_0 = 0, .base_address_31_24 = 0
        },
        { // user data
            .flags = 0xc, .access_byte = 0xf2, .limit_15_0 = 0xffff, 
            .limit_19_16 = 0xf, .base_address_23_0 = 0, .base_address_31_24 = 0
        }
    };

    SystemSegmentDesc tss_segment_desc = {
        .flags = 0x0, .access_byte = 0x89, 
        .limit_15_0 = sizeof(Tss) & 0xffff, 
        .limit_19_16 = (sizeof(Tss) >> 16) & 0xf,
        .base_address_23_0 = (uint64_t)tss_addr & 0xffffff, 
        .base_address_63_24 = ((uint64_t)tss_addr >> 24) & 0xffffffffff
    };


    memcpy(usable_memory, gdt, sizeof(gdt));
    usable_memory += sizeof(gdt);

    memcpy(usable_memory, &tss_segment_desc, sizeof(SystemSegmentDesc));
    usable_memory += sizeof(SystemSegmentDesc);

    *out_gdt_size = sizeof(gdt) + sizeof(tss_segment_desc);
}


void __create_idt(void **out_idt_addr, size_t *out_idt_size)
{
    IdtGateDesc entries[15] =
    {
        {0},
        {0},
        {0},
        IDT_TRAP_GATE(isr_3_wrapper),
        {0},
        {0},
        {0},
        {0},
        {0},
        {0},
        {0},
        {0},
        {0},
        {0},
        IDT_INTERRUPT_GATE(isr_14_wrapper),
    };

    *out_idt_addr = usable_memory;
    *out_idt_size = sizeof(entries);
    memcpy(usable_memory, entries, *out_idt_size);
    usable_memory += *out_idt_size;
}

Gdtr __get_gdtr()
{
    Gdtr ret = {0};
    asm volatile("sgdt %0"
                 : "=m"(ret)
                 :
                 : "memory");
    return ret;
}

void __set_gdtr(Gdtr gdtr)
{
    asm volatile("lgdt %0" ::"m"(gdtr));
}

Idtr manag_get_idtr()
{
    Idtr ret = {0};
    asm volatile("sidt %0"
                 : "=m"(ret)
                 :
                 : "memory");
    return ret;
}

void __set_idtr(Idtr idtr)
{
    asm volatile("lidt %0" ::"m"(idtr));
}

void __set_tr(SegmentSelector selector)
{
    asm volatile("ltr %0" ::"r"(selector));
}

SegmentSelector __get_tr()
{
    SegmentSelector ret = {0};
    asm volatile("str %0"
                 : "=m"(ret)
                 :
                 : "memory");
    return ret;
}

void manag_write_msr(uint64_t msr_index, uint64_t value)
{
    uint32_t low = value & 0xFFFFFFFF;
    uint32_t high = value >> 32;
    asm volatile (
        "wrmsr"
        :
        : "c"(msr_index), "a"(low), "d"(high)
    );
}

uint64_t manag_read_msr(uint64_t msr_index)
{
    uint32_t low, high;
    asm volatile (
        "rdmsr"
        : "=a"(low), "=d"(high)
        : "c"(msr_index)
    );
	return ((uint64_t)high << 32) | low;
}
`;

export const projects: Project[] = [
    {
        desc: 'Kirjaudu Spotifyllä ja lähetä linkki kaverille!',
        title: 'Merge Your Music',
        img: '/img/portfolio/icons/mym.png',
        content: (
            <>
                <img src='/img/portfolio/mym.png' />
                <div className='tech'>
                    React, Vite, TypeScript, Node.js, Express, Websockets, REST
                    API, Sass
                </div>
                <p>
                    Merge your music taste with someone else's! Login with
                    Spotify and send a link to your friend to start generating
                    playlists from music you both enjoy.
                </p>
                <p>
                    Spotify:n API-avaimeni kohtalo on vielä käsitteillä,
                    tarkoittaen että vain ennalta määritetyt "betatestaajat"
                    pystyvät kirjautua applikaatioon. Tämä muuttuu mikäli
                    Spotify hyväksyy hakemukseni, jonka käsittelyyn pitäisi
                    kulua noin 1,5 kk. Mikäli haluat betatestaajaksi, laitathan
                    minulle meiliä!
                </p>
                <p>
                    <a href='http://mergeyourmusic.laras.cc/' target='_blank'>
                        Merge Your Music
                    </a>
                </p>
                <p>
                    <a
                        href='https://github.com/TatuLaras/merge-your-music'
                        target='_blank'
                    >
                        Projekti GitHubissa
                    </a>
                </p>
            </>
        ),
    },
    {
        desc: 'Vaporwave-teemainen portfolio',
        title: 'Edellinen portfolio',
        img: '/img/portfolio/icons/portfolio1.png',
        content: (
            <>
                <img src='/img/portfolio/portfolio1.png' />
                <div className='tech'>
                    React, Vite, TypeScript, Sass, Github actions
                </div>
                <p>
                    Tätä edeltävä portfolio. Tämä nykyinen on toteutettu
                    samoilla teknologioilla.
                </p>
                <p>
                    <a
                        href='https://tatularas.github.io/portfolio'
                        target='_blank'
                    >
                        Linkki portfolioon
                    </a>
                </p>
            </>
        ),
    },
    {
        desc: 'Electron-pohjainen kehittynyt mediahubi',
        title: 'Cinema Spectrum',
        img: '/img/portfolio/icons/mm2.jpg',
        content: (
            <>
                <img src='/img/portfolio/mm2.png' />
                <div className='tech'>
                    React, Vite, Redux, TypeScript, Node.js, Electron, Jest,
                    REST API, Sass
                </div>
                <p>
                    <b>Cinema Spectrum</b> on web-teknologioilla ja Electronilla
                    toteutettu mediahubi / -keskus, joka tarjoaa paikallisten
                    TV-ohjelmien ja elokuvien kirjastolle (skannatut DVD:t tms.)
                    striimauspalvelun kaltaisen käyttöliittymän.
                </p>
                <p>
                    <a
                        href='https://github.com/TatuLaras/MediaManager2-electron'
                        target='_blank'
                    >
                        Projekti GitHubissa
                    </a>
                </p>
                <p>
                    Kyseinen ohjelma pyrkii erottumaan muista vastaavista
                    ohjelmista fokuksen osalta. Toisin kuin esimerkiksi Kodi,
                    Cinema Spectrum ei ole sääasema, musiikkisoitin tai
                    valokuvien katseluohjelma, vaan keskittyy ydintehtäväänsä,
                    joka on paikallisen elokuvien ja TV-ohjelmien kirjaston
                    hallinta ja pyrkii tekemään sen mahdollisimman hyvin.
                </p>
                <p>
                    Erilaisen fokuksen myötä käyttöliittymä on pystytty
                    suunnittelemaan käyttötarkoitukseen sopivammaksi ja itse
                    Kodi:n käytössä huomaamiani kipukohtia on huomioitu. Muun
                    muassa seuraaviin asioihin on kiinnitetty / kiinnitetään
                    huomiota:
                </p>
                <ul>
                    <li>
                        <b>Työpöytä ja TV: </b>Hyvän mediahubin ominaisuuksiin
                        kuuluu hyvän TV-käyttöliittymän lisäksi se, että sitä on
                        myös miellyttävää käyttää työpöytäsovelluksena hiiren
                        kanssa. Cinema Spectrum tarjoaa kaksi erillistä tilaa
                        TV:lle ja työpöydälle.
                    </li>
                    <li>
                        <b>Automaattiskannauksen virheenkorjaus: </b>Aina
                        mediahubi ei kykene löytämään elokuvan tai TV-sarjan
                        tietoja oikein, johtuen esimerkiksi tiedoston huonosta
                        nimeämisestä. Cinema Spectrumissa on erikseen
                        tuntemattomat-osio, joka listaa suoraan manuaalista
                        väliintuloa vaativat mediateokset.
                    </li>
                    <li>
                        <b>Out of The Box -toimivuus: </b>Cinema Spectrum on
                        suunniteltu toimimaan mahdollisimman hyvin ns.
                        "sellaisenaan".
                    </li>
                </ul>
            </>
        ),
    },
    {
        desc: 'C++-pohjainen cross-platform mediahubi',
        title: 'MediaManager',
        img: '/img/portfolio/icons/mm.jpg',
        content: (
            <>
                <img src='/img/portfolio/mediamanager.png' />
                <div className='tech'>C++, Dear ImGui, REST API</div>
                <p>
                    A cross-platform entertainment hub for managing your local
                    collection of movies and TV shows.
                </p>
                <p>
                    <a
                        href='https://github.com/TatuLaras/MediaManager'
                        target='_blank'
                    >
                        MediaManager GitHubissa
                    </a>
                </p>
            </>
        ),
    },

    {
        desc: 'Työkalu kielten opiskeluun',
        title: 'Submerge (web)',
        img: '/img/portfolio/icons/submergeold.jpg',
        content: (
            <>
                <img src='/img/portfolio/submergeold.jpg' />
                <div className='tech'>
                    JavaScript, Node.js, Express, MySQL, EJS, REST API,
                    Bootstrap
                </div>
                <p>
                    Language immersion aka. consuming content that's in a
                    foreign language for language learning purposes is{' '}
                    <b>by far</b> the most effective language learning method
                    according to current research.{' '}
                </p>
                <p>
                    <b>Submerge Immersion Tracker</b> is a tracker of your
                    immersion: the time you spend immersing, what kind of
                    immersion you do (reading, listening, active, passive), and
                    the content you choose to do it with. This app gives you an
                    intuitive interface to add that data to the current day or
                    edit previous days. Afterward, you can look at aggregate
                    data graphs and statistics of that data or get a more
                    detailed view of it in a spreadsheet-like form. The app also
                    includes some social features, letting you add friends and
                    see their recent immersion data.
                </p>
                <p>
                    Projekti ei ole tällä hetkellä hostattuna missään koska
                    uudempi työpöytäpohjainen offline-versio on tekeillä. Vanhan
                    etusivun löydät{' '}
                    <a
                        href='https://tatularas.github.io/submerge-landing/'
                        target='_blank'
                    >
                        täältä
                    </a>
                    .
                </p>
                <p>Esittelyvideo:</p>
                <iframe
                    className='video-embed'
                    src='https://www.youtube.com/embed/Ggv0v3yDv28'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </>
        ),
    },
    {
        desc: 'Pienempiä projekteja',
        title: 'Muut projektit',
        img: '/img/face.jpg',
        content: (
            <>
                <p>
                    Muut pienemmät projektit löydät{' '}
                    <a href='https://github.com/TatuLaras/' target='_blank'>
                        GitHubistani
                    </a>
                    .
                </p>
            </>
        ),
    },
];
