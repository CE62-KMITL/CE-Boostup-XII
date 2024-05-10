function NavBar() {
    return (
        <div className="flex justify-center items-center fixed top-0 right-0 z-30
        w-full xl:h-[50px] 2xl:h-[60px] bg-primary04"> 
            <div className="flex place-content-between
            xl:w-[1240px] 2xl:w-[1360px] h-auto">
                <div className="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/c3d8/2dc2/980a2683997252f7ab6fc0e497651cfc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mCrYFI-dkCrwWp1hP25-EIZ9l8XVzmwyii~9zAxuwJw-OOLjK~39~2Uur3KxVNRrTWJokzDk1eQm0rkEvXHiO~eBh4uuzOfadbO3~LwDoHlireqV~hvKkqTp-1R0kzgAJi2wY-zpGU-lxxnsnB4pscK-5O4ar7e9dGbDvJBiXuirBBRuO1K7hgOy0ObZJ7Iif44Tt8ZpVnSkrlRlmxATpKVkl~493O2gwfzj~VUNElhyJ3RgWniNMeVqW2YS8PyX0YbWjSoT0GUG8BmflmlNPA14YLBHAvAhylV6s1J0vf-XoprxwsjZUefgt4mPk7W9cgWFnbhkaGjlxV4QJs5IOg__"
                    className="xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]" alt="" />
                    <h2 className="text-stone01 text-[16px] m-[12px] ">
                        CE Boostup XII
                    </h2>
                </div>
                <div className="flex items-center place-content-between xl:w-[600px] 2xl:w-[660px]">
                    <a className="navbar-button text-stone01" href="">Home</a>
                    <a className="navbar-button text-stone01" href="">Archive</a>
                    <a className="navbar-button text-stone01" href="">Learn</a>
                    <a className="navbar-button text-stone01" href="">Leaderboard</a>
                    <a className="navbar-button text-stone01" href="">Compiler</a>
                    <a className="navbar-button text-stone01" href="">Profile</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;