import React, {useState} from 'react';
import Image from 'next/image'
import heroImage from '../images/main-img-1.jpg'
import CommentSection from './features/commentSection'
// import ConfirmSection from './features/confirmSection'
import FormSection from './features/formSection'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

function InstagramPage() {
	const [pesan, setPesan] = useState<any>(null)
	const [jumlahPesan, setJumlahPesan]  = useState<any>(null)
	const getJumlahPesan = (x: any) => {
		setJumlahPesan(x)
	}
	const router = useRouter()
	const p = router.query.p || false

  return (
	  <>
		<section id="rsvp">
			{/* { p == "undangan" ? (
				<>
					<ConfirmSection />
				</>
			) : ( 
				null
			 )} */}
			{/* Hero Image */}
			<div className="grid grid-rows-0 gap-0 pb-1">
				<div className="flex justify-start sm:ml-0 space-x-0">
					<div className="ml-4 px-4 py-4 sm:ml-8 sm:px-2 sm:py-2 md:px-2 md:py-8 md:ml-20">
						<Icon icon="emojione-monotone:couple-with-heart" className="h-6 w-6 sm:h-6 sm:w-6 md:h-16 md:w-16" />
					</div>
					<div className="ml-2 px-2 py-4 sm:ml-10 sm:px-2 sm:py-2 md:px-14 md:py-12 md:ml-20 md:mr-20">
						<span className="text-2xl md:text-5xl font-Birthstone">Trisnanadi & Diana</span>
					</div>
				</div>
				<div className="flex justify-center text-center pt-0 md:mx-20">
					<div className="w-11/12 h-72 md:w-4/5 md:h-72 lg:w-full lg:h-150 shadow-xl rounded-xl relative px-10 flex-shrink-0">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className="rounded-xl"
						></Image>
					</div>
				</div>
				<div className="flex justify-start ml-2 sm:ml-0 space-x-0">
					<div className="ml-2 px-4 py-2 sm:ml-10 sm:px-2 sm:py-2 md:px-4 md:py-4 md:ml-20 md:mr-4">
						<Icon icon="icon-park-solid:like" color="#d90429" className="h-8 w-8 sm:h-8 sm:w-8 md:h-12 md:w-12 cursor-pointer" />
					</div>
					<div className="flex items-center justify-center py-2 sm:px-2 sm:py-2 md:px-4 md:py-4 md:ml-10 md:mr-10">
						<Icon icon="akar-icons:comment" className="h-8 w-8 sm:h-8 sm:w-8 md:h-12 md:w-12 cursor-pointer"></Icon>
						<span className="absolute pb-0.5 text-black font-Pacifico text-sm font-semibold">{jumlahPesan}</span>
					</div>
				</div>
			</div>
			<CommentSection pesan={pesan} getJumlahPesan={getJumlahPesan} />
			<FormSection setPesan={setPesan}/>
		</section>
	</>
  )
}

export default InstagramPage