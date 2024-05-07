import OptionButton from "./utils/OptionButton";

function OptionBar() {
    return (
        <div className="flex row justify-between w-[52vw]">
            <OptionButton mode={1} text="1" />
            <div className="row flex">
                <OptionButton mode={1} text="2" />
                <OptionButton mode={1} text="3" />
                <OptionButton mode={2} text="4" />
            </div>
        </div>
    );
}

export default OptionBar;