type ButtonProps = {
    text: string;
    img?: string;
    ClickFunc?: () => void;
    className: string;
    imgClassName?: string;
    imgPosition?: "left" | "right";
};

export default function Button({ text, img, ClickFunc, className, imgClassName, imgPosition="left" }: ButtonProps) {
    return (
        <>
            <button className={className} onClick={ClickFunc}>
                {img && imgPosition === "left" ? <img src={img} className={imgClassName} alt="" /> : null}
                {text}
                {img && imgPosition === "right" ? <img src={img} className={imgClassName} alt="" /> : null}
            </button>
        </>
    );
}