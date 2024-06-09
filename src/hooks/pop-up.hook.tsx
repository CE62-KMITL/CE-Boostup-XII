import { create } from 'zustand';
import PopUp from '../components/solve/PopUp/PopUp';

interface PopUpStore {
    popUp: number | null;
    content: string;
    setPopUp: (value?: number) => void;
    setContent: (value: string) => void;
    popUpComponents: (content?: string) => JSX.Element[];
}

export const usePopUp = create<PopUpStore>((set) => ({
    popUp: null,
    content: "",
    setPopUp: (value?: number) => set({ popUp: value }),
    popUpComponents: (content?: string) => [
        <PopUp title="ตัวอย่าง" content="ตัวอย่างข้างต้น เป็นเพียงแค่ Test Case ส่วนหนึ่งเท่านั้น อาจจะมี Hidden Test Case ซ่อนอยู่" />,
        <PopUp title="ยินดีด้วย" content="คุณได้ทำการส่งคำตอบเรียบร้อยแล้ว" />,
        <PopUp title="คำใบ้" content={content} />,
        <PopUp title="ลองใหม่อีกครั้ง" content={content} isCode={true} />,
        <PopUp title="วิธีการสร้าง Test Case" code={'บรรทัดที่ 1 คือ input ที่ 1\nบรรทัดที่ 2 คือ input ที่ 2\n...'} content={"1. พิมพ์ input ที่คุณต้องการลงในช่อง input\nตามจำนวน input ที่คุณต้องการกด\n2. RUN แล้วผลลัพธ์จะอยู่ในช่อง output"} isBoth={true} />,
    ],
    setContent: (value: string) => set({ content: value }),
}));