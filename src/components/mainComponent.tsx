// components/FullPageSwiper.tsx
'use client'
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

// Import your custom components
import Experience from './experience';
import Projects from './projects';
import About from './about';
import Skills from './skills'
import Introduction from './introduction'
const MainComponent = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  return (
	<div className='h-screen w-full bg-[#10142c] flex flex-row '>
    <div className=' w-[50%] h-full'>
		<Introduction selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
    </div>
    <div className="h-screen overflow-y-scroll  w-[50%]">
      <About setSelectedSection={setSelectedSection}/>
      <Experience setSelectedSection={setSelectedSection}/>
      <Projects setSelectedSection={setSelectedSection}/>
      <Skills setSelectedSection={setSelectedSection}/>
    </div>
	</div>
  );
};

export default MainComponent;
