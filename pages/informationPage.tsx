import React, {useEffect} from 'react'
import Image from 'next/image'
import heroImage from '../images/banner-information.jpg'
import Timer from './features/timerComponent'
import { Icon } from '@iconify/react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useRouter } from 'next/router';

function InformationPage() {
  useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const router = useRouter()
	  const p = router.query.p || false
	  const q = router.query.q || false
  return (
    <section id="location">
      {/* Hero Image */}
      <div className="flex justify-center text-center pt-20 pb-5 md:px-20 md:pt-20">
        <div data-aos="fade-up" className="w-11/12 h-36 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-10 flex-shrink-0">
            <Image
                src={heroImage}
                alt="heroImage"
                layout="fill"
                objectFit="cover"
                className="rounded-xl cursor-pointer"
            ></Image>
            <div className="absolute w-full h-full font-Birthstone text-white/40 text-5xl pt-2 md:text-8xl md:pt-10 top-0 left-0 tracking-widest">
                Save The Date
            </div>
        </div>
      </div>

      <Timer />

      { q == "share" || p == "undangan" ? (
        <>
          {/* Button Ingatkan saya */}
          <div className="flex justify-center text-center pb-10">
            <a className="flex flex-row bg-choco px-4 py-2 md:px-8 md:py-4 md:text-lg text-white rounded-md text-xs"  rel='noreferrer'>
              <Icon icon="noto:spiral-calendar" color="rgba(0, 0, 68, 0.2)" className="w-8 h-8"/><span className="pl-1 pt-1 font-Pacifico">Ingatkan Saya</span>
            </a>
          </div>
        </>
       ) : ( null )}

      {/* Wedding Date */}
      <div className="flex justify-center text-center px-10">
        <div className="flex-shrink-0 text-center pb-10">
          <h1 className="font-Pacifico font-semibold text-xl md:text-4xl md:font-semibold">
            Minggu, 05 November 2023
          </h1>
        </div>
      </div>

      {/* Wedding Information */}
      <div className="flex justify-between text-center px-6 pb-5 md:px-96">
        <div className="bg-choco px-4 py-4 md:px-8 md:py-6 text-white rounded-md text-xs md:text-lg">
          <div className="justify-center text-center space-y-2">
           {/* <Icon icon="fxemoji:couplekiss" color="rgba(0, 0, 68, 0.2)" className="w-8 h-8" /> */}
            <p className="font-Pacifico">Akad Nikah</p>
            <p className="font-Pacifico">08.00 - 09.00 WIB</p>
          </div>
        </div>
        <div className="bg-choco px-4 py-4 md:px-8 md:py-6 text-white rounded-md text-xs md:text-lg">
          <div className="justify-center text-center space-y-2">
            {/* <Icon icon="fxemoji:couplekiss" color="rgba(0, 0, 68, 0.2)" className="w-8 h-8" /> */}
            <p className="font-Pacifico">Resepsi</p>
            <p className="font-Pacifico">09.00 WIB - 17.00 WIB</p>
          </div>
        </div>
      </div>

      { q == "share" || p == "undangan" ? (
        <>
          {/* Wedding Location */}
          <div className="flex justify-center text-center px-10 py-5">
            <div className="flex-shrink-0 text-center">
              <h1 className="font-Pacifico text-3xl md:text-5xl">
                LOKASI
              </h1>
            </div>
          </div>

          {/* Location Detail */}
          <div className="flex justify-center text-center px-10 py-5 md:px-96">
            <div className="flex justify-center px-auto py-auto">
              <h1 className="font-Pacifico text-xl md:text-4xl">
                JL. Pahlawan Desa Dawuan No.65 (GOR Desa Dawuan) Kecamatan Tengahtani Kab. Cirebon
              </h1>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center text-center pt-10 pb-10 md:px-96 md:pt-10-">
            <div className="w-11/12 h-60 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative flex-shrink-0">
              <iframe className="w-full h-60 md:w-full md:h-full lg:w-full lg:h-128 rounded-xl shadow-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5580917315274!2d108.52117387505349!3d-6.7015212932940385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee3f114a9e99d%3A0xcf5feee195c9c1ca!2sGOR%20Desa%20Dawuan%20Kec.%20Tengah%20Tani!5e0!3m2!1sen!2sid!4v1698679833974!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </>
      ) : ( null )}
    </section>
  )
}

export default InformationPage