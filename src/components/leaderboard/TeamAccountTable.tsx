import ProgressBar from "./ProgressBar";
import CrownIcon from "../../assets/CrownIcon.svg";
import { useAppSelector } from "../../store/hook";

function TeamAccountTable({
  number,
  img,
  group,
  score,
  submit,
  latest,
  id,
}: {
  number: number;
  img: string;
  group: string;
  score: number;
  submit: number;
  latest: string;
  id: string;
}) {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      {number === 1 ? (
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[84px] my-2 rounded-md bg-[#EBD7A3] ">
          <div className="flex justify-start items-center col-span-1 p-[0rem_1rem]">
            {number}
          </div>
          <div
            className="flex justify-start items-center col-span-5 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[16px] relative"
          >
            <img
              src={CrownIcon}
              alt="รูป"
              className="absolute top-1 left-0"
            />
            <img
              src={img}
              alt="รูป"
              className="bg-white rounded-[100%] w-9 h-9 mr-6"
            />
            {group}
          </div>
          <div className="flex justify-start items-center col-span-3 p-[0rem_0.6rem]">
            {score}
          </div>
          <div className="flex justify-start items-center col-span-5 p-[0rem_0.6rem]">
            <ProgressBar progress={submit} />
          </div>
          <div className="flex justify-start items-center col-span-2  pr-[1rem] ">
            {latest}
          </div>
        </div>
      ) : (
        <>
        <div className={`grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[72px] rounded-md ${user?.group?.id === id ? "bg-jenna" : "bg-stone01"}`}>
          <div className="flex justify-start items-center col-span-1 p-[0rem_1rem]">
            {number}
          </div>
          <div
            className="flex justify-start items-center col-span-5 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[16px]"
          >
            <img
              src={img}
              alt="รูป"
              className="bg-white rounded-[100%] w-9 h-9 mr-6"
            />
            {group}
          </div>
          <div className="flex justify-start items-center col-span-4  p-[0rem_0.6rem]">
            {score}
          </div>
          <div className="flex justify-start items-center col-span-4 p-[0rem_0.6rem]">
            <ProgressBar progress={submit} />
          </div>
          <div className="flex justify-start items-center col-span-2  pr-[1rem] ">
            {latest}
          </div>
        </div>
        <hr />
        </>
      )}
    </>
  );
}

export default TeamAccountTable;
