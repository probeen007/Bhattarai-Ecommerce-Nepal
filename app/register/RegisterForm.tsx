"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFormProps {
    currentUser: SafeUser | null
}
const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push("/cart");
            router.refresh();
        }

    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data).then(() => {
            toast.success('Account initialization successful');

            signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            }).then((callback) => {
                if (callback?.ok) {
                    router.push("/cart");
                    router.refresh();
                    toast.success("Logged In");
                } else if (callback?.error) {
                    toast.error(callback.error);
                }
            });
        }).catch(() => toast.error("Something went wrong")).finally(() => {
            setIsLoading(false);
        });
    };


    if (currentUser) {
        return <p className="text-center">Looks like You are already logged in ...</p>
    }
    return (
        <>
            <Heading title="Explore Bhattarai Ecommerce" />
            <Heading title="Sign up" />
            <Button outline label="Sign up With Google" icon={AiFillGoogleCircle} OnClick={() => {signIn("google") }} />
            <hr className="bg-slate-300 w-full h-px" />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
            <Button label={isLoading ? "Loading" : "Sign up"} OnClick={handleSubmit(onSubmit)} />
            <p className="text-sm">
                Already have an account?{" "}
                <Link className="underline" href="/login">Log in</Link>
            </p>
        </>
    );
}

export default RegisterForm;


