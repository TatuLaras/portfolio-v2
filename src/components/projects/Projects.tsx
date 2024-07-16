import { useEffect, useState } from 'react';
import { projects } from '../../content';
import { delay } from '../../helpers';
import { Project } from '../../types';
import ListItem from './ListItem';

export default function Projects({
    delayValue,
    onProjectSelected,
}: {
    delayValue: number;
    onProjectSelected: (project: Project) => void;
}) {
    const [offset, setOffset] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);

    const delayBefore = 0.3;
    const delayBetween = 0.2;
    const pageSize = 4;

    const baseDelay = delayValue + delayBefore;
    const projectsEffective = projects.slice(offset, offset + pageSize);

    function next() {
        setFirstLoad(false);
        setOffset((old) => old + pageSize);
    }
    function previous() {
        setFirstLoad(false);
        setOffset((old) => Math.max(old - pageSize, 0));
    }

    useEffect(() => {
        console.log(offset, 'offset');
    }, [offset]);
    return (
        <aside
            className="projects blur-bg animate-open vertical"
            style={delay(delayValue)}
        >
            <div className="border-bottom"></div>
            <div className="border-right"></div>
            <div className="title">PROJECTS</div>
            <div className="list">
                {projectsEffective.map((project, i) => {
                    const itemDelay = firstLoad
                        ? baseDelay + delayBetween * i
                        : delayBetween * i;

                    return (
                        <ListItem
                            project={project}
                            delayValue={itemDelay}
                            onProjectSelected={onProjectSelected}
                            key={project.title}
                        />
                    );
                })}
            </div>
            <nav>
                <button
                    onClick={previous}
                    className={`${offset > 0 ? 'enabled' : ''} project-nav-button prev`}
                >
                    &lt;&lt;
                </button>
                <button
                    onClick={next}
                    className={`${offset + pageSize < projects.length ? 'enabled' : ''} project-nav-button`}
                >
                    &gt;&gt;
                </button>
            </nav>
            <div className="really-small-text jitter" style={delay(baseDelay)}>
                <h1>Varoitus:</h1>
                <p>
                    Tätä ei kannata lukea. Tuhlaat aikaasi. Kyseessä on
                    koristeellinen elementti sivulla, eikä tämä teksti sisällä
                    mitään varsinaista informaatiota.
                </p>
                <h1>Vieläkö luet tätä?</h1>
                <p>Saatat tarvita harrastuksen.</p>
                <p>
                    Alla oleva viivakoodi ei myöskään johda mihinkään, sitä ei
                    kannata yrittää skannata.
                </p>
            </div>
        </aside>
    );
}
