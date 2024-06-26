import Background from "../components/utils/Background";
import Leaderboard from "../components/leaderboard/Leaderboard";
import { useUsers } from "../hooks/users.hook";
import { useGroups } from "../hooks/groups.hook";
import LoadingPage from "./LoadingPage";
import { useProblems } from "../hooks/problems.hook";

function LeaderboardPage() {
  const { roleUserQuery } = useUsers();
  const { isLoading: isLoadingGroups } = useGroups();
  const { publishedProblemsQuery } = useProblems();

  if (isLoadingGroups || roleUserQuery.isLoading || publishedProblemsQuery.isLoading)
    return <LoadingPage />;

  return (
    <>
      <Background />
      <div className="px-20 flex w-full h-fit flex-col">
        <header className="mt-[108px] mb-12 text-[40px] text-stone01 font-semibold">การจัดอันดับ</header>
        <Leaderboard />
      </div>
    </>
  );
}

export default LeaderboardPage;
