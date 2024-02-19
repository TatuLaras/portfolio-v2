import { useBlip } from '../../hooks';
import { TProject } from '../../types';

export default function Crimes({
    delayValue,
    selectedProject,
}: {
    delayValue: number;
    selectedProject: TProject | null;
}) {
    useBlip(delayValue);

    if (!selectedProject) return null;

    return <div className='crimes'>{selectedProject.content}</div>;
}
