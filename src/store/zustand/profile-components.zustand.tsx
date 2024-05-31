import { create } from "zustand";
import EditProfile from "../../components/profile/ProfilePopUp/EditProfile";
import ChangePassword from "../../components/profile/ProfilePopUp/ChangePassword";

interface ProfileComponentsState {
    components: number | null;
    profileComponents: JSX.Element[];
    setComponents: (value: number | null) => void;
}

export const useProfileComponentsStore = create<ProfileComponentsState>((set) => ({
    profileComponents: [
        <ChangePassword />,
        <EditProfile />,
    ],
    components: null,
    setComponents: (value: number | null) => set({ components: value }),
}));