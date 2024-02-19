import { delay, imgSrc } from '../../helpers';
import { TProject } from '../../types';
import { useBlip } from '../../hooks';

export default function ListItem({
    project,
    onProjectSelected,
    delayValue, // Seconds
}: {
    project: TProject;
    onProjectSelected: (project: TProject) => void;
    delayValue: number;
}) {
    const imageDelay = 0.4;

    useBlip(delayValue);

    return (
        <div
            className='item animate-open horizontal'
            style={delay(delayValue)}
            onClick={() => onProjectSelected(project)}
        >
            <div
                className='image-container animate-open'
                style={delay(delayValue + imageDelay)}
            >
                <div
                    className='image hover-shake'
                    style={imgSrc(project.img)}
                />
            </div>
            <div className='details'>
                <div className='title'>{project.title.toUpperCase()}</div>
                <div className='desc'>{project.desc}</div>
            </div>
        </div>
    );
}
