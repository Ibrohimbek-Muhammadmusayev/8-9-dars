'use client'
import { Button, Space, notification } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react"
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/firebase";
import Link from "next/link";

type Datatype = {
    name: string
    price: number
    description: string
    images: string[],
    category: string,
    color: string,
    gender: string,
}

type NotificationType = 'success';

export default function DatilesItem(data: any) {
    const [usertoken] = useState(JSON.parse(window.localStorage.getItem('token') as string));
    const [getdata] = useState<Datatype>(data?.data);
    const [usercartdata, setUsercartdata] = useState({})
    const [count, setCount] = useState(1);
    
    useEffect(()=>{
        setUsercartdata({
            ...getdata,
            count: count,
        })
    }, [count, getdata])
    const addlocaldata = ()=> {
        setDoc(doc(db, "cards", `${usertoken.uid}`), {
            // ...usercartdata,
            usercartdata
        });
        openNotificationWithIcon('success')
    }

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
        message: 'Maxsulot muvaffaqiyatli qoshildi 👋',
        description:
            'Maxsulot muvaffaqiyatli qoshildi',
        });
    };
    
    return (
        <>
            <div className="w-full">
                <div className="flex gap-[40px]">
                    <div className="flex gap-[14px]">
                        <div className="flex flex-col gap-[14px]">
                            <Image
                                src={getdata?.images[0]}
                                alt="Picture of the author"
                                width={152}
                                height={167}
                            />
                            <Image
                                src={getdata?.images[0]}
                                alt="Picture of the author"
                                width={152}
                                height={167}
                            />    
                            <Image
                                src={getdata?.images[0]}
                                alt="Picture of the author"
                                width={152}
                                height={167}
                            />
                        </div>
                        <Image
                            src={getdata?.images[0]}
                            alt="Picture of the author"
                            width={444}
                            height={500}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[40px] font-bold">{getdata?.name}</h1>
                        <div className="flex gap-[40px] items-center">
                            <div className="flex gap-[14px]">
                                <Image
                                    src="/rating.svg"
                                    alt="images"
                                    width={140}
                                    height={25}
                                />
                                <p>4.5/5</p>
                            </div>
                            <h1 className="text-[40px] font-bold">${getdata?.price}</h1>
                        </div>
                        <h1>categories: <span className="text-[20px]">{getdata.category}</span></h1>
                        <p className="mt-[24px]">Select Colors</p>
                        <div className="flex gap-[16px] mt-[16px]">
                            <button className="w-[45px] h-[45px] rounded-full" style={{backgroundColor: `${getdata?.color}`}}></button>
                            {/* {/* <button className="w-[45px] h-[45px] rounded-full bg-[#298d9d]"></button> */}
                            <button className="w-[45px] h-[45px] rounded-full bg-[#000000]"></button>
                        </div>
                        <p className="mt-[24px]">Choose Size</p>
                        <div className="flex mt-[16px] gap-[12px]">
                            <Button>Small</Button>
                            <Button>Medium</Button>
                            <Button>Large</Button>
                            <Button>X-Large</Button>
                        </div>
                        <div className="mt-[40px] flex gap-[20px] items-center ">
                            <div className="rounded-[62px] flex w-[170px] justify-center items-center h-[52px] bg-[#F0F0F0] gap-[15px]">
                            <Button disabled={count === 1} onClick={() => setCount(count - 1)} className="border-none bg-[#F0F0F0] text-[30px]">-</Button>
                            <p>{count}</p>
                            <Button disabled={count === 10} onClick={() => setCount(count + 1)} className="border-none bg-[#F0F0F0] text-[30px]">+</Button>
                            </div>
                            {contextHolder}
                            {!usertoken ? (
                                <Space>
                                    <Link href={'/register'}>
                                        <Button className="w-[210px] hover:bg-slate-700 h-[52px] bg-black text-white rounded-[62px]">Register</Button>
                                    </Link>
                                </Space>
                            ) : (
                                <Space>
                                    <Button onClick={() => addlocaldata()} className="w-[210px] hover:bg-slate-700 h-[52px] bg-black text-white rounded-[62px]">Add to Cart</Button>
                                </Space>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}