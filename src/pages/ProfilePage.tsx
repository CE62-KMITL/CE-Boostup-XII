import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/Cards/ProfileCard";
import { useUser } from "../hooks/user.hook";
import { useProblems } from "../hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProfileComponentsStore } from "../store/zustand/profile-components.zustand";
import { useUsers } from "../hooks/users.hook";

export default function ProfilePage() {
    const { roleUserQuery } = useUsers();
    const { user } = useUser();
    const { components, profileComponents } = useProfileComponentsStore();
    const { allProblemsQuery } = useProblems();

    if (allProblemsQuery.isLoading || !user || roleUserQuery.isLoading)
        return <LoadingPage />;

    return (
        <>
            {components !== null && profileComponents[components]}
            <Background />
            <div className="flex justify-center">
                <ProfileCard
                    username={user.displayName}
                    email={user.email}
                    house={user.group?.name as string}
                    point={user.totalScore.toString()}
                />
            </div>
        </>
    );
}