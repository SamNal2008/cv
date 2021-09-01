export const openInNewTab = (url: string) => {
    console.log(url);
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
        newWindow.opener = null
    }
}

export const replacer = (key: any, value: any) => {
    return typeof value === 'undefined' ? null : value
}

export const isValidEmail = (email: string): boolean => {
    const patternVerificator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMessage = 'L\'adresse email que vous avez entrée est invalide';
    return patternVerificator.test(email);
}

