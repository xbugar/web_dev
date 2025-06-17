export type AdminDashboardUser = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    notebookCount: number,
    eventCount: number,
    deckCount: number,
    totalNotes: number,
    totalCards: number
}

export type UserCardProps = {
    userId: string;
    title: string;
    titleOfParent: string;
};