'use client'
import { auth } from "@/firebase";
import { Button, Card, Form, Input } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { notification } from 'antd';
import { useRouter } from "next/navigation";
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function Register() {

    const [api, contextHolder] = notification.useNotification();

    const userdata = {
        email: '',
        password: '',
        username: '',
        photourl: '',
    }

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
        message: 'Tabriklaymiz siz royxatdan otdingiz!',
        });
    };

    const router = useRouter();

    const onFinish  = async () => {
        await createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.localStorage.setItem('token', `${user}`)
            openNotificationWithIcon('success')
            router.replace('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const openNotificationWitherror = (type: NotificationType) => {
                api[type]({
                message: errorMessage,
                });
            };
            openNotificationWitherror('error')
        });
    };

    return (
        <>
            <div className="w-full">
                <div className="p-[20px] max-w-[400px] mx-auto">
                    <Card className="bg-slate-200" title="Signin">
                        <Form 
                            onFinish={onFinish}
                        >
                            <Form.Item name={'Email'}>
                                <Input onChange={(e)=> userdata.email = e.target.value} type="email" required placeholder="Email"/>
                            </Form.Item>
                            <Form.Item name={'Password'}>
                                <Input onChange={(e)=> userdata.password = e.target.value} type="password" required placeholder="Password"/>
                            </Form.Item>
                            <Form.Item name={'UserName'}>
                                <Input onChange={(e)=> userdata.username = e.target.value} type="text" required placeholder="UserName"/>
                            </Form.Item>
                            <Form.Item name={'Photourl'}>
                                <Input onChange={(e)=> userdata.photourl = e.target.value} type="text" placeholder="Photo Url"/>
                            </Form.Item>
                            <div className="flex gap-[20px] items-center justify-center">
                                <p className="text-[20px] text-slate-400">Login account</p>
                                <Link className="text-blue-500 text-[18px]" href={'/login'}>Login</Link>
                            </div>
                            {contextHolder}
                            <Button htmlType="submit" className="w-[300px] mx-auto h-[42px] items-center mt-[20px] bg-white border text-black text-[20px] rounded-[62px]">Login</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </>
    )
}