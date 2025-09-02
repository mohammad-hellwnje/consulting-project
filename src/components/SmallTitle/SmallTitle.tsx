
type SmallTitleProps = {
  title: string;
  icon: string;
  addClass?: string;
};
export default function SmallTitle({ title, icon, addClass }: SmallTitleProps) {
  return (
    <div className={`flex items-center mb-[24px]  ${addClass}`}>
      <h4 className="font-normal 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl leading-[156%] text-white lg:ml-8 ml-4 pr-2.5">
        {title}
      </h4>
      <img src={icon} alt="education icon" className="lg:w-[66px] w-7.5 h-7.5 lg:h-[66px]" />
    </div>
  );
}
