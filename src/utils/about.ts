import { AllInbox, Instagram, LinkedIn, Mail, PhoneAndroid, Speaker, SportsBaseball, SportsBasketball, SportsHandball, SportsKabaddi, SportsRugby, SportsRugbyOutlined, SportsTennis, SportsVolleyball } from '@material-ui/icons';
import GitHub from '@material-ui/icons/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { SvgIcon } from '@mui/material';

export interface VisitedCountry {
    livedThere?: boolean,
    country: string,
    city?: string,
    timeStayed?: string,
    flag?: any
};

export enum HardSkillCategory {
    Infrastructure = 'Infrastructure',
    Cloud = 'Cloud',
    DevOps = 'DevOps',
    Data = 'Data',
    Backend = 'Backend',
    Frontend = 'Frontend',
    Quality = 'Qualité'
};

export enum SoftSkillCategory {
    Management = 'Management',
    Organisation = 'Organisation',
    Communication = 'Communication',
    AnalyseAndSynthesis = 'Analyse et Synthèse',
    CriticalSpirit = 'Esprit critique'
};

export enum LanguageLevel {
    A1 = 'Connaissance des bases',
    A2 = 'Bonnes connaissances',
    B1 = 'Très bonnes connaissances',
    B2 = 'Courant',
    C1 = 'Billingue',
    C2 = 'Langue maternelle'
}

export enum MethodCategory {
    Agile = 'Agile',
    VCycle = 'Cycle en V',
    BusinessCase = 'Business Case',
    DesignThinking = 'Design Thinking'
};

export interface Method {
    icon?: any,
    name: string,
    category: MethodCategory,
    content: string
};

export interface HardSkill {
    icon?: any,
    content: string,
    name: string,
    category: HardSkillCategory
};

export interface SoftSkill {
    icon?: any,
    content: string,
    name: string,
    category: SoftSkillCategory
};

export interface Interest {
    category: InterestCategory,
    content: string,
    name: string,
    icon?: any
};

export interface Sport {
    name: string,
    category: 'Individuel' | 'Collectif',
    content: string,
    icon?: any
};

export interface Language {
    name: string,
    icon?: any,
    level: LanguageLevel
};

export enum InterestCategory {
    Music = 'Musique',
    Cinema = 'Cinéma',
    VideoGame = 'Jeux vidéos',
    CardGame = 'Jeux de cartes'
}

export interface Contact {
    icon?: any,
    name: string,
    content: string
}

export interface Information {
    introduction: string
    contacts: Contact[],

}

export interface Quality {
    name: string,
    icon: any
}

interface AboutContent {
    id: string,
    informations: Information,
    sports: Sport[],
    languages: Language[],
    visitedCountries: VisitedCountry[],
    hardSkills: HardSkill[],
    softSkills: SoftSkill[],
    interests: Interest[],
    methods: Method[],
    valeurs: Quality[],
    quality: Quality[]
};

