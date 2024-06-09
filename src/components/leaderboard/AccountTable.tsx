function AccountTable({
  number,
  img,
  name,
  group,
  score,
  pass,
  latest,
}: {
  number: number;
  img: string;
  name: string;
  group: string;
  score: number;
  pass: number;
  latest: string;
}) {
  return (
    <>
      {number === 1 ? (
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[84px] my-2 rounded-md bg-[#EBD7A3] ">
          <div className="flex justify-start items-center col-span-1 p-[0rem_1rem]">
            {number}
          </div>
          <div
            className="flex justify-start items-center col-span-4 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[16px]"
          >
            <img
              src={img}
              alt="รูป"
              className="bg-red-500 rounded-[100%] w-9 h-9 mr-6"
            />
            {name}
          </div>
          <div
            className="flex justify-start items-center col-span-3 p-[0.4rem_0.6rem]
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
      ) : (
        <>
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[56px] my-2 rounded-md bg-stone01 ">
          <div className="flex justify-start items-center col-span-1 p-[0rem_1rem]">
            {number}
          </div>
          <div
            className="flex justify-start items-center col-span-4 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[16px]"
          >
            <img
              src={img}
              alt="รูป"
              className="bg-red-500 rounded-[100%] w-9 h-9 mr-6"
            />
            {name}
          </div>
          <div
            className="flex justify-start items-center col-span-3 p-[0.4rem_0.6rem]
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
        <hr />
        </>
      )}
    </>
  );
}

export default AccountTable;
