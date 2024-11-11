"use client"

import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import router, { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps {
    currentUser: SafeUser | null
}


const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {

    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {

            email: "",
            password: "",
        },
    });

    const router = useRouter()

    useEffect(() => {
        if(currentUser){
            router.push("/cart");
            router.refresh();
        }
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', { ...data, redirect: false }).then((callback) => {
            setIsLoading(false)
            if (callback?.ok) {
                router.push("/cart");
                router.refresh();
                toast.success("Logged In");
            } else if (callback?.error) {
                toast.error(callback.error);
            }
        });
    };

    if (currentUser) {
        return <p className="text-center">Looks like You are already logged in ...</p>
    }


    return (
        <>

            <Heading title="Login" />
            <Button outline label="Sign in With Google" icon={AiFillGoogleCircle} OnClick={() => {signIn("google") }} />
            <hr className="bg-slate-300 w-full h-px" />

            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
            <Button label={isLoading ? "Loading" : 'Sign in'} OnClick={handleSubmit(onSubmit)} />
            <p className="text-sm">
                Don't have an account? {""}
                <Link className="underline" href="/register">Sign up</Link>
            </p>

        </>
    );
}

export default LoginForm;