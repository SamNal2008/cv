export const openInNewTab = (url: string) => {
    console.log(url);
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
        newWindow.opener = null
    }
}