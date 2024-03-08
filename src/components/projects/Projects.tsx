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
    const delayBefore = 0.3;
    const delayBetween = 0.2;
    const baseDelay = delayValue + delayBefore;
    return (
        <aside
            className='projects blur-bg animate-open vertical'
            style={delay(delayValue)}
        >
            <div className='border-bottom'></div>
            <div className='border-right'></div>
            <div className='title'>PROJECTS</div>
            <div className='list'>
                {projects.map((project, i) => {
                    const itemDelay = baseDelay + delayBetween * i;

                    return (
                        <ListItem
                            project={project}
                            delayValue={itemDelay}
                            onProjectSelected={onProjectSelected}
                            key={i}
                        />
                    );
                })}
            </div>
            <div className='really-small-text jitter' style={delay(baseDelay)}>
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
