import { User } from "@/entities/User";
import { EntityState } from "@reduxjs/toolkit";

export interface UsersPageSchema  extends EntityState<User> {
    isLoading?: boolean;
    error?: string;

    // pagination
    total: number;
    limit: number;
    offset: number;
    next: string,
    previous: string,
}
