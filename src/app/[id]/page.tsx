import DatilesItem from "@/companents/datailesItem";
import Getproducts from "@/companents/getproducts";
import { db } from "@/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";

// type Datatype = {
//     name: string
//     price: number
//     description: string
//     images: string[],
//     category: string,
//     color: string,
//     gender: string,
// }

export default async function Post({ params }: { params: { id: string } }) {

    const docRef = doc(db, "products", `${params.id}`);
    const docSnap = await getDoc(docRef);
    const data: DocumentData | undefined = docSnap.data();
    

    return (
        <div className="w-full">
            <div className="mx-auto max-w-[1240px]">
                <div className="mx-auto max-w-[1240px]">
                    <div className="">
                        <DatilesItem data={data}/>
                    </div>
                </div>
                <div className="mt-[70px]">
                    <div className="flex justify-center mb-[55px] items-center">
                        <h1 className="font-bold text-[48px] text-black">You might also like</h1>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <Getproducts/>
                    </div>
                </div>
            </div>
        </div>
    )
}