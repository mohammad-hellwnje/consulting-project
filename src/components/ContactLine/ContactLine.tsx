

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
    <div className={`flex   ${addClass}`}>
      <img src={icon} alt="icon" className="w-[40px] h-[40px] ml-4" />
      <a
        href={link}
        className="font-normal text-[24px] leading-[44px] tracking-wide
 text-white"
      >
        
        {label}
      </a>
    </div>
  );
}
