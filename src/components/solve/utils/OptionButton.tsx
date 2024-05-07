function OptionButton({ mode, text }) {
    if (mode === 1) {
        return (
            <div className="a w-24 h-10 bg-cream rounded-lg flex items-center justify-center mr-4">
                {text}
            </div>
        );
    } else if (mode === 2) {
        return (
            <div className="b w-24 h-10 bg-cream rounded-lg flex items-center justify-center">
                {text}
            </div>
        );
    }
    return (
        <div className="c w-24 h-10 bg-cream rounded-lg">
            {text}
        </div>
    );
}

export default OptionButton;
