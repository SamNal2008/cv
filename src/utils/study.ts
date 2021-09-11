export default interface Study {
    schoolName: string,
    description: string,
    startedDate: string,
    finishedDate: string,
    place: string,
    diploma?: string, // FIXME
    id: string,
    logo: string,
    websiteUrl: string
}