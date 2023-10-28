import React, {useEffect} from 'react'
import ModalComponent from './features/modalComponent'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
  return (
    <>
      <ModalComponent />
    </>
  )
}