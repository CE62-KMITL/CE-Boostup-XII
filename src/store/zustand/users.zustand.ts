import { create } from "zustand";
import { UserModelResponse } from "../../types/response.type";

interface UsersState {
    users: UserModelResponse[] | null;
    roleUsers: UserModelResponse[] | null;
    setUsers: (users: UserModelResponse[]) => void;
    setRoleUsers: (users: UserModelResponse[]) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    users: null,
    roleUsers: null,
    setUsers: (users: UserModelResponse[]) => set({ users }),
    setRoleUsers: (roleUsers: UserModelResponse[]) => set({ roleUsers }),
}));