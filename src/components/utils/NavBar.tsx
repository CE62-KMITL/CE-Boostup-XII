function NavBar () {
    return (
        <div className="bg-Primary04 w-full h-[60px] px-[79px] py-[10px]
        flex justify-center items-center fixed top-0 left-0">
            <div className="w-full h-full relative">
                <div className="w-[160px] h-full flex items-center absolute left-0">
                    <div className="absolute left-0">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYZNrSIj5yMGJbBNG7WaU1R4CviC8hSbU9Q&s" 
                        className="w-[40px] h-[40px] rounded-full" alt="" />
                    </div>
                    <div className="absolute right-0">
                        <p className="text-Gray01">CE Boostup XII</p>
                    </div>
                </div>
                <div  className="h-full flex justify-end items-center absolute right-0">
                    <div>
                        <a className="text-Accent font-[700] mr-[20px]" 
                        href=""
                        >Home</a>
                    </div>
                    <div>
                        <a className="text-Gray01 mx-[20px]" 
                        href=""
                        >Archive</a>
                    </div>
                    <div>
                        <a className="text-Gray01 mx-[20px]" 
                        href=""
                        >Learn</a>
                    </div>
                    <div>
                        <a className="text-Gray01 mx-[20px]" 
                        href=""
                        >Leaderboard</a>
                    </div>
                    <div>
                        <a className="text-Gray01 mx-[20px]" 
                        href=""
                        >Compiler</a>
                    </div>
                    <div>
                        <a className="text-Gray01 ml-[20px]" 
                        href=""
                        >Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar