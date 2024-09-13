import React from 'react'
import WebDevelopmentServicesTop from '../../components/WebDevelopmentServicesTop'
import WebServicesSlider from '../../components/WebServicesSlider'
import WebServicesCards from '../../components/WebServicesCards'
import Benefits from '../Landing/Benefits'
import Testimonial from '../Landing/Testimonial'
import TechnologyStack from '../Landing/TechnologyStack'
import FAQS from '../Landing/FAQS'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import MainFeatures from '../../components/MainFeatures'
import OurProcess from '../../components/OurProcess'
import TeamSlider from '../../components/TeamSlider'
import './abc.css'
const MobileAppServices = () => {
  return (
    <>
      <WebDevelopmentServicesTop />
      <WebServicesSlider />
      <div className='px-20'>
        <WebServicesCards />
        <Benefits/>
        <Testimonial/>
        <TechnologyStack />
        <MainFeatures />
        <OurProcess />
      </div>
      <TeamSlider />
      <FAQS />
      <GetInTouch />
    </>
  )
}

export default MobileAppServices
