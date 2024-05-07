function Button({ type, mode, text, img}) {
    if (type == 1){
        if (mode === 1) {
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </div>
            );
        } else if (mode === 2) {
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </div>
            );
        }
        else{
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    {text}
                </div>
            );
        }
    }
    if (type == 2){
        if (mode === 1) {
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    <img src={img} alt="" />
                    <span className="w-2"></span>
                    {text}
                </div>
            );
        } else if (mode === 2) {
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    {text}
                    <span className="w-2"></span>
                    <img src={img} alt="" />
                </div>
            );
        }else if (mode === 3) {
            return (
                <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                    {text}
                </div>
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
