import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import heroImage from './../../images/bg-modal-2.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import MainPage from './../mainPage'
import Header from './../../components/Header'

export default function ModalComponent() {
	const [showModal, setShowModal] = React.useState(true);
		useEffect(() => {
			Aos.init({ duration: 2000 });
		}, []);

	const router = useRouter()
	const guestName = router.query.to || "Tamu Undangan"
	const z = router.query.z || "Tamu Undangan"

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-end items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full h-full max-w-full max-h-full">
              {/*content*/}
              <div className="pt-96 lg:pt-80 h-full max-w-full max-h-full rounded-lg shadow-lg flex flex-col place-content-center w-full bg-white opacity-50 outline-none focus:outline-none">
                <div className="">
					{/*header*/}
					<div className="flex items-center justify-center rounded-t contrast-100">
						<h3 className="text-6xl font-Birthstone text-black">
							Diana & Trisnandi
						</h3>
					</div>
					<div className="flex items-center justify-center pt-4 rounded-t contrast-100">
						<h3 className="text-3xl font-Birthstone text-black">
							{ z == "1" ? (
							"Special Invite To :"
							) : (
							"Kepada Yth."
							)}
						</h3>
					</div>
					{/*body*/}
					<div className="flex justify-center items-center text-center py-4 flex-auto">
						<h1 className="text-2xl leading-relaxed font-Birthstone text-black contrast-100">
							{guestName}
						</h1>
					</div>
					{/*footer*/}
					<div className="animate-bounce flex items-center justify-center p-6 rounded-b">
						<button
							className="text-cream bg-black opacity-80 px-4 py-2 rounded-lg font-Birthstone text-xl tracking-widest transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
							type="button"
							onClick={() =>
								setShowModal(false)
							}
						>
							{ z == "1" ? (
							"Open Invitation"
							) : (
							"Buka Undangan"
							)}
						</button>
					</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 lg:w-full lg:h-170 brightness-100">
            <Image
                src={heroImage}
                alt="heroImage"
                layout="fill"
                objectFit="cover"
                className="rounded-xs cursor-pointer"
            ></Image>
          </div>
        </>
      ) : (
          <>
            <Header />
            <MainPage />
          </>
      ) }
    </>
  );
}