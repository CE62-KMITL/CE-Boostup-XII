import Button from "../utils/Button";

type OptionHeaderProps = {
    setTopic: React.Dispatch<React.SetStateAction<"user" | "group">>;
    topic: "user" | "group";
};

function OptionHeader({ setTopic, topic }: OptionHeaderProps) {
    return (
        <div className="flex h-10 w-64">
            <Button className={`${topic === "user" ? "bg-stone01 text-stone05" : "text-stone06"} text-[16px]  flex-1 flex items-center justify-center rounded-t-lg`} text="รายบุคคล" ClickFunc={() => setTopic("user")} />
            <Button className={`${topic === "group" ? "bg-stone01 text-stone05" : "text-stone06"} text-[16px] flex-1 flex items-center justify-center rounded-t-lg`} text="บ้าน" ClickFunc={() => setTopic("group")} />
        </div>
    );
}
export default OptionHeader;