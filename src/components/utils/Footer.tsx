function Footer() {
    return (
        <div className="flex justify-center items-center fixed bottom-0 z-10 
        w-full xl:h-[50px] 2xl:h-[60px] bg-stone04"> 
            <div className="flex place-content-between
            xl:w-[1240px] 2xl:w-[1360px] h-auto">
                <div className="flex items-center">
                    <h2 className="text-stone01 text-[16px]">CE Boostup XII</h2>
                </div>
                <div className="flex items-center">
                    <h2 className="text-stone01 text-[16px]">By Web-Dev Team</h2>
                </div>
            </div>
        </div>
    );
}

export default Footer