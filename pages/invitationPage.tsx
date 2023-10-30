import React, { useEffect } from 'react'
import Image from 'next/image'
import heroImage from '../images/banner-invitation.jpg'
import heroImage2 from '../images/main-image.png'
import annisa from '../images/annisa.jpg'
import rivaldi from '../images/rivaldi.jpg'
import { Icon } from '@iconify/react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function InvitationPage() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section id="invitation">
            {/* Hero Image */}
            {/* <div className="flex justify-center text-center pt-20 pb-10 md:mx-20 md:pt-20">
                <div data-aos="fade-up" className="w-11/12 h-36 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-10 flex-shrink-0">
                    <Image
                        src={heroImage}
                        alt="heroImage"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl cursor-pointer"
                    ></Image>
                    <div className="absolute w-full h-full font-Birthstone text-white/40 text-6xl pt-1 md:text-8xl md:pt-10 top-0 left-0 tracking-widest">
                        Invitation
                    </div>
                </div>
            </div> */}

            {/* Invitation Text */}
            <div className="flex justify-center text-center pt-4 pb-5 md:mx-20 md:pt-4">
                <div className="justify-center">
                    {/* Opening Text */}
                    <div className="flex-shrink-0 text-center pb-5">
                        <h1 className="font-Pacifico text-sm md:text-2xl pb-2">
                            Maha Suci Allah SWT yang menciptakan mahluk-Nya berpasang-pasangan
                        </h1>
                    </div>

                    {/* Annisa Image */}
                    <div className="flex justify-center items-center text-center pb-5 md:mx-20 md:pt-10">
                        <div className="justify-center">
                            {/* Height ga full, resize ukuran foto */}
                            <div className="w-4/5 h-72 md:w-4/5 md:h-72 lg:w-full lg:h-128 relative px-36 md:px-44 flex-shrink-0">
                            <Image
                                    src={rivaldi}
                                    alt="rivaldi"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full cursor-pointer"
                                ></Image>

                            </div>
                        </div>
                    </div>

                    {/* Rivaldi's Text */}
                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-xl md:text-3xl pb-8">
                            Trisnandi Esa Saputra
                        </h1>
                    </div>
                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-md md:text-2xl pb-8">
                            Putra dari
                        </h1>
                    </div>
                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-xs md:text-xl">
                            Bapak Sertu Suwardi dan Ibu Rd. Kartini
                        </h1>
                    </div>

                   
                </div>
            </div>

            {/* Main Image */}
            {/* <div className="flex justify-center items-center text-center py-10 md:mx-20 md:pt-10">
            <div className="justify-center">
                <div className="w-4/5 h-96 md:w-4/5 md:h-72 lg:w-full lg:h-128 relative px-36 md:px-44 flex-shrink-0">
                    <Image
                        src={heroImage2}
                        alt="heroImage2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl cursor-pointer"
                    ></Image>
                </div>
            </div>
        </div> */}

            <div className="grid grid-cols-3 gap-2 py-5">
                <div className="pl-10 mt-4">
                    <div className="border-t-2 border-black">

                    </div>
                </div>
                <div className="pl-11 md:pl-48">
                    <Icon icon="icon-park-twotone:like" inline={true} className="h-8 w-8 sm:h-8 sm:w-8 md:h-12 md:w-12 cursor-pointer" />
                </div>
                <div className="pr-10 mt-4">
                    <div className="border-t-2 border-black">

                    </div>
                </div>
            </div>

            {/* Invitation Text */}
            <div className="flex justify-center text-center pt-4 pb-5 md:mx-20 md:pt-5">
                <div className="justify-center">

                    {/* Rivaldi Image */}
                    <div className="flex justify-center items-center text-center pb-5 md:mx-20 md:pt-10">
                        <div className="justify-center">
                            {/* Height ga full, resize ukuran foto */}
                            <div className="w-4/5 h-72 md:w-4/5 md:h-72 lg:w-full lg:h-128 relative px-36 md:px-44 flex-shrink-0">
                            <Image
                                    src={annisa}
                                    alt="annisa"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full cursor-pointer"
                                ></Image>

                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-xl md:text-3xl pb-8">
                            Diana Apriliyani
                        </h1>
                    </div>
                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-md md:text-2xl pb-8">
                            Putri dari
                        </h1>
                    </div>
                    <div className="flex-shrink-0 text-center">
                        <h1 className="font-Pacifico text-xs md:text-xl">
                            Bapak Sayadi (Alm) dan Ibu Anah Fitriah
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default InvitationPage