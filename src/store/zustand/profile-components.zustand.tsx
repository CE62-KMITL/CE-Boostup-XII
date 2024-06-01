import { create } from "zustand";
import EditProfile from "../../components/profile/PopUps/EditProfile";
import ChangePassword from "../../components/profile/PopUps/ChangePassword";
import EditSuccessCard from "../../components/profile/Cards/EditSuccessCard";

interface ProfileComponentsState {
    components: number | null;
    profileComponents: JSX.Element[];
    setComponents: (value: number | null) => void;
}

export const useProfileComponentsStore = create<ProfileComponentsState>((set) => ({
    profileComponents: [
        <ChangePassword />,
        <EditProfile />,
        <EditSuccessCard />
    ],
    components: null,
    setComponents: (value: number | null) => set({ components: value }),
}));