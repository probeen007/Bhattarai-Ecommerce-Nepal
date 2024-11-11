export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-NP', { style: 'currency', currency: 'NPR' }).format(amount);
};
