"use client";
import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleScroll = (event) => {
    setSelectedSection(event.target.value);
  };

  useEffect(() => {
    if (selectedSection) {
      scroller.scrollTo(selectedSection, {
        duration: 500,
        smooth: true,
        offset: -120 
      });
    }
  }, [selectedSection]);

  return (
    <div className="text-base text-[#54031F] cursor-pointer z-50">
      <div className='hidden md:flex lg:flex mt-9 fixed z-50'>
        <ul>
          {['about', 'faculty members', 'laboratory', 'timetable', 'syllabus', 'activities'].map((section, index) => (
            <li key={index} className='mb-[0.6vh] hover:font-semibold'>
              <Link to={section} smooth={true} duration={500} onClick={() => setSelectedSection(section)}>
                <div className='flex flex-row'>
                  {selectedSection === section && (
                    <svg className='w-3 h-4 mt-1 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                  )}
                  {section.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <select
  onChange={handleScroll}
  className="text-start lg:hidden md:hidden fixed bg-[#EAE6FF] px-20 py-3 rounded-xl border-[#54031F] border text-[#54031F] z-30 left-1/2 transform -translate-x-1/2"
>
  {['about', 'faculty members', 'laboratory', 'timetable', 'syllabus', 'activities'].map((section, index) => (
    <option key={index} value={section}>
      {section.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
    </option>
  ))}
</select>

    </div>
  );
};

export default Sidebar;