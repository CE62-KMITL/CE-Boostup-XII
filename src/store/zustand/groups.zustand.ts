import { create } from "zustand";
import { GroupModelResponse } from "../../types/response.type";

interface GroupsState {
    groups: GroupModelResponse[] | null;
    setGroups: (groups: GroupModelResponse[]) => void;
}

export const useGroupsStore = create<GroupsState>((set) => ({
    groups: null,
    setGroups: (groups: GroupModelResponse[]) => set({ groups }),
}));