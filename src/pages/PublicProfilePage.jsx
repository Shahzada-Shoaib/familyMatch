import React, { useEffect, useState } from 'react'
import DpSection from '../components/PublicProfile/DpSection';
import AboutThemSection from '../components/PublicProfile/AboutThemSection';
import InterestSection from '../components/PublicProfile/InterestSection';
import TextSection from '../components/PublicProfile/TextSection';
import MoreLikeThem from '../components/PublicProfile/MoreLikeThem';
import ProfileHeader from '../components/ProfilePage/ProfileHeader';
import { getAuthToken } from '../../utils/authToken';

function PublicProfilePage() {

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem('authToken');
    const token = getAuthToken();

    // console.log("Token from localStorage:", token);

    fetch('api//profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setProfileData(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 


  return (
    <>
    <ProfileHeader/>
      <div className='md:flex justify-center'>
        <div className=''>
          <DpSection data={profileData}/>
          <AboutThemSection data={profileData} />
          <InterestSection data={profileData} />
          <TextSection />
        </div>
        <MoreLikeThem />
      </div>
    </>
    
  )
}

export default PublicProfilePage;