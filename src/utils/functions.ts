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

export function ab2str(buf: ArrayBuffer): string {
    // @ts-ignore
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

export function str2ab(str: string): ArrayBuffer {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
  

