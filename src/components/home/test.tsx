const [level, setLevel] = useState(1);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < level; i++) {
            stars.push(
                <svg
                    key={i}
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 19 19"
                    fill="#E2AD39"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z"
                        stroke="#E2AD39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="flex gap-4 w-full h-[45px] mb-[1rem]">
            {/* ...existing code... */}
            <div className="flex items-center gap-1">
                <p className="pt-[0.2rem]">ความยาก</p>
                <div className="flex items-center gap-1">
                    {renderStars()}
                </div>
            </div>
            {/* ...existing code... */}
        </div>
    );