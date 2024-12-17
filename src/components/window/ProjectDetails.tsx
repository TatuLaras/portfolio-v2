import { useState } from 'react';
import { Project } from '../../types';

type Props = {
    selectedProject: Project | null;
    onOpenScreenshots: (images: string[]) => void;
};

export default function ProjectDetails({
    selectedProject,
    onOpenScreenshots,
}: Props) {
    const [dismissScreenshotInfo, setDismissScreenshotInfo] = useState(false);

    return (
        <div className="project">
            {selectedProject && (
                <>
                    {selectedProject.screenshots.length > 0 && (
                        <>
                            {!dismissScreenshotInfo && (
                                <div className="screenshot-info">
                                    Klikkaa nähdäksesi
                                    <br />
                                    kuvankaappaukset
                                </div>
                            )}
                            <img
                                draggable={false}
                                className="preview"
                                src={selectedProject.screenshots[0]}
                                onClick={() => {
                                    setDismissScreenshotInfo(true);
                                    onOpenScreenshots(
                                        selectedProject.screenshots,
                                    );
                                }}
                            />
                        </>
                    )}
                    <div className="content">{selectedProject.content}</div>
                </>
            )}
        </div>
    );
}
