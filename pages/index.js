import Navbar from '@/components/Navbar';
import Nowplaying from '@/components/NowPlaying';
import SecondNav from '@/components/SecondNav';
import TopRated from '@/components/Top-rated';
import Upcoming from '@/components/Upcoming';
import TrendingMovies from '@/components/trendingMovies';
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <SecondNav/>
      <TrendingMovies/>
      <TopRated/>
      <Upcoming/>
      <Nowplaying/>
    </div>
  )
}

export default index;