import Image from 'next/image';

export default function Loading(){
    return (
        <div className="w-full flex items-center h-[100vh] justify-center">
            <div className={'mx-auto  w-[80px] h-[80px]'}>
                <Image
                    src={"/loading.gif"}
                    alt={"loading"}
                    width={80}
                    height={80}
                />
            </div>
        </div>
    )
}