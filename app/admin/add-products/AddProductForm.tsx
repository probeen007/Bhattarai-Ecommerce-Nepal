"use client"

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import app from "@/libs/firebase";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import { useCallback, useEffect, useState } from "react";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import axios from "axios";
import { useRouter } from "next/navigation";


export type ImageType = {
    color: string;
    colorCode: string;
    image: File | null
}

export type UploadedImageType = {
    color: string;
    colorCode: string;
    image: string;
}

const AddProducts = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [images, setImages] = useState<ImageType[] | null>();

    const [isProductCreated, setIsProductCreated] = useState(false);

    const router = useRouter();

    //Test purpose
    //console.log('image:', images)

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            description: '',
            brand: '',
            category: '',
            inStock: false,
            images: [],
            price:'',
        },
    });

    useEffect(() => {
        setCustomValue("images", images);
    }, [images]);

    useEffect(() => {
        if (isProductCreated) {
            reset();
            setImages(null);
            setIsProductCreated(false);
        }
    }, [isProductCreated])

    

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Product Data", data);
        //upload images to firebase storage
        //save product to mongodb
        setIsLoading(true);
        let uploadedImage: UploadedImageType[] = [];

        if (!data.category) {
            setIsLoading(false);
            return toast.error('Category is not selected')
        }
        if (!data.images || data.images.length === 0) {
            setIsLoading(false);
            return toast.error('Select a image')
        }

        const handleImageUploads = async () => {
            toast("Processing product to shop...");

            try {
                for (const item of data.images) {
                    if (item.image) {
                        const fileName = new Date().getTime() + '-' + item.image.name;
                        const storage = getStorage(app)
                        const storageRef = ref(storage, `products/${fileName}`);
                        const uploadTask = uploadBytesResumable(storageRef, item.image);

                        await new Promise<void>((resolve, reject) => {
                            uploadTask.on('state_changed', (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log('upload is' + progress + '%done');
                                switch (snapshot.state) {
                                    case 'paused':
                                        console.log('Upload process is paused');
                                        break;
                                    case 'running':
                                        console.log('Upload is resumed and running')
                                        break;
                                }
                            },
                                (error) => {
                                    console.log('Error uploading image', error)
                                    reject(error)
                                },
                                () => {
                                    // Handle successful uploads on complete
                                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                                        uploadedImage.push({
                                            ...item,
                                            image: downloadURL

                                        })

                                        console.log('File available at', downloadURL);
                                        resolve();
                                    }
                                    ).catch((error) => {
                                        console.log('error getting download url', error);
                                        reject(error)
                                    });
                                }
                            )
                        })
                    }
                }
            } catch (error) {
                setIsLoading(false);
                console.log('error handling image upload', error);
                return toast.error(" Error handling image");
            }
        };
        await handleImageUploads();
        const productData = { ...data, images: uploadedImage }

        axios.post('/api/product', productData).then(() => {
            toast.success('Product added to shop');
            setIsProductCreated(true);
            router.refresh();
        }).catch((error) => {
            toast.error("! Somthing went wrong while saving product to database")
        }).finally(() => {
            setIsLoading(false);
        });

        //test purposes
        //console.log(productData);

    };

    const category = watch("category");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const addImageToState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if (!prev) {
                return [value];
            }
            return [...prev, value];
        });
    }, []);
    const removeImageFormState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if (prev) {
                const filteredImages = prev.filter((item) => item.color !== value.color);
                return filteredImages;
            }
            return prev
        })
    }, []);

    return (
        <>
            <Heading title="Add a Product" />
            <Input id="name" label="Product name"
                disabled={isLoading} register={register} errors={errors} required />

            <Input id="price" label="Price"
                disabled={isLoading} register={register} errors={errors} type="number" required />

            <Input id="brand" label="Product brand"
                disabled={isLoading} register={register} errors={errors} required />

            <TextArea id="description" label="Product details here..."
                disabled={isLoading} register={register} errors={errors} required />

            <CustomCheckBox id="inStock" register={register} label="Product Available" disabled={false} />

            <div className="w-full font-medium">
                <div className="mb-2 font-semibold"> Categories</div>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-3 max-h[50vh]
                overflow-y-auto">
                    {categories.map((item) => {
                        if (item.label === 'All') {
                            return null;
                        }
                        return <div key={item.label} className="col-span">
                            <CategoryInput onClick={(category) => setCustomValue('category', category)}
                                selected={category === item.label}
                                label={item.label}
                                icon={item.icon}
                            />

                        </div>
                    }

                    )}
                </div>
            </div>

            <div className="w-full flex flex-col flex-wrap gap-4">
                <div>
                    <div className="font-bold">
                        Select the available colour for the product
                    </div>

                    <div className="text-sm">
                        * You must upload an image for each of the colour selected otherwise your color selection will be ignored
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {colors.map((item, index) => {
                        return (<SelectColor key={index} item={item}
                            addImageToState={addImageToState} removeImageFormState={removeImageFormState}
                            isProductCreated={isProductCreated} />
                        );
                    })}
                </div>
            </div>
            <Button label={isLoading ? 'Loading...' : 'Add Product'} OnClick={handleSubmit(onSubmit)} />
        </>
    );
}

export default AddProducts;