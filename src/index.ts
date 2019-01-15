export function start(tagName: string, parameter?: string): string {
    return `[${tagName}${parameter === undefined ? "" : `="${parameter}"`}]`;
}

export function end(tagName: string): string {
    return `[/${tagName}]`;
}
