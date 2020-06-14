export function clearSlashes(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
}