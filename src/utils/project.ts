export enum ProjectType {
    Personal = 'personal',
    Professional = 'professionnal',
    School = 'school'
}

export type Project = {
    title: string,
    description: string,
    id: string,
    type: ProjectType,
    githubLink?: string,
    photoUrl?: string,
    content?: string
}