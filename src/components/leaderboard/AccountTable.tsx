function AccountTable({
  number,
  name,
  group,
  score,
  pass,
  latest,
}: {
  number: number;
  name: string;
  group: string;
  score: number;
  pass: number;
  latest: string;
}) {
  return (
    <div
      className="grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[45px] rounded-md bg-stone01 
        cursor-pointer transition-all duration-300 ease-in-out hover:bg-cream"
    >
      <div className="flex justify-start items-center col-span-1 p-[0rem_1rem]">
        {number}
      </div>
      <div
        className="flex justify-start items-start col-span-4 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[18px] font-[700]"
      >
        {name}
      </div>
      <div
        className="flex justify-start items-start col-span-3 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar"
      >
        {group}
      </div>
      <div className="flex justify-start items-center col-span-3 p-[0rem_0.6rem]">
        {score}
      </div>
      <div className="flex justify-start items-center col-span-3 p-[0rem_0.6rem]">
        {pass}
      </div>

      <div className="flex justify-start items-center col-span-2  pr-[1rem] ">
        {latest}
      </div>
    </div>
  );
}

export default AccountTable;
