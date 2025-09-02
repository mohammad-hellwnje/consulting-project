

type ContactLineProps = {
  addClass?: string;
  icon: string;
  link: string;
  label: string;
};
export default function ContactLine({
  addClass,
  icon,
  link,
  label,
}: ContactLineProps) {
  return (
    <div className={`flex lg:mb-auto mb-0 items-center  ${addClass}`}>
      <img src={icon} alt="icon" className="lg:w-[40px] w-5 h-5 lg:h-[40px] ml-4" />
      <a
        href={link}
        className="font-normal 2xl:text-5xl xl:text-4xl lg:text-3xl text-xl leading-[44px] tracking-wide
 text-white"
      >
        
        {label}
      </a>
    </div>
  );
}
