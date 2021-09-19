export default interface HomeContent {
    id: string
    mainTitle: string,
    textDescriptor: string,
    pictureUrl: string
}

export const defaultHome: HomeContent =  {
    id: 'home',
    mainTitle: 'Bienvenue sur mon site',
    textDescriptor: "Jeune ingénieur informatique spécialisé en système d'information et génie logiciel, en dernière année à l'EPITA.  Je suis à la recherche d'un stage de fin d'étude pour une durée de 6 mois, débutant le 15 février 2022. dans le but de devenir Ingénieur en Système d'information & Génie logiciel. Je suis bon communiquant, curieux, rigoureux et organisé, avec un grand sens de l'esprit d'équipe. Passionné des nouvelles technologies depuis tout jeune, j'essaie de rester à jour avec les dernières tendances et bonnes pratiques. Grâce à mon parcours à l'Epita en SIGL et ma démarche ingénieur j'apporte une expertise technique à des problèmes concrets en prenant en compte tous les enjeux ainsi que la cohérence de tout un système d'information.",
    pictureUrl: ''
}