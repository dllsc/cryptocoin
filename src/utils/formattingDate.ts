export const formattingDate = (tickItem: string) => {
    return new Date(tickItem).toLocaleDateString();
};