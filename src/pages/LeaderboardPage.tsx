import Background from "../components/utils/Background";
import Leaderboard from "../components/leaderboard/Leaderboard";
import { useUsers } from "../hooks/users.hook";
import { useGroups } from "../hooks/groups.hook";
import LoadingPage from "./LoadingPage";
import { useEffect, useState } from "react";
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand";
import { useScroll } from "../hooks/scroll.hook";

function LeaderboardPage() {
  const { isLoading: isLoadingUsers, roleUserQuery } = useUsers();
  const { isLoading: isLoadingGroups } = useGroups();
  const { setPaginationRequest, paginationRequest } = usePaginationRequestStore();
  const [page, setPage] = useState<number>(1);
  const { isBottom } = useScroll();

  useEffect(() => {
    if (page)
      setPaginationRequest({
        ...paginationRequest,
        page: page,
        sort: "totalScore",
      });
  }, [page]);

  useEffect(() => {
    if (isBottom && roleUserQuery.data && page < Math.ceil(roleUserQuery.data.total / paginationRequest.perPage)) 
      setPage(page + 1);
  }, [isBottom]);

  if (isLoadingUsers || isLoadingGroups || roleUserQuery.isLoading)
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
