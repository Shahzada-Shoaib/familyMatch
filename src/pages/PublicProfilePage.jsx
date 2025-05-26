import React from 'react'
import DpSection from '../components/PublicProfile/DpSection';
import AboutThemSection from '../components/PublicProfile/AboutThemSection';
import InterestSection from '../components/PublicProfile/InterestSection';
import TextSection from '../components/PublicProfile/TextSection';

function PublicProfilePage() {
  return (
    <div>
        <DpSection/>
        <AboutThemSection/>
        <InterestSection/> 
        <TextSection/>  
    </div>
  )
}

export default PublicProfilePage;