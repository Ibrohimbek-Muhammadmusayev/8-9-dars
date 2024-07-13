'use client'

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { type } from "os";
import { SetStateAction, useState } from "react";

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

export default async function  Getproducts() {
    const [getdata, setGetdata] = useState<data | []>([]);
    const querySnapshot = await getDocs(collection(db, "products"));
    // querySnapshot.forEach((doc) => {
        // setGetdata(doc.data());
    // console.log(doc.id, " => ", doc.data());
    // });
    return (
        <>
            <h1>sadasdasd</h1>
        </>
    )
}