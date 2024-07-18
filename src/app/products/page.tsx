'use client'
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import { Button, Radio, Slider, Space } from 'antd';
import Navbar from "@/companents/navbar";
import Footer from "@/companents/footer";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { notification } from 'antd';
import type { RadioChangeEvent } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

type Data = {
    name: string,
    price: number,
    images: [
        string
    ],
    description: string,
    category: string,
    gender:string,
    color: string,
    key: string,
}

export default function Products(){
    const [getdata, setGetdata] = useState<Data[]>([]);
    const [isloading, setIsloading] = useState<boolean>(true);
    const [disabled] = useState(false);
    const [searchtext, setSearchtext] = useState('');
    const [updatesearchdata, setUpdatesearchdata] = useState<Data[]>([]);
    const [searchcategory, setSearchcategory] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [pricevalue, setPricevalue] = useState({ min: 0, max: 100 });

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const getDatas = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const datas = querySnapshot.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            }));
            setGetdata(datas as Data[]);
            setUpdatesearchdata(datas as Data[]);
            setIsloading(false);
        }
        getDatas();
    }, []);

    const handleFilter = () => {
        const filteredData = getdata.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchtext.toLowerCase()) &&
                item.category.toLowerCase().includes(searchcategory.toLowerCase()) &&
                item.price >= pricevalue.min || item.price <= pricevalue.max &&
                item.color == color
            );
        });
        setUpdatesearchdata(filteredData);
        if(updatesearchdata.length === 0) {
            const openNotificationWitherror = (type: NotificationType) => {
                api[type]({
                message: 'Bunday maxshulot mavjut emas',
                });
            }
            openNotificationWitherror('error');
        }
    }

    const onChange = (e: RadioChangeEvent) => {
        if(e.target.value == null){
            setSearchcategory('');
        } else {
            setSearchcategory(e.target.value);
        }
    };

    const hanleColor = (colors : string)=> {
        setColor(colors)
    }

    return (
        <div>
            <div className="w-full">
                <Navbar/>
                <div className="max-w-[1240px] mt-[70px] mx-auto flex gap-[20px]">
                    <div className="w-[295px] h-[100%]">
                        <div className="w-[295px] h-[100%] rounded-[20px] border">
                            <div className="w-[295px] h-[66px] flex justify-center items-center">
                                <input onChange={(e)=> {setSearchtext(e.target.value)}} className="outline-none w-[210px] text-black" type="text" placeholder="Search Filter"/>
                                <Image
                                    src="/filter.svg"
                                    alt="search"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="text-[#8A8989] border-t-[1px] pt-[40px] pb-[40px] w-[295px] h-[100%] flex flex-col gap-[18px] pl-[30px]">
                                {/* <Checkbox value={'men'} name="category" onChange={onChange}>Mens</Checkbox>
                                <Checkbox value={'women'} name="category" onChange={onChange}>Women</Checkbox>
                                <Checkbox value={'umumiy'} name="category" onChange={onChange}>Umumiy</Checkbox> */}
                                <Radio.Group onChange={onChange} value={searchcategory}>
                                    <Space direction="vertical">
                                        <Radio name="category" value={''}>Barchasi</Radio>
                                        <Radio name="category" value={'men'}>Mens</Radio>
                                        <Radio name="category" value={'women'}>Women</Radio>
                                        <Radio name="category" value={'umumiy'}>Umumiy</Radio>
                                    </Space>
                                </Radio.Group>
                                {/* <input type="" name="cate"/>
                                <input type="radio" name="cate"/>
                                <input type="radio" name="cate"/> */}
                            </div>
                            <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                                <div className="m-auto text-[#8A8989] flex justify-between items-center w-[230px] h-[66px]">
                                    <h1>Price</h1>
                                </div>
                            </div>
                            <div className="w-[295px] h-[156px] border-t-[1px] cursor-pointer">
                                <div className="m-auto text-[#8A8989] flex justify-between items-center w-[230px] h-[66px]">
                                    <Slider className="w-[295px]" onChange={(e)=> {setPricevalue({min: e[0] , max : e[1]})}} range defaultValue={[0, 100]} disabled={disabled} />
                                </div>
                                <div className="flex m-auto justify-between w-[230px]">
                                    <button className="border-2 hover:bg-[#f0f0f0] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">${pricevalue.min}</button>
                                    <button className="border-2 hover:bg-[#f0f0f0] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">${pricevalue.max}</button>
                                </div>
                            </div>
                            <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                                <div className="m-auto text-black flex justify-between items-center w-[230px] h-[66px]">
                                    <h1>Color</h1>
                                </div>
                            </div>
                            <div className="w-[295px] h-[100%] border-t-[1px] cursor-pointer">
                                <div className="m-auto text-black flex gap-[20px] pt-[40px] pb-[40px] justify-center flex-wrap items-center w-[230px] h-[100%]">
                                    {getdata?.map((item)=> (
                                        <Button key={item.key} onClick={()=> hanleColor(item.color)} style={{backgroundColor: item.color }} className="active:border rounded-[12px] w-[37px] h-[37px]"></Button>
                                    ))}
                                </div>
                                <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                                    <div className="m-auto text-black flex justify-between items-center w-[230px] h-[66px]">
                                        <h1 className="text-[#8A8989]">Size</h1>
                                    </div>
                                </div>
                                <div className="w-[295px] h-[100%] border-t-[1px]">
                                    <div className="m-auto flex-wrap gap-[20px] pt-[40px] pb-[40px] text-black flex justify-between items-center w-[230px]">
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>XXS</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>XL</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>XS</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>S</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>M</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>L</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>XXL</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>3XL</h1>
                                        </div>
                                        <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                            <h1>4XL</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center mb-[44px]">
                                    <Button onClick={()=> {handleFilter()}} className="mt-[32px] border-none bg-[#000000] text-white w-[210px] h-[52px] rounded-[62px] mx-auto">Apply Filter</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[20px]">
                        {isloading === true ? (
                            <div className="w-full h-[100vh] flex justify-center items-center">
                                <div className={'w-[80px] mx-[480px] h-[80px]'}>
                                    <Image
                                        src={"/loading.gif"}
                                        alt={"loading"}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                            </div>
                        ) : 
                        (updatesearchdata.length == 0 ? (
                            <>  
                                <div className="w-full h-[100vh] flex justify-center items-center">
                                    {contextHolder}
                                    <div className={' mx-[140px] h-[80px]'}>
                                        <h1 className="mx-auto text-red-400 text-[40px]">Bunday maxsulot mavjut emas</h1>
                                    </div>
                                </div>
                            </>
                            ) : (
                            updatesearchdata?.map((item : Data) => (
                                <div key={item.key} className="rounded-[12px] w-[290px] overflow-hidden h-[530px] bg-[#F0F0F0] text-center">
                                    <Link href={item.key}>
                                        <div className="flex flex-col gap-[8px]">
                                            <Image
                                                src={item.images[0]}
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
                                                <h3 className="font-medium text-[16px]">${item.price}</h3>
                                            </div>
                                            <h1>{item.name}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}