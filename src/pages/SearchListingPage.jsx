import React from 'react'
import SearchFilter from '../components/SearchFilter'
import ProfileCard from '../components/ProfileCard'

function SearchListingPage() {
  return (
    <div>
        <SearchFilter/>
          <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
          </div>

    </div>
  )
}

export default SearchListingPage