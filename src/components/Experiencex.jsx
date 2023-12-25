import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";

import { styles } from '../styles';
import { experiencesx } from './constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperiencexCard= ({experiencex})=>{

  return(
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
  date={experiencex.date}
  iconStyle={{ background: experiencex.iconBg }}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={experiencex.icon}
        alt={experiencex.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
  >


    <div>
      <h3 className="text-white text-[24px] font-bold">{experiencex.title}

      </h3>
      <p
      classname='text-secondary text-[16px] font-semibold'
      style={{ margin:0}}
      >
        {experiencex.company_name}

      </p>

    </div>



    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experiencex.points.map((point, index)=>(
        <li
        key={`experiencex-point-${index}`}
        className={`text-white-100 text-[14px] pl-1 tracking-wider`}
        >
          {point}

        </li>
      ))}

    </ul>

  </VerticalTimelineElement>
  );
}

const Experiencex = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Where did I study from
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Education.
      </h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiencesx.map((experiencex, index) => (
          <ExperiencexCard
            key={`experiencex-${index}`}
            experiencex={experiencex}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
  )
}

export default SectionWrapper(Experiencex, "work");