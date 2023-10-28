import React, {useRef, useEffect, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import images from '../../components/images-slider'

function CarouselComponent() {
    const [width, setWidth] = useState<any>(0)
    const carousel: any = useRef()

    useEffect(() => {
        const result: any = carousel?.current;
        setWidth(result.scrollWidth - result.offsetWidth)
    }, []);

  return (
    <>
        <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className="flex text-center pt-20 md:mx-20 md:pt-20 overflow-hidden">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}  className="flex space-x-6 w-11/12 h-44 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-xl rounded-xl relative flex-shrink-0">
                {images.map((image: any) => {
                    return(
                        <motion.div key={image} className="w-11/12 h-40 md:w-4/5 md:h-72 lg:w-full lg:h-128 shadow-lg rounded-xl relative px-10 flex-shrink-0">
                            <Image
                                src={image}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl cursor-grab"
                            ></Image>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    </>
  )
}

export default CarouselComponent