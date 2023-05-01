export interface User {
    id: number | string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role?: string;
    bio?: string;
}
