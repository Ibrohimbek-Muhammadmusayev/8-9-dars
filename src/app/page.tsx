import Footer from "@/companents/footer";
import Getproducts from "@/companents/getproducts";
import Navbar from "@/companents/navbar";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <header className="w-full bg-[#F2F0F1]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex justify-between mt-[60px]">
            <div className="mt-[50px]">
              <h1 className="font-bold text-[64px] text-black tracking-[-3px] leading-[68px]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
              <p className="text-[#00000061] mt-[32px]">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
              <Link href={'/products'}>
                <Button className="mt-[32px] border-none bg-[#000000] text-white w-[210px] h-[52px] rounded-[62px]">Shop Now</Button>
              </Link>
              <div className="flex mt-[40px] gap-[40px]">
                <div className="">
                  <h1 className="font-bold text-[40px]">200+</h1>
                  <p className="text-[16px] font-normal text-[#00000060]">International Brands</p>
                </div>
                <div className="w-[2px] h-[74px] bg-[#00000010]"></div>
                <div className="">
                  <h1 className="font-bold text-[40px]">2,000+</h1>
                  <p className="text-[16px] font-normal text-[#00000060]">High-Quality Products</p>
                </div>
                <div className="w-[2px] h-[74px] bg-[#00000010]"></div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[40px]">30,000+</h1>
                  <p className="text-[16px] font-normal text-[#00000060]">Happy Customers</p>
                </div>
              </div>
              <h1></h1>
            </div>
            <Image
                src='/Rectangle.png'
                alt="images"
                width={520}
                height={663}
              />
          </div>
        </div>
      </header>
      <div className="w-full bg-[#000000] h-[122px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex gap-[106px] py-[43px] justify-center">
            <Image
              src='/zara-logo.svg'
              alt="images"
              width={91}
              height={38}
            />
            <Image
              src='/gussi-logo.svg'
              alt="images"
              width={156}
              height={36}
            />
            <Image
              src='/prada-logo.svg'
              alt="images"
              width={194}
              height={32}
            />
          </div>
        </div>
      </div>
      <section className="max-w-[1240px] mx-auto mt-[72px]">
        <div className="mb-[55px] flex flex-col items-center">
          <h1 className="text-[48px] font-bold">NEW ARRIVALS</h1>
        </div>
        {/* card wrapper */}
        <div className="flex flex-wrap justify-center gap-[20px]">
          <Getproducts/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
