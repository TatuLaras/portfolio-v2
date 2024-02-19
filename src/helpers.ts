export function randomString(lenght: number): string {
    const characters =
        ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < lenght; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}

export const delay = (val: number) =>
    ({ '--delay': `${val}s` } as React.CSSProperties);
export const imgSrc = (val: string) =>
    ({ '--img-src': `url('${val}')` } as React.CSSProperties);
export const combine = (
    first: React.CSSProperties,
    second: React.CSSProperties,
) => ({ ...first, ...second });
