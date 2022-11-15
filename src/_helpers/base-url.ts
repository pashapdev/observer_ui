export const baseUrl = (): string => {
    if (process.env.NODE_ENV === 'production') {
        return window.location.origin
    } else {
        return process.env.API_URL || 'http://localhost:8089';
    }
}