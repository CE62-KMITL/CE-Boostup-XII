import Background from "../components/utils/Background";
import OfficeHeader from "../components/backoffice/OfficeHeader";
import OfficeContent from "../components/backoffice/OfficeContent";
import LoadingPage from "./LoadingPage";
import { useProblems } from "../hooks/problems.hook";
import { useAttachment } from "../hooks/attachment.hook";

function BackOfficePage() {
  const { createProblemMutation } = useProblems();
  const { createAttachmentMutation } = useAttachment();

  if (createProblemMutation.isLoading || createAttachmentMutation.isLoading)
    return <LoadingPage />;

  return (
    <>
      <Background />
      <OfficeHeader/>
      <OfficeContent createProblemMutation={createProblemMutation} createAttachmentMutation={createAttachmentMutation} />
    </>
  );
}

export default BackOfficePage;
