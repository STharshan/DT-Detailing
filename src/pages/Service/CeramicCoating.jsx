import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const BuildingWindowTinting = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.BuildingWindowTinting}/>
      <ServiceSection data={serviceWorkflowData.BuildingWindowTinting}/>
      <GalleryCarousel data={Gallery.BuildingWindowTinting} />
    </div>
  )
}

export default BuildingWindowTinting;
