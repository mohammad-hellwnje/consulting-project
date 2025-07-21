export interface inputForm
{
    type: string;
    placeholder: string;
    required: boolean;
    onClick?: () => void;
}
export default function InputForm({placeholder , required, onClick , type} : inputForm) {
  return (
    <input type={type} required={required} onClick={onClick} placeholder={placeholder} className="w-full mb-[15px] min-h-12.5 border border-white py-[15px] px-5 placeholder:text-white placeholder:text-sm " />)
}
