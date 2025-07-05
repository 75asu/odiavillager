import Image from "next/image";

const HomeBanner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/images/ov-homepage.png"
                width={1920}
                height={1080}
                alt="Odia Villager banner"
                className="object-cover w-full h-full"
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
    );
};

export default HomeBanner;
