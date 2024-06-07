import OptionHeader from "./OptionHeader";
import Account from "./AccountTable";
import Topics from "./Topics";

function Leaderboard() {
  const accs = [
    {
      number: 1,
      name: "ธรรมธิกร จันโอชา 1",
      group: "ABC",
      scores: 1,
      pass: 5,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 2,
      name: "ธรรมธิกร จันโอชา 2",
      group: "ABC",
      scores: 3,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 3,
      name: "ธรรมธิกร จันโอชา 3",
      group: "AB",
      scores: 5,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 4,
      name: "ธรรมธิกร จันโอชา 4",
      group: "ABC",
      scores: 2,
      pass: 8,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 5,
      name: "ธรรมธิกร จันโอชา 5",
      group: "ABC",
      scores: 4,
      pass: 2,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 6,
      name: "ธรรมธิกร จันโอชา 6",
      group: "AC",
      scores: 3,
      pass: 6,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 7,
      name: "ธรรมธิกร จันโอชา 7",
      group: "ABC",
      scores: 1,
      pass: 4,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 8,
      name: "ธรรมธิกร จันโอชา 8",
      group: "BC",
      scores: 5,
      pass: 9,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 9,
      name: "ธรรมธิกร จันโอชา 9",
      group: "ABC",
      scores: 2,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 10,
      name: "ธรรมธิกร จันโอชา 10",
      group: "ABC0",
      scores: 4,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 11,
      name: "ธรรมธิกร จันโอชา 11",
      group: "AC1",
      scores: 3,
      pass: 5,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 12,
      name: "ธรรมธิกร จันโอชา 12",
      group: "ABC2",
      scores: 1,
      pass: 2,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 13,
      name: "ธรรมธิกร จันโอชา 13",
      group: "AC3",
      scores: 2,
      pass: 6,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 14,
      name: "ธรรมธิกร จันโอชา 14",
      group: "AB4",
      scores: 4,
      pass: 4,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 15,
      name: "ธรรมธิกร จันโอชา 15",
      group: "AB5",
      scores: 3,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 16,
      name: "ธรรมธิกร จันโอชา 16",
      group: "AC6",
      scores: 1,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
  ];
  return (
    <div className="flex w-full flex-col pb-10">
      <OptionHeader />
      <div className="p-4 pt-8 rounded-b-lg rounded-r-lg bg-stone01 w-full h-full overflow-none">
        <Topics />

        {accs.map((acc) => (
          <Account
            key={acc.number}
            number={acc.number}
            name={acc.name}
            group={acc.group}
            score={acc.scores}
            pass={acc.pass}
            latest={acc.latest}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
