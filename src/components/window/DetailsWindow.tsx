import { combine, delay } from '../../helpers';
import Profile from './Profile';
import Crimes from './Crimes';
import { Project } from '../../types';
import { useState } from 'react';
import MenuItem from './MenuItem';
import TabNav from './TabNav';
import Contact from './Contact';

type Props = {
    delayValue: number;
    tab: 'PROFILE' | 'PROJECT' | 'CONTACT';
    onClickTab: (tab: 'PROFILE' | 'CONTACT') => void;
    selectedProject: Project | null;
};

export default function DetailsWindow({
    delayValue,
    tab,
    onClickTab,
    selectedProject,
}: Props) {
    const step = 0.15;
    let delayVal = delayValue + step;
    const val = () => (delayVal += step);

    const [dragStartPos, setDragStartPos] = useState<{
        x: number;
        y: number;
    } | null>(null);
    const [translateStyle, setTranslateStyle] = useState<React.CSSProperties>(
        {},
    );

    function startDrag(e: React.MouseEvent) {
        setDragStartPos({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function endDrag() {
        setDragStartPos(null);
        setTranslateStyle({});
    }

    function updateDrag(e: MouseEvent) {
        if (!dragStartPos) return;

        const diffX = e.clientX - dragStartPos.x;
        const diffY = e.clientY - dragStartPos.y;
        setTranslateStyle({
            transform: `translateX(${diffX}px) translateY(${diffY}px)`,
        });
    }

    window.onmouseup = endDrag;
    window.onmousemove = updateDrag;

    return (
        <div
            className='window blur-bg animate-open flash'
            style={combine(delay(delayValue), translateStyle)}
        >
            <div className='border-bottom'></div>
            <div className='border-right'></div>
            <div className='menu-wrapper animate-open' style={delay(val())}>
                <ul className='menu'>
                    <MenuItem
                        onClick={() => onClickTab('PROFILE')}
                        delayValue={val()}
                    >
                        PROFILE
                    </MenuItem>
                    <MenuItem
                        onClick={() => onClickTab('CONTACT')}
                        delayValue={val()}
                    >
                        CONTACT
                    </MenuItem>
                    <MenuItem delayValue={val()} disabled={true}>
                        PROJECT
                    </MenuItem>
                </ul>
            </div>

            <TabNav onMouseDown={startDrag} delayValue={val()}>
                {tab +
                    (selectedProject
                        ? ' > ' + selectedProject.title.toUpperCase()
                        : '')}
            </TabNav>
            <div className='body animate-open horizontal' style={delay(val())}>
                {
                    {
                        PROFILE: <Profile delayValue={val() + 0.2} />,
                        PROJECT: (
                            <Crimes selectedProject={selectedProject}></Crimes>
                        ),
                        CONTACT: <Contact />,
                    }[tab]
                }
            </div>
        </div>
    );
}
