import TextTypeAnimation from './components/TextTypeAnimation';
import { Project } from './types';

export const description = (
    <>
        <p>
            <TextTypeAnimation
                timePerChar={3}
                writeHeadLength={5}
                loop={false}
                delay={1500}
            >
                Olen pitkään kerryttänyt vahvaa tietoteknistä osaamista, osin
                töissä noin puolisentoista vuoden ajan, mutta myös vapaa-ajalla
                oman mielenkiintoni johdattamana noin seitsemän vuoden ajan.
                Tänä aikana olen ehtinyt luomaan ja ylläpitämään monia vakaita
                ja järkeviä tietojärjestelmäratkaisuja, sekä myös lähestyttäviä
                ja visuaalisesti miellyttäviä käyttöliittymiä.
            </TextTypeAnimation>
        </p>
        <p>
            <TextTypeAnimation
                timePerChar={3}
                writeHeadLength={5}
                loop={false}
                delay={2000}
            >
                Koen omaavani hyvät kommunikaatiotaidot, joille on tullut
                käyttöä töissä eri sidosryhmien tarpeita selvitettäessä, sekä
                asepalveluksen aikana toimiessani teknisenä tukena kaikkien
                suomen varuskuntien simulaattoriohjelmoijille ja toimiessani
                uuden saapumiserän ohjelmoijien kouluttajana.
            </TextTypeAnimation>
        </p>
    </>
);

export const projects: Project[] = [
    {
        desc: 'Kirjaudu Spotifyllä ja lähetä linkki kaverille!',
        title: 'Merge Your Music',
        icon: '/img/portfolio/icons/mym.png',
        screenshots: [
            '/img/portfolio/mergeyourmusic/1.png',
            '/img/portfolio/mergeyourmusic/2.png',
            '/img/portfolio/mergeyourmusic/3.png',
            '/img/portfolio/mergeyourmusic/4.png',
        ],
        content: (
            <>
                <div className="tech">
                    React, TypeScript, Node.js, Express, Websockets, REST API,
                    Sass
                </div>
                <p>
                    "Merge your music taste with someone else's! Login with
                    Spotify and send a link to your friend to start generating
                    playlists from music you both enjoy."
                </p>
                <p>
                    Äppi on nyt Spotifyn siunaama eli sitä pääsee kuka tahansa
                    kokeilemaan. Linkki löytyy alta!
                </p>
                <p>
                    <a href="http://mergeyourmusic.laras.cc/" target="_blank">
                        Merge Your Music
                    </a>
                </p>
                <p>
                    <a
                        href="https://github.com/TatuLaras/merge-your-music"
                        target="_blank"
                    >
                        Projekti GitHubissa
                    </a>
                </p>
            </>
        ),
    },
    {
        desc: 'Electron-pohjainen mediahubi',
        title: 'Cinema Spectrum',
        icon: '/img/portfolio/icons/mm2.jpg',
        screenshots: [
            '/img/portfolio/screenshot1.png',
            '/img/portfolio/screenshot3.png',
            '/img/portfolio/screenshot2.png',
        ],
        content: (
            <>
                <div className="tech">
                    React, TypeScript, Node.js, Electron, Jest, Sass, Redux
                </div>
                <p>
                    <a href="https://cinemaspectrum.laras.cc/" target="_blank">
                        Projektin kotisiivu
                    </a>
                </p>
                <p>
                    <b>Cinema Spectrum</b> on web-teknologioilla ja Electronilla
                    toteutettu mediahubi / -keskus, joka tarjoaa paikallisten
                    TV-ohjelmien ja elokuvien kirjastolle (skannatut DVD:t tms.)
                    striimauspalvelun kaltaisen käyttöliittymän.
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
                    Kodi:n käytössä huomaamiani kipukohtia on huomioitu.
                </p>
            </>
        ),
    },
    {
        desc: 'C++-pohjainen cross-platform mediahubi',
        title: 'MediaManager',
        icon: '/img/portfolio/icons/mm.jpg',
        screenshots: ['/img/portfolio/mediamanager.png'],
        content: (
            <>
                <div className="tech">C++, Dear ImGui</div>
                <p>
                    A cross-platform entertainment hub for managing your local
                    collection of movies and TV shows.
                </p>
                <p>
                    <a
                        href="https://github.com/TatuLaras/MediaManager"
                        target="_blank"
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
        icon: '/img/portfolio/icons/submergeold.jpg',
        screenshots: ['/img/portfolio/submergeold.jpg'],
        content: (
            <>
                <div className="tech">
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
                        href="https://tatularas.github.io/submerge-landing/"
                        target="_blank"
                    >
                        täältä
                    </a>
                    .
                </p>
                <p>Esittelyvideo:</p>
                <iframe
                    className="video-embed"
                    src="https://www.youtube.com/embed/Ggv0v3yDv28"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </>
        ),
    },
    {
        desc: 'Vuosituhannen vaihteen tyyliin toteutettu portfolio',
        title: 'Edellinen portfolio',
        icon: '/img/portfolio/icons/portfolio1.png',
        screenshots: ['/img/portfolio/portfolio1.png'],
        content: (
            <>
                <div className="tech">
                    React, TypeScript, Sass, Github actions
                </div>
                <p>
                    Tätä edeltävä portfolio. Tämä nykyinen on toteutettu
                    samoilla teknologioilla.
                </p>
                <p>
                    <a
                        href="https://tatularas.github.io/portfolio"
                        target="_blank"
                    >
                        Linkki portfolioon
                    </a>
                </p>
            </>
        ),
    },
    {
        desc: 'GitHub',
        title: 'Muut projektit',
        icon: '/img/face.jpg',
        screenshots: [],
        content: (
            <>
                <p>
                    Ohjelmointityön tuoksinnassa ei aina muistu päivittää
                    uusimpia projekteja tänne portfolion puolelle. Myös
                    projektit jotka ovat melko valmiita mutta eivät 100%
                    julkaisuvalmiita jäävät myös ulkopuolelle. Kaikki projektini
                    löydät{' '}
                    <a href="https://github.com/TatuLaras/" target="_blank">
                        GitHubistani
                    </a>
                    .
                </p>
                <p>
                    <a href="https://github.com/TatuLaras/musicbase">Täältä</a>{' '}
                    löytyy esimerkiksi nykyinen työn alla oleva projektini,
                    Reactilla ja Taurilla (Rust) toteutettu musiikkisovellus.
                </p>
            </>
        ),
    },
];

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
