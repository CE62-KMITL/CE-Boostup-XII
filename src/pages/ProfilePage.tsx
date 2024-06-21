import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/Cards/ProfileCard";
import { useUser } from "../hooks/user.hook";
import { useProblems } from "../hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProfileComponentsStore } from "../store/zustand/profile-components.zustand";
import { useUsers } from "../hooks/users.hook";

export default function ProfilePage() {
    const { roleUserQuery } = useUsers();
    const { getSelfQuery } = useUser();
    const { components, profileComponents } = useProfileComponentsStore();
    const { publishedProblemsQuery } = useProblems();

    if (publishedProblemsQuery.isLoading || getSelfQuery.isLoading || roleUserQuery.isLoading)
        return <LoadingPage />;

    return (
        <>
            {components !== null && profileComponents[components]}
            <Background />
            <div className="flex justify-center">
                <ProfileCard
                    data={getSelfQuery.data}
                />
            </div>
        </>
    );
}