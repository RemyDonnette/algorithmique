// Fonction
export function tabSortedByDate(tab) {
    const articlesSortedByDate = tab.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
    })
    return articlesSortedByDate
}
