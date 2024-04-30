function NavBar() {
    return (
        <div className="flex justify-center items-center fixed top-0 z-20 w-full h-[6%] min-h-[50px] max-h-[60px] bg-primary04"> 
            <div className="flex place-content-between 
            w-[90%] min-w-[1320px] max-w-[1640px]
            h-[60%] min-h-[40px] max-h-[50px] border-none border-slate-50">
                <div className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYZNrSIj5yMGJbBNG7WaU1R4CviC8hSbU9Q&s" 
                    className=" h-full rounded-full" alt="" />
                    <h2 className="text-stone01 text-[16px] mx-[0.5rem] ">CE Boostup XII</h2>
                </div>
                <div className="flex items-center">
                    <a className="text-accent font-[700] mr-[1.6rem]" href="">Home</a>
                    <a className="text-stone01 mx-[1.6rem]" href="">Archive</a>
                    <a className="text-stone01 mx-[1.6rem]" href="">Learn</a>
                    <a className="text-stone01 mx-[1.6rem]" href="">Leaderboard</a>
                    <a className="text-stone01 mx-[1.6rem]" href="">Compiler</a>
                    <a className="text-stone01 ml-[1.6rem]" href="">Profile</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar