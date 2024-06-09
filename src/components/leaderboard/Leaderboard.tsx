import OptionHeader from "./OptionHeader";
import AccountTable from "./AccountTable";
import TeamAccountTable from "./TeamAccountTable";
import TeamTopics from "./TeamTopics";
import Topics from "./Topics";

function Leaderboard() {
  const accs = [
    {
      number: 1,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 1",
      group: "ABC",
      scores: 1,
      pass: 5,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 2,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 2",
      group: "ABC",
      scores: 3,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 3,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 3",
      group: "AB",
      scores: 5,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 4,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 4",
      group: "ABC",
      scores: 2,
      pass: 8,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 5,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 5",
      group: "ABC",
      scores: 4,
      pass: 2,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 6,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 6",
      group: "AC",
      scores: 3,
      pass: 6,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 7,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 7",
      group: "ABC",
      scores: 1,
      pass: 4,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 8,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 8",
      group: "BC",
      scores: 5,
      pass: 9,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 9,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 9",
      group: "ABC",
      scores: 2,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 10,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 10",
      group: "ABC0",
      scores: 4,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 11,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 11",
      group: "AC1",
      scores: 3,
      pass: 5,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 12,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 12",
      group: "ABC2",
      scores: 1,
      pass: 2,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 13,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 13",
      group: "AC3",
      scores: 2,
      pass: 6,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 14,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 14",
      group: "AB4",
      scores: 4,
      pass: 4,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 15,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 15",
      group: "AB5",
      scores: 3,
      pass: 3,
      latest: "26 เม.ย | 13.30.39",
    },
    {
      number: 16,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      name: "ธรรมธิกร จันโอชา 16",
      group: "AC6",
      scores: 1,
      pass: 7,
      latest: "26 เม.ย | 13.30.39",
    },
  ];

  const team_accs = [
    {
      number: 1,
      img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
      group: "ABC",
      scores: 1,
      submit: 50,
      latest: "26 เม.ย | 13.30.39",
    },
    
    {
        number: 2,
        img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
        group: "ABC",
        scores: 1,
        submit: 51,
        latest: "26 เม.ย | 13.30.39",
      },
    
      {
        number: 3,
        img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
        group: "ABC",
        scores: 1,
        submit: 45,
        latest: "26 เม.ย | 13.30.39",
      },
    
      {
        number: 4,
        img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
        group: "ABC",
        scores: 1,
        submit: 75,
        latest: "26 เม.ย | 13.30.39",
      },
    
      {
        number: 5,
        img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
        group: "ABC",
        scores: 1,
        submit: 95,
        latest: "26 เม.ย | 13.30.39",
      },
           
      {
        number: 6,
        img: "https://cdn.discordapp.com/attachments/1071673535476543559/1249266124126945311/IMG_9857.PNG?ex=6666ad3e&is=66655bbe&hm=b85e80c7f158fd0a34e183e305f8ea6f02756321b507281af463e9adf31a0c0c&",
        group: "ABC",
        scores: 11,
        submit: 5,
        latest: "26 เม.ย | 13.30.39",
      },
            
  ];
  return (
    <div className="flex w-full flex-col pb-10">
      <OptionHeader />
      <div className="p-4 pt-8 rounded-b-lg rounded-r-lg bg-stone01 w-full h-full overflow-none">
        
        <Topics />
        {/* <TeamTopics/> */}


        {accs.map((acc) => (
          <AccountTable
            key={acc.number}
            number={acc.number}
            img={acc.img}
            name={acc.name}
            group={acc.group}
            score={acc.scores}
            pass={acc.pass}
            latest={acc.latest}
          />
          ))
        }
         {/* {team_accs.map((acc) => (
          <TeamAccountTable
            key={acc.number}
            number={acc.number}
            img={acc.img}
            group={acc.group}
            score={acc.scores}
            submit={acc.submit}
            latest={acc.latest}
          />
          ))
        } */}
      </div>
    </div>
  );
}

export default Leaderboard;
