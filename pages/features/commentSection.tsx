import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

interface Props{
	pesan: any,
	getJumlahPesan: any
}

function CommentSection({pesan, getJumlahPesan}: Props) {
	const [posts, setPosts] = useState<any>(null)
	const apiEndPoint = 'https://rivaldi-annisa.dgtl-invite.com/public/api/v1/sampaikanPesan'
	const apiEndPointLocal = 'http://127.0.0.1:8000/api/v1/sampaikanPesan'
	const router = useRouter()
	const x = router.query.x || false

	useEffect(() => {

		const getPosts = async () => {
			const {data: res} = await axios.get(apiEndPoint)
			if(res.status == 200){
				setPosts(res.data)
				getJumlahPesan(res.data.length)
			}
		}
		getPosts()

	},[pesan])
	
  return (
    <>
      <div className="flex flex-col items-center justify-start bg-cream pb-4">
        <div className="w-10/12 mx-auto space-y-8 text-center">
			<div className="max-h-60 overflow-y-scroll flex flex-col gap-y-2">
				{posts ? posts.map((item : any) => (
					<article className="p-4 bg-white text-left rounded-xl shadow-lg flex gap-x-2" key={item.id}>
						<div className="flex">
							<Icon icon="ci:user-heart" className="w-10 h-10"/>
						</div>
						<div className="flex-7">
							<a href="#rsvp" className="block mt-1 text-lg loading-tight font-Pacifico font-semibold text-black">
								{item.nama}
							</a>
							<p className="mt-1 text-gray-900 text-sm">
								{item.pesan}
							</p>
							{ x == "superadmin" ? (
								<>
									<div className="flex justify-start items-start">
										<a href="#rsvp" className="block md:pl-0 text-xs loading-tight font-light text-slate-300">
											{item.time}
										</a>
									</div>
								</>
							) : ( null )}
						</div>
					</article>
				)) : null} 
			</div>
        </div>
      </div>
    </>
  )
}

export default CommentSection