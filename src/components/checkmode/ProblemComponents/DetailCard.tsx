import { ReactNode } from "react";

type DetailCardProps = {
    title: string;
    content: ReactNode;
}

export default function DetailCard({ title, content }: DetailCardProps) {

    return (
        <div>
            <h2 className="text-[18px] font-bold">{title}</h2>
            <p className="ml-10 py-2 text-[16px] font-medium">{content}</p>
            <div className="w-full h-[2px] bg-stone02"></div>
        </div>
    )
};