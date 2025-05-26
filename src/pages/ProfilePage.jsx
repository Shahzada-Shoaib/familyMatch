import React from 'react';
import ProfileHeader from '../components/ProfilePage/ProfileHeader';
import ProfileHeroSection from '../components/ProfilePage/profileHeroSection';
import LeftMenu from '../components/ProfilePage/LeftMenu';
import ProfileSettings from '../components/ProfilePage/ProfileSettings';


function ProfilePage() {
  return (
    <div className='min-h-screen bg-[#F2F5F6]'>
        <ProfileHeader/>
        <ProfileHeroSection/>
        <div className='flex'>
              <LeftMenu />
              <ProfileSettings/>

        </div>
    </div>
  )
}

export default ProfilePage;