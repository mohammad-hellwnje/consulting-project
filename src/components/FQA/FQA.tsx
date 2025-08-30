import { items } from "../../Data/fqa";
import Accordion from "../Accordion/Accordion";
import SectionTitle from "../ui/Titles/SectionTitle";


export default function FQA() {
  return (
    <section className=" flex flex-col gap-18.5 py-12.5 padding-global">
        <SectionTitle className=" text-white" text="الأسئلة الشائعة"/>
        <Accordion items={items}/>
    </section>
  )
}
