import Image from "next/image";

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-xl shadow-lg overflow-hidden">
            <div className="px-4 py-6 flex flex-col gap-6 items-center md:flex-row md:justify-between">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 transition-transform duration-300 transform hover:scale-105">
                        Bhattarai Ecommerce
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-2 opacity-80">
                        Enjoy Our Online Product And Services
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold animate-pulse">
                        Get Exclusive Discounts and Many More
                    </p>
                </div>

                {/* Image */}
                <div className="w-full sm:w-2/3 md:w-1/3 relative aspect-video">
                    <Image
                        src="/banner.png"
                        fill
                        alt="Banner"
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>


    );
};

export default HomeBanner;
