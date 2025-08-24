import { contactData } from "../../Data/contact";
import { CertificatesData } from "../../Data/CertificatesData";
import ContactLine from "../ContactLine/ContactLine";
import SmallTitle from "../SmallTitle/SmallTitle";
import Certi from "./../../assets/about/Certificates.png";

type ContactItem = {
  lable: string; 
  linky: string;
  iconSrc: string; 

};

type CertificateItem = {
  certi: string;
};

export default function Certificates() {
  const contacts = contactData as ContactItem[];
  const certs = CertificatesData as CertificateItem[];

  return (
    <div className="padding-global flex justify-between pt-[80px] pb-[80px] max-[1441px]:pb-[69px] max-[1024px]:flex-col-reverse max-[1024px]:pt-[60px]">
      <div>
        <SmallTitle icon={Certi} title="الشهادات" />

        <ul className="text-4xl text-white font-normal leading-[156%] pl-5 space-y-[13px] list-disc list-inside">
          {certs.map((item, index) => (
            <li key={index}>{item.certi}</li>
          ))}
        </ul>
      </div>

      <div className="border-r border-white pr-9 pl-[5.1543302367%] max-[1441px]:pl-[10.8130416%] max-[1024px]:pl-0 max-[1024px]:border-0 space-y-6 max-[1024px]:mb-[104px] max-[1024px]:pr-0">
        <h4 className="font-normal text-[48px] leading-[156%] text-white pb-[43px] max-[1024px]:pb-[35px]">
          تواصل
        </h4>

        {contacts.map((item, index) => (
          <ContactLine
            key={index}
            label={item.lable}
            link={item.linky}
            icon={item.iconSrc}
          />
        ))}
      </div>
    </div>
  );
}
