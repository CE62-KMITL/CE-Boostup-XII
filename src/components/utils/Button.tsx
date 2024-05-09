function Button({ type, mode, text, img, link, validate}) {
    const navigateLink = () => {
        window.location.href = link;
    };

    if (type == 1){
        if (mode === 1) {
            return (
                <button onClick={navigateLink} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={navigateLink} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        }
        else{
            return (
                <button onClick={navigateLink} className="w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }
    }
    if (type == 2){
        if (mode === 1) {
            return (
                <button onClick={navigateLink} className="w-36 h-10 bg-accent rounded-lg flex items-center justify-center mr-4 hover:bg-accent2 transition ease-in-out duration-200 shadow-md text-stone01">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={navigateLink} className="w-36 h-10 bg-accent rounded-lg flex items-center justify-center mr-4 hover:bg-accent2 transition ease-in-out duration-200 shadow-md text-stone01">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        }else{
            return (
                <button onClick={navigateLink} className={`${validate ? 'bg-accent text-stone01 hover:bg-accent2 transition ease-in-out duration-200 shadow-md cursor-pointer' : 'bg-stone03  pointer-events-none text-stone01 hover:cursor-default'} w-36 h-10 rounded-lg flex items-center justify-center mr-4`}>
                    {text}
                </button>
            );
        }
    }

    if (type == 3){
        if (mode === 1) {
            return (
                <button onClick={navigateLink} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </button>
            );
        } else if (mode === 2) {
            return (
                <button onClick={navigateLink} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </button>
            );
        }else{
            return (
                <button onClick={navigateLink} className="w-72 h-10 bg-cream rounded-lg flex items-center justify-center mr-4 hover:bg-cream2 transition ease-in-out duration-200 shadow-md ">
                    {text}
                </button>
            );
        }
    }




    return (
        <div className="c w-24 h-10 bg-cream rounded-lg">
            {text}
        </div>
    );
}

export default Button;
