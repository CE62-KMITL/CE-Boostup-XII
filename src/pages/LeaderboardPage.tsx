import Background from "../components/utils/Background";
import Leaderboard from "../components/leaderboard/Leaderboard";
function LeaderboardPage() {
  return (
    <>
      <Background />
      <div className="px-20 flex w-screen h-screen flex-col">
        <header className="mt-[108px] mb-12 text-[40px] text-stone01">การจัดอันดับ</header>
        <Leaderboard></Leaderboard>
      </div>
    </>
  );
}

export default LeaderboardPage;
