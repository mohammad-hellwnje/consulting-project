
export default function IconDev({icon} : {icon : string;}) {
  return (
    <div className=" 
    flex items-center justify-center
    mb-3
    laptop:w-[106px] w-[70px] h-[70px]  laptop:rounded-[30px] rounded-2xl bg-[#6D54717D] laptop:h-[106px] ">
      <img src={icon} alt='icon' className=" laptop:w-[57px] w-10 h-10 laptop:h-[52px] " />
    </div>
  )
}
              
