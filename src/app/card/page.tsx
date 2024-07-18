'use client'

import Footer from "@/companents/footer"
import Navbar from "@/companents/navbar"
// import { db } from "@/firebase"
import { Button } from "antd"
// import { DocumentData, doc, getDoc } from "firebase/firestore"
import Image from "next/image"
// import { useEffect, useState } from "react"

export default function Card(){
    // const [getdata, setGetdata] = useState<[]>([])
    // const [usertoken] = useState(JSON.parse(localStorage.getItem('token') as string))

    // useEffect(() => {
    //     const docRef = doc(db, "cards", `${usertoken.uid}`)
    //     getDoc(docRef)
    //     .then((docdata)=>{
    //         setGetdata(docdata.data()?.usercartdata);
    //     })
    // }, [])

    // console.log(getdata);
    

    return (
        <div className="w-full">
            <Navbar/>
            <div className="max-w-[1240px] mx-auto">
                <h1 className="font-bold text-[40px] text-black tracking-[-3px] leading-[68px]">Your cart</h1>
                <div className="w-full">
                    <div className="max-w-[715px] py-[20px] gap-[24px] px-[24px] flex flex-col justify-center items-center border-[2px] rounded-[20px] mt-[24px]">
                        <div className="flex justify-between pb-[24px] border-b w-[667px]">
                            <div className="flex gap-[16px]">
                                <Image
                                    src={'/shirt.png'}
                                    alt="images"
                                    width={124}
                                    height={124}
                                />
                                <div className="flex flex-col gap-[5px]">
                                    <h1 className="font-bold text-[20px]">Gradient Graphic T-shirt</h1>
                                    <p className="text-[#F0F0F0]"><span className="text-[#000000]">Size: </span>Large</p>
                                    <p className="text-[#F0F0F0]"><span className="text-[#000000]">Color: </span>Black</p>
                                    <h1 className="font-bold text-[24px]">$145</h1>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <button className="bg-[#ffffff] items-end w-[24px] rounded-[4px]">
                                    <Image
                                        src={'/delete.svg'}
                                        alt="images"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <div className="flex items-center rounded-[62px]  justify-center h-[52px] bg-[#F0F0F0] gap-[15px] px-[3px]">
                                    <Button className="border-none bg-[#F0F0F0] text-[30px]">-</Button>
                                    <p>1</p>
                                    <Button className="border-none bg-[#F0F0F0] text-[30px]">+</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <Footer/>
        </div>
    )
}