export const defaultAbout: AboutContent = {
    id: 'about',
    informations: {
        introduction: "Je m'appelle Samy Nalbandian, j'ai 23 ans et je suis actuellement en dernière année à l'Epita",
        contacts: [
            {
                icon: PhoneAndroid,
                name: 'Téléphone',
                content: '+33 6 69 66 01 32'
            },
            {
                icon: Mail,
                name: 'Adresse email',
                content: 'samy.nalbandian@epita.fr'
            },
            {
                icon: LinkedIn,
                name: 'Linkedin',
                content: 'https://www.linkedin.com/in/snal'
            },
            {
                icon: Instagram,
                name: 'Instagram',
                content: 'https://www.instagram.com/samynalbandian/'
            },
            {
                icon: GitHub,
                name: 'Github',
                content: 'https://www.github.com/SamNal2008/'
            }
        ],
    },
    sports: [
        {
            category: 'Individuel',
            name: 'Tennis',
            icon: SportsTennis,
            content: "Ce sport m'a appris à perceverer, avoir un esprit de compétition"
        },
        {
            category: 'Collectif',
            name: 'Handball',
            icon: SportsHandball,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
        {
            category: 'Collectif',
            name: 'Basketball',
            icon: SportsBasketball,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
        {
            category: 'Collectif',
            name: 'Baseball',
            icon: SportsBaseball,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
        {
            category: 'Collectif',
            name: 'Rugby',
            icon: SportsRugbyOutlined,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
        {
            category: 'Collectif',
            name: 'Volley',
            icon: SportsVolleyball,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
        {
            category: 'Individuel',
            name: 'Judo',
            icon: SportsKabaddi,
            content: "Compter sur mon équipe, avoir un soutien total pendant les phases d'entrainement, de match et de post match"
        },
    ],
    hardSkills: [
        {
            category: HardSkillCategory.Infrastructure,
            name: 'Kong',
            icon: 'https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/kong-logomark-blue-256px.png',
            content: 'API Manager'
        },
        {
            category: HardSkillCategory.Infrastructure,
            name: 'RabbitMQ',
            icon: 'https://seeklogo.com/images/R/rabbitmq-logo-25641A76DE-seeklogo.com.png',
            content: 'MoM'
        },
        {
            category: HardSkillCategory.Backend,
            name: 'C++',
            icon: 'https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png',
            content: ''
        },
        {
            category: HardSkillCategory.Backend,
            name: 'Java',
            icon: 'https://cdn.freelogovectors.net/svg05/java-logo.svg',
            content: 'Spark & Jooq'
        },
        {
            category: HardSkillCategory.Backend,
            name: 'NodeJS',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
            content: 'Framework NestJS'
        },
        {
            category: HardSkillCategory.Backend,
            name: 'Python',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
            content: 'Flask & Django'
        },
        {
            category: HardSkillCategory.Backend,
            name: 'Bash',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
            content: ''
        },
        {
            category: HardSkillCategory.Cloud,
            name: 'AWS',
            icon: 'https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png',
            content: 'Cloud provider'
        },
        {
            category: HardSkillCategory.Cloud,
            name: 'GCP',
            icon: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
            content: 'Cloud provider'
        },
        {
            category: HardSkillCategory.Cloud,
            name: 'Openstack',
            icon: 'https://object-storage-ca-ymq-1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-images-prod/openstack-logo/OpenStack-Logo-Vertical.png',
            content: 'Cloud Privé'
        },
        {
            category: HardSkillCategory.DevOps,
            name: 'Jenkins',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png',
            content: 'CI/CD'
        },
        {
            category: HardSkillCategory.DevOps,
            name: 'Terraform',
            icon: 'https://i.pinimg.com/originals/28/ec/74/28ec7440a57536eebad2931517aa1cce.png',
            content: 'Infrastructure as Code'
        },
        {
            category: HardSkillCategory.DevOps,
            name: 'GitLab C/I',
            icon: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png',
            content: ''
        },
        {
            category: HardSkillCategory.DevOps,
            name: 'Kubernetes',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png',
            content: ''
        },
        {
            category: HardSkillCategory.DevOps,
            name: 'Docker',
            icon: 'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ',
            content: ''
        },
        {
            category: HardSkillCategory.Data,
            name: 'MySQL',
            icon: 'http://assets.stickpng.com/images/5848104fcef1014c0b5e4950.png',
            content: 'RDBMS'
        },
        {
            category: HardSkillCategory.Data,
            name: 'PostgreSQL',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
            content: 'RDBMS'
        },
        {
            category: HardSkillCategory.Data,
            name: 'MongoDB',
            icon: 'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png',
            content: 'No SQL'
        },
        {
            category: HardSkillCategory.Frontend,
            name: 'ReactJS',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
            content: ''
        },
        {
            category: HardSkillCategory.Frontend,
            name: 'Angular',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
            content: ''
        },
        {
            category: HardSkillCategory.Frontend,
            name: 'Svelte',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
            content: ''
        },
        {
            category: HardSkillCategory.Frontend,
            name: 'HTML5',
            icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
            content: ''
        },
        {
            category: HardSkillCategory.Frontend,
            name: 'CSS',
            icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png',
            content: ''
        },
        {
            category: HardSkillCategory.Quality,
            name: 'Git',
            icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
            content: ''
        },
        {
            category: HardSkillCategory.Quality,
            name: 'Sonarqube',
            icon: 'https://image.pngaaa.com/350/1739350-middle.png',
            content: ''
        },
        {
            category: HardSkillCategory.Quality,
            name: 'Figma',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            content: ''
        },
        {
            category: HardSkillCategory.Quality,
            name: 'Suite office',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png',
            content: 'PowerPoint, World, Excel, Project'
        },
        
    ],
    interests: [
        {
            category: InterestCategory.Music,
            name: 'Guitare',
            content: "J'ai joué de la guitare pendant près de 4 ans"
        },
        {
            category: InterestCategory.Music,
            name: 'Concert',
            content: "J'ai joué de la guitare pendant près de 4 ans"
        },
        {
            category: InterestCategory.Cinema,
            name: 'Séries à suspens',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.Cinema,
            name: 'Documentaires',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.Cinema,
            name: 'Comédie',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.VideoGame,
            name: 'Collaborations & Cordinations',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.VideoGame,
            name: 'Reflexe et agilité',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.CardGame,
            name: 'Belotte',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.CardGame,
            name: 'Tarot',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.CardGame,
            name: 'Poker',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        {
            category: InterestCategory.CardGame,
            name: 'BlackJack',
            content: "J'adore regarder des séries sur les temps anciens notamment en Asie"
        },
        

    ],
    languages: [
        {
            icon: 'https://cdn1.iconfinder.com/data/icons/european-country-flags/83/france-512.png',
            name: 'Français',
            level: LanguageLevel.C2
        },
        {
            icon: 'https://icons.iconarchive.com/icons/wikipedia/flags/1024/GB-United-Kingdom-Flag-icon.png',
            name: 'Anglais - TOEIC : 880',
            level: LanguageLevel.B2
        },
    ],
    softSkills: [
        {
            category: SoftSkillCategory.Management,
            name: "Animation de réunions",
            icon: 'https://i.pinimg.com/474x/0b/b3/a5/0bb3a5a26f7b3183450614e18642d1f4.jpg',
            content: "",
        },
        {
            category: SoftSkillCategory.Management,
            name: "Gestion des ressources",
            icon: 'http://www.valopolis.fr/wp-content/uploads/2013/04/picto_RACI.png',
            content: "Matrice RACI",
        },
        {
            category: SoftSkillCategory.Management,
            name: "Organisation planning",
            icon: 'https://thumbs.dreamstime.com/b/calendar-icon-white-background-flat-style-calendar-icon-your-web-site-design-logo-app-ui-calendar-symbol-calendar-icon-151463207.jpg',
            content: "Diagramme de Gantt",
        },
        {
            category: SoftSkillCategory.CriticalSpirit,
            name: "Benchmark",
            icon: 'https://payload.cargocollective.com/1/9/298552/4870460/bhencweb_01_o.png',
            content: "Bilan points forts points faibles",
        },
        {
            category: SoftSkillCategory.AnalyseAndSynthesis,
            name: "Compte rendu",
            icon: 'https://lh3.googleusercontent.com/proxy/bSpnrecO2f6allYs5Yinz49kkk9KLPpgGVKlRZ_Z92S6nnhnpeU88FPyWX9mOdb-0wlY8ek3fEQA_jxL5W2NEc4O71R9KDTHh8rpMLVXNVfqwsk4WVHdBBcLc6SeCLwGken231er1B5kYTk',
            content: "Bilan points forts points faibles",
        },
        
    ],
    visitedCountries: [
        {
            livedThere: false,
            country: 'Espagne',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png',
            city: 'Barcelone'
        },
        {
            livedThere: true,
            country: 'France',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png',
            city: 'Paris',
            timeStayed: '5 ans (2016 - 2021)'
        },
        {
            livedThere: true,
            country: 'Chine',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/langfr-225px-Flag_of_the_People%27s_Republic_of_China.svg.png',
            city: 'Shenyang',
            timeStayed: '6 mois (2018)'
        },
        {
            livedThere: true,
            country: 'Maroc',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/langfr-225px-Flag_of_Morocco.svg.png',
            city: 'Rabat',
            timeStayed: '3 ans (2013 - 2016)'
        },
        {
            livedThere: true,
            country: 'France',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png',
            city: 'Marseille',
            timeStayed: '10 ans (2003 - 2013)'
        },
        {
            livedThere: true,
            country: 'Tunisie',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png',
            city: 'Tunis',
            timeStayed: '3 ans (2000 - 2003)'
        },
        {
            livedThere: true,
            country: 'Amérique latine',
            flag: 'https://images.freeimages.com/images/premium/previews/1274/12747635-south-america-map-with-flags.jpg',
            city: 'Venezuela - Colombie',
            timeStayed: '2 ans (1998 - 2000)'
        }
    ],
    methods: [
        {
            name: 'SCRUM',
            icon: 'https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png',
            category: MethodCategory.Agile,
            content: 'Chercher le besoin, réaliser des users journeys, en déduire des Epics, Feature, Task et les prioriser. Réaliser une roadmap et définir un backlog'
        }
    ],
    valeurs: [{
        name: 'Solidarité',
        icon: AllInbox
    }],
    quality: [{
        name: 'Communiquant',
        icon: Speaker
    }]

}

export default AboutContent;