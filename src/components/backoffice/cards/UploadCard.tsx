import UploadIcon from '../../../assets/feather_upload-cloud.svg'
import Button from '../../utils/Button'
import { useCreateProblemStore } from '../../../store/zustand/create-problem.zustand'

export default function UploadCard() {
    const { file, setFile } = useCreateProblemStore()

    function handleFileChange(e: any) {
        setFile(e.target.files[0])
    }

    return (
        <label htmlFor="dropzone-file" className="flex justify-between items-center px-[24px] w-[500px] h-[80px] border-[2px] border-stone03 border-dashed rounded-lg cursor-pointer">
            <div className="flex items-center justify-center space-x-[24px]">
                <img src={UploadIcon} />
                <div>
                    <p className="mb-2 text-sm text-black">เลือกหรือลากไฟล์เพื่ออัพโหลด</p>
                    <p className="text-xs text-gray-500">{file ? file.name : `JPG, PNG หรือ PDF, ขนาดไม่เกิน10MB`}</p>
                </div>
            </div>
            <Button text="เลือกไฟล์" className="border-gray-500 pointer-events-none border w-[68px] h-[38px] rounded-[5px] text-[10px] text-gray-500" />
            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileChange(e)} />
        </label>
    )
}