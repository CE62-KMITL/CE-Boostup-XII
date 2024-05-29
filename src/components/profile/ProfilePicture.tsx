function ProfilePicture({ profile_picture }: {
    profile_picture: string,
}) {
    return (
        <div className="relative w-[200px] h-[200px]">
            <img className="absolute w-[200px] h-[200px] rounded-full object-cover object-center" src={profile_picture} alt="ProfilePicture" />
            <button className="absolute top-[150px] left-[150px] rounded-full">
                <svg className="w-[40px] h-[40px] bg-accent hover:bg-accent2 rounded-full " fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" /><path d="M11.2 12a1.6 1.6 0 0 0-1.6 1.6v12.8a1.6 1.6 0 0 0 1.6 1.6h17.6a1.6 1.6 0 0 0 1.6-1.6V13.6a1.6 1.6 0 0 0-1.6-1.6H11.2Zm15.2 2.4a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm-11.2 3.202c.495 0 .99.189 1.368.567l2.61 2.61.822.821.925.925a.866.866 0 0 0 1.22-1.228l-.922-.92.608-.608a1.936 1.936 0 0 1 2.737 0L28 23.2v2.4H12V20l1.83-1.831a1.93 1.93 0 0 1 1.37-.567Z" fill="#fff"/></svg>
            </button>
        </div>
    );
}

export default ProfilePicture;
