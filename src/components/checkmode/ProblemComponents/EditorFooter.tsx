import Button from "../../utils/Button"
import { useUser } from "../../../hooks/user.hook";
import { useProblem } from "../../../hooks/problem.hook";
import { useProblemStore } from "../../../store/zustand/problem.zustand";
import { PublicationStatus } from "../../../enum/problem.enum";
import { useFormik } from "formik";
import { requiredValidator } from "../../../utils/validator.util";
import * as yup from "yup";
import { useState } from "react";
import { getFieldProps } from "../../../utils/getFieldProps";
import PopUp from "../PopUp/PopUp";
import SuccessCard from "../SuccessCard";

export default function EditorFooter() {
    const { isOwner } = useUser();
    const { problem: problemStore } = useProblemStore();
    const { updateProblemMutation } = useProblem();
    const [publicationStatus, setPublicationStatus] = useState<PublicationStatus>(problemStore?.publicationStatus as PublicationStatus);
    const [isPopUp, setPopUp] = useState<number | undefined>();
    const [show, setShow] = useState<boolean>(false);

    const formik = useFormik<{ reviewComment: string }>({
        initialValues: {
            reviewComment: "",
        },
        initialErrors: {
            reviewComment: "",
        },
        validateOnChange: true,
        enableReinitialize: true,
        validationSchema: yup.object({
            reviewComment: requiredValidator,
        }),
        onSubmit: handleUpdateProblem,
    });

    async function handleUpdateProblem() {
        try {
            await updateProblemMutation.mutateAsync({
                publicationStatus,
                reviewComment: formik.values.reviewComment === "" ? undefined : formik.values.reviewComment,
            });
            setShow(true);
        } catch (error) {
            console.error(error);
            alert("Failed to update problem: " + (error as Error).message);
        }
        setPopUp(undefined);
    }

    const components = [
        <PopUp title="“Archive” ใช่ไหม" handleSubmit={handleUpdateProblem} setPopup={setPopUp} description="หากกดยืนยันจะทำการ Archive และจะไม่สามารถกลับมาแก้ได้อีก" />,
        <PopUp handleSubmit={handleUpdateProblem} setPopup={setPopUp} title="“Publish” ใช่ไหม" description="หากกดยืนยันแล้วจะเปลี่ยนสถานะเป็น “Published” น้องจะสามารถทำโจทย์นี้ได้" />,
    ]

    if (isOwner) return (
        <>
            {show && <SuccessCard setShow={setShow} publicationStatus={publicationStatus} />}
            {isPopUp != undefined && components[isPopUp]}
            <div className="flex justify-end gap-[16px] w-full h-[42px] pr-3 absolute bottom-3 font-medium">
                <Button type="button" ClickFunc={() => { setPublicationStatus(PublicationStatus.Archived); setPopUp(0) }} text="Archive" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px]" />
                <Button type="button" ClickFunc={() => { setPublicationStatus(PublicationStatus.Published); setPopUp(1) }} text="Publish" className="w-[90px] h-full rounded-[8px] bg-accent text-stone01 text-[18px]" />
            </div>
        </>
    )

    const reviewCommentInputProps = getFieldProps(formik, "reviewComment");

    return (
        <>
            {show && <SuccessCard setShow={setShow} publicationStatus={publicationStatus} />}
            <form onSubmit={formik.handleSubmit} className="flex flex-col place-content-between absolute bottom-0 left-0
                    w-full h-[230px] rounded-[10px] p-[16px] bg-jenna opacity-100">
                <div className={`text-[16px] font-medium leading-[1.6rem] ${reviewCommentInputProps.error ? "text-red-600" : null}`}>ความคิดเห็น</div>
                <textarea
                    value={formik.values.reviewComment}
                    placeholder="เขียนความคิดเห็น..."
                    className="w-full h-[100px] rounded-[10px] p-[8px_12px] text-[16px] font-medium focus:outline-none"
                    style={{ resize: "none" }} onChange={(e) => formik.setFieldValue("reviewComment", e.target.value)} />
                <div className="flex justify-end gap-[16px] w-full h-[42px]">
                    <Button type="submit" ClickFunc={() => setPublicationStatus(PublicationStatus.Rejected)} text="Reject" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px] font-medium" />
                    <Button type="submit" ClickFunc={() => setPublicationStatus(PublicationStatus.Approved)} text="Approve" className="w-[120px] h-full rounded-[8px] bg-accent text-stone01 text-[18px] font-bold" />
                </div>
            </form>
        </>
    )
}