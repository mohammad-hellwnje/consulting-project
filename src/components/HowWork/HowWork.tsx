import React from 'react';
import { Step } from '../../types/howWork';
import Line from './../../assets/image/Line.png'
type HowWorkProps = {
  steps: Step[];
};

const HowWork: React.FC<HowWorkProps> = ({ steps }) => {
  return (
    <div className="bg-[#3B2241]  text-white">
      <h2 className="text-center text-2xl font-bold pt-[105px] mb-[186px]">كيف تعمل المنصة</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-[144px] pb-[244px]">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className='w-[106px] h-[106px] rounded-[30px] bg-[#6D5471] flex items-center justify-center mb-6 '><img src={step.icon} alt={step.title} className="w-[57px] h-[52px] " /></div>
              <h3 className="text-l mb-4">{step.title}</h3>
              <p className="text-sm text-center">{step.description}</p>
            </div>

         
            {index < steps.length - 1 && (
              <div className="hidden md:block mx-4">
                <img 
                  src={Line} 
                  alt="line" 
                  className="h-[83px] w-[262px]"
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
