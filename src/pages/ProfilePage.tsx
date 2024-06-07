import NavBar from "../components/utils/NavBar";
import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/Cards/ProfileCard";
import { useUser } from "../hooks/user.hook";
import { useProblems } from "../hooks/problems.hook";
import { useProblemsStore } from "../store/zustand/problems.zustand";
import LoadingPage from "./LoadingPage";
import { useProfileComponentsStore } from "../store/zustand/profile-components.zustand";

export default function ProfilePage() {
    const { user, } = useUser();
    const { components, profileComponents } = useProfileComponentsStore();
    const { allProblems } = useProblemsStore();
    const { isLoading } = useProblems();

    if (isLoading || !user)
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
                    ranking={user.problemSolvedCount.toString()}
                    point={user.totalScore.toString()}
                    problem_count={user.problemSolvedCount.toString()}
                    problem_progress={(user.problemSolvedCount * 100 / (allProblems as []).length).toString()}
                />
            </div>
        </>
    );
}