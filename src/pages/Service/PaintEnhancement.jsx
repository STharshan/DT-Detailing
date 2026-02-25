import React from 'react'
import ServiceHeader from '../../ServiceCommon/ServiceHeader'
import serviceHeaderData from '../../ServiceData/serviceData'
import ServiceSection from '../../ServiceCommon/ServiceWorkflowSection'
import { serviceWorkflowData } from '../../ServiceData/serviceWorkflowData'
import SingleTransformation from '../../ServiceCommon/GalleryCarousel'
import Gallery from '../../ServiceData/Gallery'

const PaintEnhancement = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.PaintEnhancement}/>
      <ServiceSection data={serviceWorkflowData.paintEnhancement}/>
      <SingleTransformation data={Gallery.paintEnhancement} />
    </div>
  )
}

export default PaintEnhancement;
