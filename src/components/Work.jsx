import React from 'react'
import WorkItem from "./WorkItem"

const data =  [
    {
        year: 2022,
        title: 'Private English Teacher',
        duration: '8 Months',
        details:
        "Excellent English Pronunciation, Vocabulary, and Grammar skills. Mastery of the subject and creative thinking skills",

    },
    {
        year: 2017,
        title: "Technician at PT SANKEN ARGAWIJA",
        duration: '4 Months',
        details:
        "Have a good knowledge of electronics, Assembly and checks of electronic devices, Responsible for handling and repairing damaged electronics",
    },
];

const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-red-700 pb-10'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>  
  );
};

export default Work