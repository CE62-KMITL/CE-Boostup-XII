type DetailCardProps = {
    title: string;
    content?: string;
}

export default function DetailCard({ title, content }: DetailCardProps) {

    return (
        <div className="py-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <textarea className="px-10 bg-transparent" disabled>{content?.toString()}</textarea>
            {/* <p className="px-10">{content}</p> */}
        </div>
    )
}