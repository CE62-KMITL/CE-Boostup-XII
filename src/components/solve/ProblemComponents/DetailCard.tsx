import { ReactNode } from "react";

type DetailCardProps = {
    title: string;
    content: ReactNode;
}

export default function DetailCard({ title, content }: DetailCardProps) {

    return (
        <div className="py-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="px-10">{content}</p>
        </div>
    )
}