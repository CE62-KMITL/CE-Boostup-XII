import { Link } from "react-router-dom";
import { PublicationStatus } from "../../enum/problem.enum";

export default function ProblemsTable({title, lesson, level, status, id ,owner}: {
    title: string,
    lesson: { id: string, name: string }[],
    level: number,
    status: PublicationStatus,
    id: string
    owner: { id: string, displayName: string }
}) {
    return (
        <Link to={`/solve/${id}`} className="grid grid-cols-[repeat(16,minmax(0,1fr))] w-full h-[45px] rounded-md bg-stone01 
        cursor-pointer transition-all duration-300 ease-in-out hover:bg-cream">
            
            <div className="flex justify-start items-start col-span-5 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[18px] font-[700]">
                {title}
            </div>
            <div className="flex justify-start items-start col-span-4 p-[0.4rem_2rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar text-[18px] font-[700]">
                {owner.displayName}
            </div>
            <div className="flex justify-start items-start col-span-3 p-[0.4rem_0.6rem]
            leading-[2rem] overflow-y-scroll hide-scrollbar">
                {lesson.filter((tag) => tag.name !== 'All').map((tag) => tag.name).join(', ')}
            </div>
            <div className="flex justify-start items-center col-span-3 p-[0rem_0.6rem]">
                <div className="flex space-x-[2px] h-fit">
                    {Array.from({ length: level }, (_, index) => (
                        <svg key={index} className=" h-full min-h-[20px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ))}
                    {Array.from({ length: 5 - level }, (_, index) => (
                        <svg key={index} className="h-full min-h-[20px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78836 1.66675L12.2716 6.88341L17.8248 7.72508L13.8066 11.7834L14.7549 17.5167L9.78836 14.8084L4.82186 17.5167L5.77016 11.7834L1.75195 7.72508L7.30511 6.88341L9.78836 1.66675Z" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ))}
                </div>
            </div>
            
           
            <div className={`flex justify-end items-center col-span-1 p-[0rem_1rem]`}>
                {status === PublicationStatus.Approved ? 'Approved' : status === PublicationStatus.Archived ? 'Archived' : status === PublicationStatus.AwaitingApproval ? 'AwaitingApproval' :
                 status === PublicationStatus.Draft ? 'Draft':status === PublicationStatus.Published ? 'Published':'Rejected'}
            </div>
        </Link>
    );
}