import React from 'react'
import WebDevelopmentServicesTop from '../../components/WebDevelopmentServicesTop'
import WebServicesSlider from '../../components/WebServicesSlider'
import WebServicesCards from '../../components/WebServicesCards'
import Benefits from '../Landing/Benefits'
import Testimonial from '../Landing/Testimonial'
const MobileAppServices = () => {
  return (
 <>
 <WebDevelopmentServicesTop/>
 <WebServicesSlider/>
 <div className='px-20 py-12'>
 <WebServicesCards/>
  <Benefits/>
  <Testimonial/>
 </div>
 </>
  )
}

export default MobileAppServices
