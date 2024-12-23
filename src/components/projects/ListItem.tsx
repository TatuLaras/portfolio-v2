import { delay, imgSrc } from '../../helpers';
import { Project } from '../../types';
import { useRef } from 'react';

export default function ListItem({
    project,
    onProjectSelected,
    delayValue, // Seconds
}: {
    project: Project;
    onProjectSelected: (project: Project) => void;
    delayValue: number;
}) {
    const imageRef = useRef<HTMLDivElement>(null);
    const imageDelay = 0.4;

    return (
        <div
            className="item animate-open horizontal"
            style={delay(delayValue)}
            onClick={() => {
                onProjectSelected(project);

                // // Click animation
                // imageRef.current?.classList.remove('click-shake');
                // void imageRef.current?.offsetWidth;
                // imageRef.current?.classList.add('click-shake');
            }}
        >
            <div
                className="image-container animate-open"
                style={delay(delayValue + imageDelay)}
            >
                <div
                    className="image hover-shake"
                    ref={imageRef}
                    style={imgSrc(project.icon)}
                />
            </div>
            <div className="details">
                <div className="title">{project.title.toUpperCase()}</div>
                <div className="desc">{project.desc}</div>
            </div>
        </div>
    );
}
