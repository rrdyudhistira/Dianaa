import React, {FormEvent, useState, useRef} from 'react'
import axios from 'axios'
import Router, { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2'

function ConfirmSection() {
    const apiEndPoint = 'https://rivaldi-annisa.dgtl-invite.com/public/api/v1/konfirmasiKehadiran'
    const apiEndPointLocal = 'http://127.0.0.1:8000/api/v1/konfirmasiKehadiran'
    const [guestName, setGuestName] = useState<any>(null)
    const [attend, setAttend] = useState<any>(1)
    const inputGuestName = useRef<any>(null)
    const router = useRouter()

    const onGuestChange = (e: any) => {
        setGuestName(e.target.value)
    }

    const onAttendChange = (e: any) => {
        console.log("RADIO: ", e.currentTarget.value)
        setAttend(e.currentTarget.value)
    }

    const addPost = async (event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault()

        const post = {
            name:guestName,
            is_hadir:attend,
            parameter_name: router.query.to || "Tamu Undangan"
        }
        await axios.post(apiEndPoint, post)
        Swal.fire({   
            title: 'Terimakasih Telah melakukan konfirmasi!',
            icon: 'success',
            confirmButtonText: 'ok'
        })
        inputGuestName.current.value = ''
    }

  return (
    <>
        {/* Message Label */}
        <div className="flex justify-center text-center pt-20 py-5">
          <div className="flex-shrink-0 text-center">
              <h1 className="font-Birthstone text-5xl md:text-6xl">
                Konfirmasi Kehadiran
              </h1>
          </div>
        </div>

        <div className="flex justify-center pb-2">

            <div className="flex flex-col gap-y-4 w-3/4 md:w-2/4">
                <form
                    className="flex flex-col gap-y-4 text-gray-800"
                    name="messageForm"
                    onSubmit={addPost}
                >
                    <div className="row">
                        <div className="form-group flex flex-col gap-y-2 w-full">
                            <label
                                htmlFor="sender"
                                className="font-medium text-gray-700"
                            >
                                Nama
                            </label>
                            <input
                                ref={inputGuestName}
                                type="text"
                                name="name"
                                id="sender"
                                className="px-2 focus:ring-purple-300 focus:border-purple-300 flex-1 block w-full py-2 rounded-md sm:text-sm border-gray-300 bg-choco-100 shadow text-choco font-medium"
                                placeholder="Nama kamu..."
                                autoComplete="off"
                                onChange={onGuestChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group flex justify-start gap-y-2 w-full space-x-4">
                            <div className="font-Pacifico text-md font-semibold md:text-xl">
                                <input type="radio" name='is_hadir' value={1} onChange={onAttendChange} key="radio1" defaultChecked/> Hadir
                            </div>
                            <div className="font-Pacifico text-md font-semibold md:text-xl">
                                <input type="radio" name='is_hadir' value={0} onChange={onAttendChange} key="radio2"/> Tidak Hadir
                            </div>
                        </div>
                    </div>
                    <div className="row flex justify-end">
                        <button
                            id="submit-message"
                            className="bg-choco hover:bg-blue-200 rounded-lg shadow-lg text-black font-medium flex items-center justify-end gap-x-2 px-4 py-2"
                        >
                            <Icon
                                icon="icon-park-outline:send-email"
                                color="white"
                                width={18}
                            />
                            <span>Kirim</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default ConfirmSection