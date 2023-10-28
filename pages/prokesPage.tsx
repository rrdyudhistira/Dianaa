import React from 'react'
import Image from 'next/image'
import heroImage from '../images/bg-cover-prokes.jpg'
import { Icon } from '@iconify/react';

function ProkesPage() {
  return (
    <>
        <div className="py-10">
            {/* Hero Image */}
            <div className="relative w-full justify-center text-center pt-32 pb-10 md:pt-32">
                <div className="w-11/12 h-36 md:w-full md:h-72 lg:w-full lg:h-128 flex-shrink-0">
                    <Image
                        src={heroImage}
                        alt="heroImage"
                        layout="fill"
                        objectFit="cover"
                        className="cursor-pointer"
                    ></Image>
                </div>
                <div className="absolute w-full h-full font-KoHo font-bold text-choco text-xl pt-4 md:text-7xl md:pt-10 top-0 left-0 tracking-widest">
                    PROTOKOL KESEHATAN
                    <div className="grid grid-cols-3 gap-1 border-3 border-purple-500">
                        <div className="px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-12">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="mdi:hand-wash-outline" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Cuci Tangan</p>
                        </div>
                        <div className="px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-12">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="emojione-monotone:face-with-medical-mask" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Gunakan Masker</p>
                        </div>
                        <div className="px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-12">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="ic:baseline-social-distance" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Jaga Jarak</p>
                        </div>
                        <div className="px-6 py-2 sm:px-8 sm:py-0 md:px-12 md:py-0">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="fa-solid:handshake-alt-slash" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Tidak Bersalaman</p>
                        </div>
                        <div className="px-6 py-2 sm:px-8 sm:py-0 md:px-12 md:py-0">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="healthicons:i-groups-perspective-crowd-outline" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Hindari Keramaian</p>
                        </div>
                        <div className="px-6 py-2 sm:px-8 sm:py-0 md:px-12 md:py-0">
                            <div className="ml-2 px-4 py-4 sm:ml-10 sm:px-8 sm:py-4 md:px-14 md:py-12 md:ml-20 md:mr-20 bg-cream opacity-90 rounded-xl">
                                <Icon icon="ri:hand-sanitizer-line" className="h-12 w-12 md:h-20 md:w-20" />
                            </div>
                            <p className="pt-0 ml-2 sm:ml-10 sm:pt-2 text-xs md:text-lg md:ml-2 text-choco font-Pacifico font-semibold">Hand Sanitizer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProkesPage