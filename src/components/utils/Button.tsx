type ButtonProps = {
    text: string;
    img?: string;
    ClickFunc?: () => void;
    className: string;
    imgClassName?: string;
    imgPosition?: "left" | "right";
    type?: "button" | "submit" | "reset";
};

export default function Button({ text, img, ClickFunc, className, imgClassName, imgPosition="left", type }: ButtonProps) {
    return (
        <>
            <button className={className} onClick={ClickFunc} type={type}>
                {img && imgPosition === "left" ? <img src={img} className={imgClassName} alt="" /> : null}
                {text}
                {img && imgPosition === "right" ? <img src={img} className={imgClassName} alt="" /> : null}
            </button>
        </>
    );
}