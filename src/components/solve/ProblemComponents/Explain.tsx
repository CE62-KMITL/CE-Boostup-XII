import DetailCard from "./DetailCard";
import ExampleCard from "./ExampleCard";
import TitleCard from "./TitleCard";

export default function Explain() {
    return (
        <>
            <TitleCard />
            <div className="bg-jenna w-full flex flex-col items-center rounded-xl p-3">
                <h3 className="text-lg font-bold">คำอธิบายโจทย์</h3>
                <p className="underline font-semibold">เรื่องเล่าจากโจทย์</p>
                <p className="font-medium">
                    หลังจากรู้ได้ว่าเราสามารถทำโปรแกรมได้ เด็กชายวราโชติ ดีใจสุด ๆ พร้อมทั้งอยากให้เราทำอีกรูปหนึ่งซึ่งเด็กน้อยคนนี้สนใจ
                    ไม่แพ้กันนั่นก็คือ "พีระมิด" เนื่องจากลุงเตชินท์ชอบเปิดวิดีโอสารคดี ให้ดูบ่อย ๆ สายตาของเด็กน้อยที่จ้องมาที่เราก็จะต้องทำให้เรายอมสร้าง โปรแกรมขึ้นมาอีกตัวหนึ่งเพื่อให้เด็กชายคนนี้นั่นเอง
                </p>
                <p className="self-end font-light text-[14px]">โดย พี่อิ๊น</p>
            </div>
            <div className="divide-y-2 px-3">
                <DetailCard title="รูปแบบ input" content={<p>บรรทัดแรก m เป็นจำนวนหลัก<br />บรรทัดสอง n เป็นจำนวนแถว</p>} />
                <DetailCard title="รูปแบบ output" content={<p>{"ค่า 0 < m,n < 100"}</p>} />
                <DetailCard title="ข้อจำกัด" content={<p>ห้ามใช้ for loop</p>} />
                <ExampleCard title="ตัวอย่างที่ 1" input="1" output="20" />
            </div>
        </>
    );
}