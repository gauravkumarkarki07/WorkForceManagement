import { MdBlock } from "react-icons/md";
export default function Unauthorized() {
  return (
    <div className="flex justify-center items-center py-20">
        <span className="flex">
            <MdBlock className="text-4xl"/>
            <span className="text-3xl font-semibold text-black">
                Please contact admin for approval
            </span>
        </span>
    </div>
  )
}
