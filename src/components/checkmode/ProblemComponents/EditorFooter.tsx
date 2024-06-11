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

export default function EditorFooter() {
    const { isOwner } = useUser();
    const { problem: problemStore } = useProblemStore();
    const { updateProblemMutation } = useProblem(problemStore?.id as string);
    const [publicationStatus, setPublicationStatus] = useState<PublicationStatus>(problemStore?.publicationStatus as PublicationStatus);
    
    const formik = useFormik<{reviewComment: string}>({
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
                reviewComment: formik.values.reviewComment,
            });
        } catch (error) {
            console.error(error);
        }
    }

    if (isOwner) return (
        <div className="flex justify-end gap-[16px] w-full h-[42px] pr-3 absolute bottom-3 font-medium">
            <Button text="Archive" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px]" />
            <Button text="Publish" className="w-[90px] h-full rounded-[8px] bg-accent text-stone01 text-[18px]" />
        </div>
    )

    const reviewCommentInputProps = getFieldProps(formik, "reviewComment");

    return (
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
    )
}