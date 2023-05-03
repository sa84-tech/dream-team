export const getFirstName = (name?: string) => {
    return name ? name.split(' ')[0] : '' ?? '';
};

export const getLastName = (name?: string) => {
    return name ? name.split(' ')[1] : '' ?? '';
};
