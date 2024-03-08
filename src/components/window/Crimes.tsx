import { TProject } from '../../types';

type Props = {
    selectedProject: TProject | null;
};

export default function Crimes({ selectedProject }: Props) {
    if (!selectedProject) return null;

    return <div className='crimes'>{selectedProject.content}</div>;
}
