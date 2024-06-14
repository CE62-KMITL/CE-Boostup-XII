import { ReactNode } from "react";

type DetailCardProps = {
    title: string;
    content: ReactNode | string;
}

export default function DetailCard({ title, content }: DetailCardProps) {

    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} className="text-[18px] font-bold" />
            {
                typeof content === 'string' ?
                    <textarea className="py-2 ml-10 text-[16px] font-medium bg-transparent" disabled>{content}</textarea>
                    :
                    <p className="ml-10 py-2 text-[16px] font-medium">{content}</p>
            }
            <div className="w-full h-[2px] bg-stone02"></div>
        </div>
    )
};