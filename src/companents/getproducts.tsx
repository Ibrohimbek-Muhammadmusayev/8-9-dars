'use client'

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type data = {
    name: string,
    price: number,
    images: [
        string
    ],
    description: string,
    category: string,
    gender:string,
    color: string,
}

export default function  Getproducts() {
    const [getdata, setGetdata] = useState<[] | undefined>([]);
    useEffect(() => {
        const getDatas = ()=>{
            const querySnapshot = getDocs(collection(db, "products"))
            .then((querySnapshot) => {
                const datas = querySnapshot.docs.map((doc) => doc.data());
                // console.log(datas)
                setGetdata(datas as []);
            })
        }
        getDatas()
        
    }, [])
    
    return (
        <>
            {getdata?.map((item : {data : data}, index: number) => (
                <div key={index} className="rounded-[12px] w-[290px] overflow-hidden h-[530px] bg-[#F0F0F0] text-center">
                    <Link href={'/'}>
                        <div className="flex flex-col gap-[8px]">
                            <Image
                                src={item.data.images[0]}
                                alt="images"
                                width={295}
                                height={300}
                                />
                            <div className="flex justify-between px-[8px]">
                                <div className="flex gap-[6px]">
                                    <Image
                                        src='/rating.svg'
                                        alt="images"
                                        width={150}
                                        height={19}
                                    />
                                    <p>4.5</p>
                                </div>
                                <h3 className="font-medium text-[16px]">${item.data.price}</h3>
                            </div>
                            <h1>{item.data.name}</h1>
                            <p>{item.data.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}