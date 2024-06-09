type ButtonProps = {
    text: string;
    img?: string;
    class: string;
    ClickFunc?: () => void;
    validate?: boolean;
};

function Button({ type, mode, text, img,  ClickFunc, validate }: ButtonProps) {
    if (type == 1) {
        if (mode === 1) {
            return (
                <button onClick={ClickFunc} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={ClickFunc} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        }
        else if (mode == 4) {
            return (
                <button onClick={ClickFunc} className="absolute right-0 w-24 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }

        else {
            return (
                <button onClick={ClickFunc} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }
    }
    if (type == 2) {
        if (mode === 1) {
            return (
                <button onClick={ClickFunc} className="w-36 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent2 transition ease-in-out duration-200 shadow-md text-stone01">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={ClickFunc} className={`${validate ? "bg-" : "pointer-events-none bg-gray"} w-36 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent2 transition ease-in-out duration-200 shadow-md text-stone01`}>
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        } else {
            return (
                <button onClick={ClickFunc} className={`${validate ? 
                    'bg-accent text-stone01 hover:bg-accent02 transition ease-in-out duration-200 shadow-md cursor-pointer' :
                    'bg-[#D7C398]  pointer-events-none text-stone01 hover:cursor-default'} 
                    w-36 h-10 rounded-lg flex items-center justify-center`}>
                    {text}
                </button>
            );
        }
    }

    if (type == 3) {
        if (mode === 1) {
            return (
                <button onClick={ClickFunc} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={ClickFunc} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        } else {
            return (
                <button onClick={ClickFunc} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }
    }

    if (type == 4) {
        if (mode === 1) {
            return (
                <button onClick={ClickFunc} className="w-72 text-stone01 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent2 transition ease-in-out duration-200 shadow-md ">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={ClickFunc} className="w-72 text-stone01 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        } else {
            return (
                <button onClick={ClickFunc} className="w-72 text-stone01 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }
    }


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