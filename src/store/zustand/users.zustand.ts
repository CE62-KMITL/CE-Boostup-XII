import { create } from "zustand";
import { UserModelResponse } from "../../types/response.type";

interface UsersState {
    users: UserModelResponse[] | null;
    setUsers: (users: UserModelResponse[]) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    users: null,
    setUsers: (users: UserModelResponse[]) => set({ users }),
}));