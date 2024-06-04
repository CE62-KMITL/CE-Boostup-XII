import { useEffect } from "react";
import Picture from "../../assets/Haerin.jpg";

type ProfilePictureProps = {
    profile_icon: string;
}

function ProfilePicture({profile_icon}: ProfilePictureProps) {
    useEffect(() => {
        const spaceDom = document.getElementById("profile-picture-space");
        if (spaceDom) {
            const heightOfSpace = spaceDom.offsetHeight;
            spaceDom.style.width = `${heightOfSpace}px`;
        }
    }, []);

    return (
        <div id="profile-picture-space" className="relative h-full">
            <img className="w-full h-full rounded-[50%] bg-center bg-no-repeat bg-cover" 
            src={profile_icon} alt="" />
            {/* <div className="w-full h-full rounded-[50%]"
            style={{ backgroundImage: `url(${profile_icon})`, 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
            </div> */}
            <button className="flex justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 top-[85%] left-[85%]
            w-[20%] h-[20%] bg-accent hover:bg-accent02 rounded-[50%]">
                <div className="flex justify-center items-center w-[66%] h-[66%]">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.19961 0C1.31561 0 0.599609 0.716 0.599609 1.6V14.4C0.599609 15.284 1.31561 16 2.19961 16H19.7996C20.6836 16 21.3996 15.284 21.3996 14.4V1.6C21.3996 0.716 20.6836 0 19.7996 0H2.19961ZM17.3996 2.4C18.2836 2.4 18.9996 3.116 18.9996 4C18.9996 4.884 18.2836 5.6 17.3996 5.6C16.5156 5.6 15.7996 4.884 15.7996 4C15.7996 3.116 16.5156 2.4 17.3996 2.4ZM6.19961 5.60156C6.69501 5.60156 7.19036 5.79075 7.56836 6.16875L10.1777 8.77812L10.9996 9.6L11.9246 10.525C12.2622 10.8626 12.8073 10.8595 13.1449 10.5219C13.4833 10.1843 13.4833 9.63528 13.1449 9.29688L12.223 8.37656L12.8309 7.76875C13.5869 7.01275 14.8124 7.01275 15.5684 7.76875L18.9996 11.2V13.6H2.99961V8L4.83086 6.16875C5.20886 5.79075 5.70421 5.60156 6.19961 5.60156Z" fill="white"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default ProfilePicture;
