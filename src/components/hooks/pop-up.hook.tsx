import { create } from 'zustand';
import { ReactElement } from 'react';
import PopUp from '../solve/PopUp/PopUp';

interface PopUpStore {
    popUp: number | null;
    content: string;
    setPopUp: (value: number | null) => void;
    setContent: (value: string) => void;
    popUpComponents: (content: string) => ReactElement[];
}

export const usePopUp = create<PopUpStore>((set) => ({
    popUp: null,
    content: "",
    setPopUp: (value: number | null) => set({ popUp: value }),
    popUpComponents: (content: string) => [
        <PopUp key="0" title="ตัวอย่าง" content="ตัวอย่างข้างต้น เป็นเพียงแค่ Test Case ส่วนหนึ่งเท่านั้น อาจจะมี Hidden Test Case ซ่อนอยู่" />,
        <PopUp key="1" title="ยินดีด้วย" content="คุณได้ทำการส่งคำตอบเรียบร้อยแล้ว" />,
        <PopUp key="2" title="คำใบ้" content={content} />,
        <PopUp key="3" title="ลองใหม่อีกครั้ง" content={content} isCode={true} />,
    ],
    setContent: (value: string) => set({ content: value }),
}));