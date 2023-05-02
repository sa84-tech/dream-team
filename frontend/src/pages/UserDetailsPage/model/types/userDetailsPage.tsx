import { User } from "@/entities/User";

export interface UserDetailsPageSchema {
    isLoading?: boolean;
    error?: string;
    data?: User;
}
