import PicIcon from "../../assets/PicIcon.svg";
import { useUser } from "../../hooks/user.hook";
import { useNavigate } from "react-router-dom";

export default function ProfilePicture() {
    const { updateUserMutation, user } = useUser();
    const navigate = useNavigate();

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            const file = e.target.files?.[0];
            if (file) {
                const data = new FileReader();
                data.addEventListener("load", async () => {
                    await updateUserMutation.mutateAsync({ avatar: data.result as string });
                    navigate(0);
                });
                data.readAsDataURL(file);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to upload image");
        }
    }

    return (
        <div className="relative w-[200px] h-[200px]">
            <img className="absolute w-[200px] h-[200px] rounded-full object-cover object-center" src={`http://localhost:3000/users/${user?.id}/avatar`} alt="ProfilePicture" />
            <div className="absolute overflow-hidden bg-accent02 w-[40px] h-[40px] rounded-full top-[150px] left-[150px]">
                <input type="file" onChange={handleUpload} accept="image/png, image/jpeg" className="absolute left-0 opacity-0 z-20 w-full" />
                <img src={PicIcon} width="30px" height="30px" className="" />
            </div>
        </div>
    );
}