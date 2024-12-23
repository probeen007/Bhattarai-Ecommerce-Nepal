"use client"

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //console.log(data);

        if (!data.searchTerm) return router.push('/');
        const url = queryString.stringifyUrl({
            url: '/',
            query: {
                searchTerm: data.searchTerm
            }
        }, { skipNull: true })

        router.push(url);
        reset();
    }

    return (
    <div className="flex justify-center items-center w-full">
        <div className="flex items-center w-full max-w-[200px] sm:max-w-[100px] md:max-w-[300px] lg:max-w-[350px]">
            <input
                {...register('searchTerm')}
                autoComplete="off"
                type="text"
                placeholder="Explore products..."
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-slate-500 flex-grow"
            />
            <button
                onClick={handleSubmit(onSubmit)}
                className="bg-purple-700 hover:opacity-80 text-white p-2 rounded-r-md"
            >
                Search
            </button>
        </div>
    </div>
    );
}

export default SearchBar;