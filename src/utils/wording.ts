export enum Language {
    French = 'fr',
    English = 'en'
}

interface WordInterface {
    Navbar : {
        home: string,
        studies: string,
        job: string,
        projects: string,
        about: string,
        contactMe: string,
        myGithub: string
    }
}

const FrenchWord: WordInterface = {
    Navbar: {
        home: 'Accueil',
        studies: 'Formations',
        job: 'Expériences professionnels',
        projects: 'Projets',
        about: 'A propos',
        contactMe: 'Me contacter',
        myGithub: 'Mon GitHub'
    }
};


const EnglishWord: WordInterface = {
    Navbar: {
        home: 'Home',
        studies: 'Studies',
        job: 'Professional experiences',
        projects: 'Projects',
        about: 'About',
        contactMe: 'Contact me',
        myGithub: 'My GitHub'
    }
};

export default function useLanguage(language: Language) {
    if (language === Language.French) {
        return FrenchWord;
    }
    return EnglishWord;
}