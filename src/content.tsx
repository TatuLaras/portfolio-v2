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
        desc: 'Visuaalisen luovan ohjelmoinnin alusta',
        title: 'Muscini',
        icon: '/img/portfolio/icons/muscini.jpg',
        screenshots: ['/img/portfolio/muscini.gif'],
        content: (
            <>
                <div className="tech">C, JACK audio kit, Raylib, GLSL</div>
                <p>
                    <a href="https://github.com/TatuLaras/muscini">
                        Projekti GitHubissa.
                    </a>
                </p>
                <p>
                    Vuosituhannen vaihteen aikaiset{' '}
                    <a href="https://fi.wikipedia.org/wiki/Demoskene">
                        demoscene
                    </a>
                    -tuotokset ovat pitkään kiehtoneet meikäläistä siistin
                    estetiikansa lisäksi myös sen suhteen, että kyseessä on
                    taiteenlaji jossa taidetta tuotetaan pitkälti visuaalisen,
                    luovan ohjelmoinnin kautta. Halusin dipata varpaitani tähän
                    luovan ohjelmoinnin maailmaan ja idea syntyi työkalusta,
                    joka tarjoaisi mahdollisimman kitkattomat lähtökohdat
                    tälläiseen luovaan flow:hun.
                </p>
                <p>
                    Muscini on siis alusta, joka hoitaa puolestasi kaiken muun
                    paitsi varsinaisen luovan työn. Hot reload -arkkitehtuuri
                    tarjoaa mahdollisuuden kirjoittaa C-kielistä
                    visualisaatio-ohjelmaasi kuin dynaamisella
                    skriptauskielellä, koskaan tajunnanvirtaa pysäyttämättä.
                    Muscini vastaanottaa ääntä joko työpöydälläsi pyörivästä
                    musiikkisoittimesta tai latenssittomasta lähteestä käyttäen
                    JACK audio kit -rajapintaa. Ääntä analysoidaan, poimien
                    sieltä signaalin taajuus- ja rytmisisällön joita voit
                    käyttää visualisaatiotasi ohjelmoidessa. Rytmitietoa voi
                    myös syöttää MIDI:n kautta, mahdollistaen Muscinin
                    integraation osaksi musiikillista audio-visuaalista
                    workflowta.
                </p>
                <p>
                    Käyttötarkoitus Muscinissa on siis pääosin se, että voit
                    laittaa mieleistäsi happoteknoa tai muuta musiikkia soimaan
                    ja antaa tajunnan virrata.
                </p>
            </>
        ),
    },
    {
        desc: 'Laajennettava modulaarinen syntetisaattori',
        title: 'Waveforest',
        icon: '/img/portfolio/icons/waveforest.jpg',
        screenshots: [
            '/img/portfolio/waveforest/1.png',
            '/img/portfolio/waveforest/2.png',
        ],
        content: (
            <>
                <div className="tech">C, JACK audio kit, LV2, Raylib, Clay</div>
                <p>
                    <a href="https://github.com/TatuLaras/waveforest">
                        Projekti GitHubissa.
                    </a>
                </p>
                <p>
                    Mikäli haluaa tehdä musiikkia Linux-ympäristössä, käytössäsi
                    on laaja valikoima erittäin laadukkaita avoimen lähdekoodin
                    ohjelmistoja ja plugineita erinäisiin audio-tarpeisiin.
                    Kuitenkin FM-synteesin osa-alueella koin olemassa olevat
                    vaihtoehdot hieman rajoittaviksi, joten ryhdyin tuumasta
                    toimeen ja aloin pohtia että minkälainen olisi täydellinen
                    FM-syntikka. Tajusin, että monissa ohjelmistoissa
                    käytännöksi vakiintunut ns. node-editori sopisi
                    täydellisesti mallintamaan tilannetta, jossa halutaan pystyä
                    yhdistämään mitä tahansa, mihin tahansa. Itseasiassa, tämän
                    tyyppinen käyttöliittymä olisi omiaan myös muunlaisille
                    äänen syntetisoinnin muodoille.
                </p>
                <p>
                    Siispä päädyin hieman monimutkaista reittiä pitkin
                    lopputulokseen, että haluan tehdä modulaarisen syntikan.
                    Tämä syntikka kuitenkin eroaa muista vastaavista syntikoista
                    kuten VCV rackistä tai Cardinalista siten, että se ei pyri
                    mallintamaan oikean maailman modulaarisyntetisoinnin
                    laitteistoa moduuleineen ja johtoineen, vaan pelkäämättä
                    hyödyntää digitaalista ulottuvuutta ja sen tuomia
                    käytettävyysetuja.
                </p>
                <p>
                    Kehityksessä pääpaino oli siinä, että saisi tehtyä
                    syntikasta alustan, jota on helppo laajentaa. Jokainen node
                    toteutetaan ns. pluginina, jonka ohjelma lataa
                    käynnistyessään. Toimintalogiikka on samankaltainen
                    esimerkiksi digitaaliaudioohjelmistojen efektipluginien
                    kanssa, mutta pelkistetympi.
                </p>
            </>
        ),
    },
    {
        desc: 'Hot reload -kirjasto',
        title: 'Firewatch',
        icon: '/img/portfolio/icons/firewatch.jpg',
        screenshots: [],
        content: (
            <>
                <p>
                    <a href="https://github.com/TatuLaras/firewatch">
                        Projekti GitHubissa.
                    </a>
                </p>
                <p>
                    Olen huomannut, että hot reloading -ominaisuuksilla voi olla
                    luovissa jutuissa erittäin suuri positiivinen vaikutus. Sen
                    sijaan, että flow katkeaisi tasaisin väliajoin esimerkiksi
                    tiedostoja paikasta toiseen exportatessa, ohjelmat voisivat
                    toimia siten, että jos jotain muutetaan jossain niin muutos
                    pätee samantien kaikkialla muuallakin. Täten koko
                    tietokoneesta tulee vain yksi luova kenttä jossa temmeltää
                    murheetta.
                </p>
                <p>
                    Tätä ei tietenkään ole järkevää soveltaa joka paikkaan,
                    mutta monissa projekteissani, kuten Muscinissa tai Noblessa,
                    hot reloading -ominaisuuksille on tarvetta. Tämän takia tein
                    kirjaston, jonka ansiosta tälläisten ominaisuuksien
                    lisääminen toimii "miksi ei" -periaatteella. Single header
                    -kirjastona tämän projektin laajuus ei ole kovinkaan suuri,
                    mutta projekteistani tämä on se, josta on ollut minulle
                    itselleni ylivoimaisesti eniten hyötyä, varsinkin suhteessa
                    siihen kuinka vähän aikaa tämän kehittämiseen meni.
                </p>
            </>
        ),
    },
    {
        desc: 'Scene-editori vanhantyyliseen pelinkehitykseen',
        title: 'Noble',
        icon: '/img/portfolio/icons/noble.jpg',
        screenshots: [
            '/img/portfolio/noble/1.png',
            '/img/portfolio/noble/2.png',
            '/img/portfolio/noble/3.png',
            '/img/portfolio/noble/4.png',
        ],
        content: (
            <>
                <div className="tech">C, Raylib</div>
                <p>
                    <a href="https://github.com/TatuLaras/noble">
                        Projekti GitHubissa.
                    </a>
                </p>
                <p>
                    Jokusen aikaa sitten näin YouTubesta Eskil Steenbergin
                    videon{' '}
                    <a href="https://www.youtube.com/watch?v=443UNeGrFoM">
                        "How I Program C"
                    </a>
                    , jossa hän selittää omintakeista lähestymistapaansa
                    pelinkehitykseen. Pelimoottorin sijaan kehitys pohjautuu
                    pitkälti hänen itsensä tarpeisiin räätälöityihin omiin
                    työkaluihin. Tästä inspiroituneena idea lähtikin laukalle,
                    haaveena kehittää oma ensimmäisen persoonan fantasiapeli,
                    graafisena tyylinään 90-luvun ja vuosituhannen vaihteen
                    tyylinen vanhahtava 3D-grafiikka. Aloitin projektin
                    yksinkertaisella 3D-mallintarkasteluohjelmalla, joka hot
                    reloadingin avulla mahdollisti mallien teksturoinnin
                    käyttäen ulkoista pikseligrafiikkapiirto-ohjelmaa. Tämän
                    jälkeen tarvetta oli ohjelmalle, jonka avulla voisin luoda
                    kyseisiä fantasiaympäristöjä.
                </p>
                <p>
                    Siispä loin 3D-editorin, joka toimii juuri siten miten
                    haluaisin 3D-editorin toimivan. Erityisesti pidän
                    sovelluksen hiotusta navigaatiosta, jonka avulla 3D scenejen
                    navigointi sujuu ongelmitta. Sovellus mahdollistaa esineiden
                    asettamisen maailmaan ja niiden helpon manipuloinnin
                    säädettävän ruudukon avulla. Esineet, skyboksit ja maaston
                    tekstuurit haetaan tietystä kansiosta nimen perusteella ja
                    hakuominaisuudella niitä voi tallettaa tietyn
                    numeronäppäimen alle. Kun esineen malli tai tekstuuri
                    muuttuu levyllä, heijastuu muutos samantien editorissa,
                    mahdollistaen mallien muokkaamisen siten että näkee kyseisen
                    mallin kontekstissa. Moni toiminto kuten kameran
                    liikuttaminen, zoomaus, mallien siirtely tapahtuu
                    luontaisella hiiren sivuttaisliikkeellä, ja kameran
                    keskipisteen voi milloin tahansa keskittää hiiren alla
                    olevan mallin tai maaston kohdan kohdalle näppäintä
                    painamalla. Skeneä myös pääsee tunnelmoimaan samantien
                    ensimmäisen persoonan FPS-kontrollerin avulla.
                </p>
                <p>
                    Sovellus mahdollistaa myös maaston muokkaamisen tavalla,
                    joka sopii pelin grafiseen tyyliin. Maasto perustuu puolen
                    metrin väleillä olevaan ruudukkoon, jonka pisteitä voi
                    näppärästi muokata erilaisin työkaluin. Pisteiden
                    tekstuureja voi myös määrittää, ja niiden välillä
                    interpoloidaan antaen halutun vuosituhannen vaihteen
                    3D-lookin. Tämän lisäksi valaistuksen muokkaus on tehty
                    helpoksi, tulokset näkevän samantien editorissa. Valaistus
                    myös toimii aikakautensa verteksipohjaisella logiikalla.
                </p>
            </>
        ),
    },
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
        title: 'Media Manager',
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
        desc: 'GitHub',
        title: 'Muut projektit',
        icon: '/img/face.jpg',
        screenshots: [],
        content: (
            <>
                <p>
                    Ohjelmointityön tuoksinnassa ei aina muistu päivittää
                    uusimpia projekteja tänne portfolion puolelle. Kaikki
                    projektini löydät{' '}
                    <a href="https://github.com/TatuLaras/" target="_blank">
                        GitHubistani
                    </a>
                    .
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
