import Accordion from "../Accordion/Accordion";
import SectionTitle from "../ui/Titles/SectionTitle";
const items = [
  {
    id: 1,
    title: 'ما هو React؟',
    content: 'React هي مكتبة جافاسكريبت لبناء واجهات المستخدم.',
  },
  {
    id: 2,
    title: 'شو الفرق بين الورشات والكورسات؟',
    content: 'الورشات تفاعلية وغالبًا بتكون مباشرة، الكورسات مسجّلة وبتقدري تتابعيها بأي وقت.',
  },
  {
    id: 3,
    title: 'ما هي Props؟',
    content: 'هي الخصائص التي يتم تمريرها للكومبوننت من المكون الأب.',
  },
  {
    id: 4,
    title: 'ما هي Props؟',
    content: 'هي الخصائص التي يتم تمريرها للكومبوننت من المكون الأب.',
  },
  {
    id: 5,
    title: 'ما هي Props؟',
    content: 'هي الخصائص التي يتم تمريرها للكومبوننت من المكون الأب.',
  },
];

export default function FQA() {
  return (
    <section className=" flex flex-col gap-18.5 py-12.5 padding-global">
        <SectionTitle className=" text-white" text="الأسئلة الشائعة"/>
        <Accordion items={items}/>
    </section>
  )
}
