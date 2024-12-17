export interface Project {
    title: string;
    desc: string;
    content: JSX.Element | string;
    icon: string;
    screenshots: string[];
}

export interface Coords {
    x: number;
    y: number;
}
