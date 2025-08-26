import {  NavLink , useParams } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
export interface FormField<NameType extends string = string> {
  name: NameType;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export interface FormProps {
  title: string;
  paragraph: string;
  link: string;
  form: FormField[];
}
export default function Form({
  title,
  paragraph,
  form,
  link,
}: FormProps) {
  const { formType } = useParams();

  return (
    <div className="w-full">
      <div className="z-50 text-center text-[#4E2E56] space-y-2 2xl:mb-9 sm:mb-6 mb-5">
        <h2 className="font-medium xl:text-[50px] text-4xl">{title}</h2>
        <p className="font-normal leading-6.5 xl:text-[22px] text-lg">
          {paragraph}
        </p>
      </div>
      {formType == 'login' ? ( < Login form={form}/>) : (<SignUp form={form}/>)}

      <NavLink
        className="xl:text-2xl sm:text-base text-sm text-[#4E2E56] font-normal text-center"
        to={formType === "login" ? "/auth/signup" : "/auth/login"}
      >
        <div dangerouslySetInnerHTML={{ __html: link as string }} />
      </NavLink>
    </div>
  );
}
