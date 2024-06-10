import { useState } from "react";
import { ProblemTagModelResponse } from "../../types/response.type";
import Button from "../utils/Button";

type CategoryProps = {
    tag: ProblemTagModelResponse;
    onClick: (value: string) => void;
}

function Category({ tag, onClick }: CategoryProps) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <Button type="button" text={tag.name} className={`h-8 rounded-[20px] py-1 px-7 mr-[10px] mb-[10px] ${active ? "bg-accent text-white" : "text-black bg-white border-[1px] border-stone07"}`} ClickFunc={() => {setActive((prev) => !prev); onClick(tag.id)}} />
    );
}

export default Category;