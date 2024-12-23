"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";



interface CategoryProps {
    label: string;
    icon: IconType;
    selected?: boolean;

}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {

    const router = useRouter();
    const params = useSearchParams();
    const handleClick = useCallback(() => {
        if (label === 'All') {
            router.push('/');
        } else {
            let currentQuery = {};

            if (params) {
                currentQuery = queryString.parse(params.toString())
            }

            const updatedQuery: any = {
                ...currentQuery,
                category: label
            }

            const url = queryString.stringifyUrl(
                {
                    url: '/',
                    query: updatedQuery
                },
                {
                    skipNull: true
                }
            )

            router.push(url);

        }
    }, [label, params, router])

    return (
        <div
            onClick={handleClick}
            className={`flex items-center gap-2 px-3 py-2 
            rounded-md shadow-sm transition-all duration-200 ease-in-out cursor-pointer 
            ${selected ? 'bg-slate-200 border-b-2 border-slate-900 text-slate-900' : 'bg-white border-b-2 border-transparent text-slate-500 hover:shadow-md hover:border-slate-400'}`}
            style={{ minWidth: '150px', height: '50px' }}
        >
            {/* Icon Container */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                <Icon size={20} className={selected ? 'text-slate-900' : 'text-slate-500'} />
            </div>
            {/* Label */}
            <div
                className="font-medium text-sm tracking-wide truncate"
                style={{ maxWidth: '100px' }}
                title={label}  // Show full text on hover
            >
                {label}
            </div>
        </div>





    );
}

export default Category;