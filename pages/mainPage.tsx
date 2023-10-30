import React, {useEffect, useState} from 'react'
import HomePage from './homePage'
import InvitationPage from './invitationPage'
import InformationPage from './informationPage'
import GalleryPage from './galleryPage'
import PrayPage from './prayPage'
// import ProkesPage from './prokesPage'
import InstagramPage from './instagramPage'
import MusicPlayer from '../components/music-player/index'
import Aos from 'aos';
// import weddingInstrument from '../music/weddingInstrument.mp3'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, []);
  return (
    <>
      <div data-aos="fade-up" className="bg-cream w-full">
            <HomePage />
            <InvitationPage />
            {/* <InformationPage /> */}
            <GalleryPage />
            <PrayPage />
            {/* <ProkesPage /> */}
            {/* <InstagramPage /> */}
            <Footer/>
      </div>
			<MusicPlayer />
    </>
  )
}