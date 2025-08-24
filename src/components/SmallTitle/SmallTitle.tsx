
type SmallTitleProps = {
  title: string;
  icon: string;
  addClass?: string;
};
export default function SmallTitle({ title, icon, addClass }: SmallTitleProps) {
  return (
    <div className={`flex mb-[43px] max-[1024px]:mb-[59px] ${addClass}`}>
      <h4 className="font-normal text-[48px] leading-[156%] text-white ml-8 pr-2.5">
        {title}
      </h4>
      <img src={icon} alt="education icon" className="w-[66px] h-[66px]" />
    </div>
  );
}
