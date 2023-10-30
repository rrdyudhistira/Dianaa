import axios from 'axios'
import React, {FormEvent, useRef} from 'react'
import Router, { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2'

function FormSection({setPesan: setPesan}: any) {
    const apiEndPoint = 'https://rivaldi-annisa.dgtl-invite.com/public/api/v1/sampaikanPesan'
    const apiEndPointLocal = 'http://127.0.0.1:8000/api/v1/sampaikanPesan'
    const inputName = useRef<any>(null) 
    const inputPesan = useRef<any>(null) 
    const router = useRouter()

    const addPost = async (event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault()

        const {sender, pesan_id} = event.target as typeof event.target & {
            sender: { value: string }
            pesan_id: { value: string }
        }

        let namaPengirim, pesan
        namaPengirim = sender.value
        pesan = pesan_id.value
        const post = {
            nama:namaPengirim,
            pesan:pesan,
            parameter_name: router.query.to || "Tamu Undangan"
        }
        const res: any = await axios.post(apiEndPointLocal, post)
        setPesan(post ? res.data.data.id : false)
        inputName.current.value = ''
        inputPesan.current.value = ''

        Swal.fire({   
            title: 'Terimakasih telah mengirim pesan',
            icon: 'success',
            confirmButtonText: 'ok'
        })
    }
    
  return (
    <>
        {/* Message Label */}
        <div className="flex justify-center text-center px-10 py-5">
          <div className="flex-shrink-0 text-center">
              <h1 className="font-Birthstone text-5xl md:text-6xl">
                Sampaikan Pesan
              </h1>
          </div>
        </div>

        <div className="flex justify-center pb-24">

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
                                ref={inputName}
                                type="text"
                                name="nama"
                                id="sender"
                                className="px-2 focus:ring-purple-300 focus:border-purple-300 flex-1 block w-full py-2 rounded-md sm:text-sm border-gray-300 bg-choco-100 shadow text-choco font-medium"
                                placeholder="Nama kamu..."
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group flex flex-col gap-y-2 w-full">
                            <label
                                htmlFor="message"
                                className="font-medium text-gray-700"
                            >
                                Pesan
                            </label>
                            <textarea
                                ref={inputPesan}
                                name="pesan"
                                id="pesan_id"
                                rows={8}
                                className="px-2 py-2 focus:ring-purple-300 focus:border-purple-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-choco-100 shadow text-choco font-medium"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row flex justify-end">
                        <button
                            type="submit"
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

export default FormSection