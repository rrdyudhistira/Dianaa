import React, { useEffect } from 'react'
import Image from 'next/image'
import heroImage from '../images/banner-pray.jpg'
import bniImage from '../images/bni.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { createPopper } from "@popperjs/core"

function PrayPage() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    // Popover 1
    const [popoverShow, setPopoverShow] = React.useState(false);
    const btnRef: any = React.createRef();
    const popoverRef: any = React.createRef();
    const openPopover = () => {
        createPopper(btnRef.current, popoverRef.current, {
        placement: "top"
        });
        setPopoverShow(true);
        setTimeout(() => {
            setPopoverShow(false)
        }, 1000)
    };
    const closePopover = () => {
        setPopoverShow(false);
    };
    // Popover 2
    const [popoverShow2, setPopoverShow2] = React.useState(false);
    const btnRef2: any = React.createRef();
    const popoverRef2: any = React.createRef();
    const openPopover2 = () => {
        createPopper(btnRef2.current, popoverRef2.current, {
        placement: "top"
        });
        setPopoverShow2(true);
        setTimeout(() => {
            setPopoverShow2(false)
        }, 1000)
    };
    const closePopover2 = () => {
        setPopoverShow2(false);
    };
  return (
    <section id="pray">
        {/* Hero Image */}
        <div className="flex justify-center text-center pt-20 pb-10 md:mx-20 md:pt-20">
            <div data-aos="fade-up" className="w-11/12 h-36 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-10 flex-shrink-0">
                <Image
                    src={heroImage}
                    alt="heroImage"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
                <div className="absolute w-full h-full font-Birthstone text-white text-5xl pt-2 md:text-8xl md:top-96 md:right-96 md:pl-20 top-20 right-20 tracking-widest">
                    Doa Kami
                </div>
            </div>
        </div>

        {/* Pray Text */}
        <div className="flex justify-center text-center pt-4 md:mx-20 md:pt-10">
            <div className="justify-center">
                <div className="flex-shrink-0 text-center px-5">
                    <h1 className="font-Pacifico text-sm md:text-2xl pb-2">
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." (QS. Ar-Rum: 21).
                    </h1>
                </div>
            </div>
        </div>

        {/* Wedding Location */}
        {/* <div className="flex justify-center text-center px-10 py-5 md:py-10">
          <div className="flex-shrink-0 text-center">
              <h1 className="font-Birthstone text-5xl md:text-8xl">
                Amplop Online
              </h1>
          </div>
        </div> */}

        {/* Amplop Online Text */}
        {/* <div className="flex justify-center text-center pt-4 md:mx-20 md:pt-10">
            <div className="justify-center">
                <div className="flex-shrink-0 text-center px-5">
                    <h1 className="font-Pacifico text-sm md:text-2xl pb-2">
                        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih anda, Anda dapat memberi kado secara cashless.
                    </h1>
                </div>
            </div>
        </div> */}

        {/* Rekening Section */}
        {/* <div className="md:flex md:justify-between md:pl-40">
            <div className="md:flex md:flex-col"> */}
                {/* Section 1 */}
                {/* No Rekening Text */}
                {/* <div className="flex justify-center text-center pt-4 md:px-20 md:pt-10">
                    <div className="justify-center">
                        <div className="flex-shrink-0 text-center px-5 md:px-10">
                            <h1 className="font-Pacifico text-sm md:text-3xl pb-2">
                                No Rekening
                            </h1>
                        </div>
                    </div>
                </div> */}

                {/* BNI Image */}
                {/* <div className="flex justify-center text-center pt-6 pb-10 md:px-20 md:py-20">
                    <div className="justify-center px-10">
                        <div className="w-1/2 h-12 md:w-full md:h-72 lg:w-full lg:h-20 shadow-xl rounded-xl relative px-20 md:px-40 flex-shrink-0">
                            <Image
                                src={bniImage}
                                alt="bniImage"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl cursor-pointer"
                            ></Image>
                        </div>
                    </div>
                </div> */}

                {/* Button Salin */}
                {/* <div className="flex justify-center text-center pb-8">
                    <button onClick={() => {
                        navigator.clipboard.writeText('1175039327')
                        popoverShow ? closePopover() : openPopover()
                        }} ref={btnRef} className="bg-choco hover:bg-blue-200 px-4 py-2 md:px-14 md:py-2 text-white rounded-md text-xs md:text-2xl">Salin</button>
                </div> */}

                {/* Label Nama Rekening */}
                {/* <div className="flex justify-center text-center">
                    <div className="justify-center">
                        <div className="flex-shrink-0 text-center px-5">
                            <h1 className="font-Pacifico text-sm md:text-2xl pb-2">
                               Trisnandi Esa Saputra 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex md:flex-col md:pr-40">
                <div className="px-32 md:px-0 py-4 md:py-0">
                    <div className="border-t-2 md:border-t-0 border-black"> */}

                        {/* Section 2 */}
                        {/* No Rekening Text */}
                        {/* <div className="flex justify-center text-center pt-4 md:px-20 md:pt-10">
                            <div className="justify-center">
                                <div className="flex-shrink-0 text-center px-5 md:px-10">
                                    <h1 className="font-Pacifico text-sm md:text-3xl pb-2">
                                        No Rekening
                                    </h1>
                                </div>
                            </div>
                        </div> */}

                        {/* BNI Image */}
                        {/* <div className="flex justify-center text-center pt-6 pb-10 md:px-20 md:py-20">
                            <div className="justify-center px-10">
                                <div className="w-1/2 h-12 md:w-full md:h-72 lg:w-full lg:h-20 shadow-xl rounded-xl relative px-20 md:px-40 flex-shrink-0">
                                    <Image
                                        src={bniImage}
                                        alt="bniImage"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl cursor-pointer"
                                    ></Image>
                                </div>
                            </div>
                        </div> */}

                        {/* Button Salin */}
                        {/* <div className="flex justify-center text-center pb-8">
                            <button onClick={() => {
                                navigator.clipboard.writeText('1169987803')
                                popoverShow2 ? closePopover2() : openPopover2()
                                }} ref={btnRef2} className="bg-choco hover:bg-blue-200 px-4 py-2 md:px-14 md:py-2 text-white rounded-md text-xs md:text-2xl">Salin</button>
                        </div> */}

                        {/* Label Nama Rekening */}
                        {/* <div className="flex justify-center text-center">
                            <div className="justify-center">
                                <div className="flex-shrink-0 text-center">
                                    <h1 className="font-Pacifico text-sm md:text-2xl pb-2">
                                        Diana Apriliyani
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Popover 1 */}
            {/* <div
                className={
                (popoverShow ? "" : "hidden ") +
                "bg-black border-2 border-white block z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg"
                }
                ref={popoverRef}>
                <div>
                    <div
                        className="bg-black text-white text-xs opacity-75 font-semibold p-1 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg"
                    >
                        Berhasil disalin!
                    </div>
                </div>
            </div> */}

            {/* Popover 2 */}
            {/* <div
                className={
                (popoverShow2 ? "" : "hidden ") +
                "bg-black border-2 border-white block z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg"
                }
                ref={popoverRef2}>
                <div>
                    <div
                        className="bg-black text-white text-xs opacity-75 font-semibold p-1 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg"
                    >
                        Berhasil disalin!
                    </div>
                </div>
            </div>

        </div> */}

    </section>
  )
}

export default PrayPage