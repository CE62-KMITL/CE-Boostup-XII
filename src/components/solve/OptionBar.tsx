import Button from "../utils/Button";

function OptionBar() {
    return (
        <div className="flex row justify-between w-[52vw]">
            <Button mode={1} text="1" />
            <div className="row flex">
                <Button mode={1} text="2" />
                <Button mode={1} text="3" />
                <Button mode={2} text="4" />
            </div>
        </div>
    );
}

export default OptionBar;