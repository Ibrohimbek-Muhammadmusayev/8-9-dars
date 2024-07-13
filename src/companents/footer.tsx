import { Button } from "antd";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#F0F0F0] mt-[140px] text-white">
            <div className="max-w-[1240px] h-[500px] relative mx-auto">
                <div className="w-full bg-[#000000] rounded-[20px] absolute top-[-90px] px-[64px] items-center flex justify-between h-[180px]">
                    <h1 className="font-bold text-[40px] text-white tracking-[1px] leading-[68px]">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
                    <div className="flex flex-col gap-[14px]">
                        <div className="flex gap-[12px] w-[350px] bg-white rounded-[62px] pl-[16px] h-[46px]">
                            <Image
                                src="mail.svg"
                                alt="logo"
                                width={24}
                                height={24}
                            />
                            <input type="text" className="outline-none text-[18px] text-black rounded-[62px] border-none" placeholder="Enter your email address" />
                        </div>
                        <Button className="text-[16px] font-medium w-[350px] h-[46px] rounded-[62px] border-none">Subscribe to Newsletter</Button>
                    </div>
                </div>
                <div className="flex justify-between pt-[140px]">
                    <div className="flex gap-[35px] flex-col">
                        <Image
                            src="SHOP-logo.svg"
                            alt="logo"
                            width={160}
                            height={22}
                        />
                        <p className="text-[#00000060] text-[14px] font-normal">We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
                        <Image
                            src="Social.svg"
                            alt="logo"
                            width={160}
                            height={22}
                        />
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="text-[16px] text-black">Company</h1>
                        <p className="text-[#00000060] text-[14px] font-normal">About</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Features</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Works</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Career</p>
                    </div>
                    <div className="flex flex-col gap-[25px]">  
                        <h1 className="text-[16px] text-black">Help</h1>
                        <p className="text-[#00000060] text-[14px] font-normal">Customer Support</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Delivery Details</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Terms & Conditions</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Privacy Policy</p>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="text-[16px] text-black">FAQ</h1>
                        <p className="text-[#00000060] text-[14px] font-normal">Account</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Manage Deliveries</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Orders</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Payments</p>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="text-[16px] text-black">Company</h1>
                        <p className="text-[#00000060] text-[14px] font-normal">Free eBooks</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Development Tutorial</p>
                        <p className="text-[#00000060] text-[14px] font-normal">How to - Blog</p>
                        <p className="text-[#00000060] text-[14px] font-normal">Youtube Playlist</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}