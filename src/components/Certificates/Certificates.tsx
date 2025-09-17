import { contactData } from "../../Data/contact";
import { CertificatesData } from "../../Data/CertificatesData";
import ContactLine from "../ContactLine/ContactLine";
import SmallTitle from "../SmallTitle/SmallTitle";
import Certi from "./../../assets/about/Certificates.png";

type ContactItem = {
  dir?: "ltr" | "rtl";
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
    <div className="padding-global bg-[#3B2241] flex justify-between py-[50px]  max-[1024px]:flex-col-reverse ">
      <div>
        <SmallTitle icon={Certi} title="الشهادات" />

        <ul className=" 2xl:text-[35px] xl:text-3xl  lg:text-xl 2xl:leading-15 text-white font-normal leading-[156%]  space-y-[13px] list-disc list-inside">
          {certs.map((item, index) => (
            <li key={index}>{item.certi}</li>
          ))}
        </ul>
      </div>

      <div className="border-r border-white pr-9 pl-[5.1543302367%] max-[1441px]:pl-[10.8130416%] max-[1024px]:pl-0 max-[1024px]:border-0 space-y-6 max-[1024px]:mb-[50px] max-[1024px]:pr-0">
        <h4 className="font-normal 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl leading-[156%] text-white ">
          تواصل
        </h4>

        {contacts.map((item, index) => (
          <ContactLine
            dir={item.dir}
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
