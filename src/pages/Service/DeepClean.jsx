import React from 'react'
import ServiceHeader from '../../ServiceCommon/ServiceHeader'
import serviceHeaderData from '../../ServiceData/serviceData'
import ServiceSection from '../../ServiceCommon/ServiceWorkflowSection'
import { serviceWorkflowData } from '../../ServiceData/serviceWorkflowData'
import SingleTransformation from '../../ServiceCommon/GalleryCarousel'
import Gallery from '../../ServiceData/Gallery'

const DeepClean = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.DeepClean}/>
      <ServiceSection data={serviceWorkflowData.deepClean}/>
      <SingleTransformation data={Gallery.deepClean} />
    </div>
  )
}

export default DeepClean;
