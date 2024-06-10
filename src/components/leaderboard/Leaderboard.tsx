import OptionHeader from "./OptionHeader";
import AccountTable from "./AccountTable";
import TeamAccountTable from "./TeamAccountTable";
import Topics from "./Topics";
import { useUser } from "../../hooks/user.hook";
import { useState } from "react";
import { useUsersStore } from "../../store/zustand/users.zustand";
import { useGroupsStore } from "../../store/zustand/groups.zustand";
import { useProblems } from "../../hooks/problems.hook";
import { toZonedTime } from 'date-fns-tz';
import { format as formatDate } from 'date-fns';
import { th } from 'date-fns/locale';
import { useGroup } from "../../hooks/group.hook";

function Leaderboard() {
  const { roleUsers } = useUsersStore();
  const { groups } = useGroupsStore();
  const { publishedProblemsQuery } = useProblems();
  const { getAvatar: userAvatar } = useUser();
  const { getAvatar: groupAvatar } = useGroup();
  const [topic, setTopic] = useState<"user" | "group">("user");

  function formatThaiDate(dateString: string): string {
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, 'Asia/Bangkok');

    const datePart = formatDate(zonedDate, 'dd MMM', { locale: th });
    const timePart = formatDate(zonedDate, 'HH.mm.ss');

    return `${datePart} | ${timePart}`;
  }

  return (
    <div className="flex w-full flex-col pb-10 font-semibold">
      <OptionHeader setTopic={setTopic} topic={topic} />
      <div className="p-4 pt-8 rounded-b-lg rounded-r-lg bg-stone01 w-full h-full overflow-none">
        <Topics topic={topic} />
         {topic === "user" ?
          roleUsers?.map((user, index) => (
            <AccountTable
              id={user.id}
              number={index + 1}
              img={userAvatar(user.id)}
              name={user.displayName}
              group={user.group?.name || "No Group"}
              score={user.totalScore}
              pass={user.problemSolvedCount}
              latest={formatThaiDate(user.lastProblemSolvedAt)}
            />
          ))
          : 
          groups?.map((group, index) => (
            <TeamAccountTable
              id={group.id}
              number={index + 1}
              img={groupAvatar(group.id)}
              group={group.name}
              score={group.totalScore}
              submit={(group?.uniqueProblemSolvedCount * 100 / (publishedProblemsQuery.data?.data as []).length)}
              latest={formatThaiDate(group.lastProblemSolvedAt)}
            />
          ))
         }
      </div>
    </div>
  );
}

export default Leaderboard;
