function NavBar() {
    return (
        <div className="flex justify-center items-center fixed top-0 w-full h-[8%] min-h-[60px] max-h-[90px] bg-primary04"> 
            <div className="flex place-content-between w-[90%] h-[60%] min-h-[40px] max-h-[60px]">
                <div className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYZNrSIj5yMGJbBNG7WaU1R4CviC8hSbU9Q&s" 
                    className=" h-full rounded-full" alt="" />
                    <h2 className="text-stone01 text-[16px] mx-[0.5rem] ">CE Boostup XII</h2>
                </div>
                <div className="flex items-center">
                    <a className="text-accent font-[700] mx-[1.5rem]" href="">Home</a>
                    <a className="text-stone01 mx-[1.5rem]" href="">Archive</a>
                    <a className="text-stone01 mx-[1.5rem]" href="">Learn</a>
                    <a className="text-stone01 mx-[1.2rem]" href="">Leaderboard</a>
                    <a className="text-stone01 mx-[1.2rem]" href="">Compiler</a>
                    <a className="text-stone01 mx-[1.2rem]" href="">Profile</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar