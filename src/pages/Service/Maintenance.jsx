import React from 'react'
import ServiceHeader from '../../ServiceCommon/ServiceHeader'
import serviceHeaderData from '../../ServiceData/serviceData'
import ServiceSection from '../../ServiceCommon/ServiceWorkflowSection'
import { serviceWorkflowData } from '../../ServiceData/serviceWorkflowData'
import SingleTransformation from '../../ServiceCommon/GalleryCarousel'
import Gallery from '../../ServiceData/Gallery'

const MaintenanceClean = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.MaintenanceClean}/>
      <ServiceSection data={serviceWorkflowData.maintenanceClean}/>
      <SingleTransformation data={Gallery.maintenanceClean} />
    </div>
  )
}

export default MaintenanceClean;
