import React from 'react';
import { Step } from '../../types/howWork';
import Line from './../../assets/image/Line.png'
import SectionTitle from '../ui/Titles/SectionTitle';
import Card from './Card';
type HowWorkProps = {
  steps: Step[];
};

const HowWork: React.FC<HowWorkProps> = ({ steps }) => {
  return (
    <div className="bg-[#3B2241] padding-global py-12.5 text-white">
      <SectionTitle text='كيف تعمل المنصة' className=' mb-[56px]'/>
      <div className="flex w-full flex-col md:flex-row md:items-start items-center gap-5 ">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center   ">
            <Card stepIcon={step.icon} title={step.title} description={step.description}/>
            {index < steps.length - 1 && (
              <div className="hidden lg:block  laptop:mx-4">
                <img 
                  src={Line} 
                  alt="line" 
                  className="2xl:h-[83px]  xl:w-[120px] laptop:w-[120px] lg:w-[80px] 2xl:w-[262px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
