import React from 'react';
import ProfileHeader from '../components/ProfilePage/ProfileHeader';
import ProfileHeroSection from '../components/ProfilePage/profileHeroSection';


function ProfilePage() {
  return (
      <div className='h-[100vh] bg-[#F2F5F6]'>
        <ProfileHeader/>
        <ProfileHeroSection/>
    </div>
  )
}

export default ProfilePage;