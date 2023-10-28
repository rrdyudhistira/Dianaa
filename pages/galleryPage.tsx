import React, {useEffect} from 'react'
import Image from 'next/image'
import heroImage from '../images/banner-gallery.jpg'
import item1 from '../images/gallery/item-1.2.jpg'
import item2 from '../images/gallery/item-9.jpg'
import item3 from '../images/gallery/item-3.1.jpg'
import item4 from '../images/gallery/item-4.1.jpg'
import item5 from '../images/gallery/item-5.1.jpg'
import item6 from '../images/gallery/item-6.2.jpg'
import item7 from '../images/gallery/item-7.jpg'
import item8 from '../images/gallery/item-8.jpg'
import item9 from '../images/gallery/item-6.1.jpg'
import item10 from '../images/gallery/item-10.jpg'
import item11 from '../images/gallery/item-11.jpg'
import item14 from '../images/gallery/item-15.jpg'
import itemLamaran1 from '../images/gallery/item-lamaran-1.jpg'
import itemLamaran2 from '../images/gallery/item-lamaran-2.jpg'
import itemLamaran3 from '../images/gallery/item-lamaran-3.jpg'
import itemLamaran4 from '../images/gallery/item-lamaran-4.jpg'
import itemLamaran5 from '../images/gallery/item-lamaran-5.jpg'
import itemLamaran6 from '../images/gallery/item-lamaran-6.jpg'
import itemLamaran7 from '../images/gallery/item-lamaran-7.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

function GalleryPage() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <section id="gallery" className="pt-10">
        {/* Hero Image */}
        <div className="flex justify-center text-center pt-10 pb-5 md:mx-20 md:pt-10">
            <div data-aos="fade-up" className="w-11/12 h-36 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-10 flex-shrink-0">
                <Image
                    src={heroImage}
                    alt="heroImage"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
                <div className="absolute w-full h-full font-Birthstone text-white text-5xl pt-2 md:text-8xl md:top-96 md:right-80 top-20 right-14 tracking-widest">
                    Our Gallery
                </div>
            </div>
        </div>

        {/* Secoond 3 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 px-4 md:mx-20 md:pt-5">
            {/* left side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={itemLamaran2}
                    alt="itemLamaran2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-2 col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={itemLamaran6}
                    alt="itemLamaran6"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            {/* right side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-full md:h-full lg:w-full lg:h-full shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={itemLamaran1}
                    alt="itemLamaran1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
        </div>

        {/* Two Side 1 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 pb-5 px-4 md:mx-20 md:pt-6">
            {/* left side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={itemLamaran3}
                    alt="itemLamaran3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={itemLamaran4}
                    alt="itemLamaran4"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
        </div>

        {/* Two Side 1 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 pb-5 px-4 md:mx-20 md:pt-2">
            {/* left side */}
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={itemLamaran5}
                    alt="itemLamaran5"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={itemLamaran7}
                    alt="itemLamaran7"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
        </div>

        {/* First 3 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 px-4 md:mx-20 md:pt-2">
            {/* left side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-full md:h-full lg:w-full lg:h-full shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item1}
                    alt="item1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            {/* right side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={item8}
                    alt="item8"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-2 col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={item3}
                    alt="item3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
        </div>

        {/* Two Side 1 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 pb-5 px-4 md:mx-20 md:pt-6">
            {/* left side */}
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item10}
                    alt="item10"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item11}
                    alt="item11"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
        </div>
        
        {/* Secoond 3 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 px-4 md:mx-20 md:pt-2">
            {/* left side */}
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={item4}
                    alt="item4"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-2 col-span-2 w-full h-32 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-12 flex-shrink-0">
                <Image
                    src={item5}
                    alt="item5"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
            {/* right side */}
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-full md:h-full lg:w-full lg:h-full shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item6}
                    alt="item6"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
        </div>

        {/* Two Side 2 */}
        {/* <div className="grid grid-rows-2 grid-flow-col gap-4 px-4 md:mx-20 md:pt-6"> */}
            {/* left side */}
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item7}
                    alt="item7"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item9}
                    alt="item9"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
        </div> */}

        {/* Two Side 3 */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 pb-5 pt-5 px-4 md:mx-20 md:pt-6">
            {/* left side */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item2}
                    alt="item2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
            {/* <div data-aos="zoom-in" data-aos-duration="1500" className="row-span-3 w-full h-64 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative px-14 md:px-44 flex-shrink-0">
                <Image
                    src={item14}
                    alt="item14"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div> */}
        </div>
    </section>
  )
}

export default GalleryPage