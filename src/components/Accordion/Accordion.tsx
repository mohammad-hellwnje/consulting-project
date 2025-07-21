import { useState } from "react";
import HeadAccordion from "./HeadAccordion";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
const [openIndex, setOpenIndex] = useState<number | null>(items[0]?.id || null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className=" flex w-full gap-8">
    <div className="w-1/2 flex-wrap flex-col flex  gap-8">
      {items.slice(0,2).map((item) => {
        const isOpen = openIndex === item.id;

        return (
          <div
            key={item.id}
            className=" h-min w-fullw-full rounded-lg overflow-hidden transition-all duration-300"
          >
            <HeadAccordion item={item} isOpen={isOpen} onclick={() => toggle(item.id)} />

            <div
              className={`
                bg-white overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? 'h-[138px] opacity-100 py-2 px-4 border-t border-gray-200' : 'max-h-0 opacity-0 p-0 '}
              `}
            >
              <div className="text-gray-700">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="w-1/2 flex-wrap flex-col flex  gap-8">
      {items.slice(2,5).map((item) => {
        const isOpen = openIndex === item.id;

        return (
          <div
            key={item.id}
            className=" h-min w-full rounded-lg overflow-hidden transition-all duration-300"
          >
            <HeadAccordion item={item} isOpen={isOpen} onclick={() => toggle(item.id)} />

            <div
              className={`
                bg-white overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? 'h-[138px] opacity-100 py-2 px-4 border-t border-gray-200' : 'max-h-0 opacity-0 p-0 '}
              `}
            >
              <div className="text-gray-700">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
    </div>

  );
}
