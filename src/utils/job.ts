export default interface Job {
    jobName: string,
    company: string,
    description: string,
    startedDate: string,
    finishedDate: string,
    place: string,
    id: string,
    logo: string,
    websiteUrl: string,
    content?: string,
    timeInMonth?: number
}