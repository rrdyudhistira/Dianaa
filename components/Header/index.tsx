import Navbar from '../Navbar'
import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Header() {
  useEffect(() => {
      Aos.init({ duration: 3000 });
  }, []);
  return (
      <Navbar />
  )
}