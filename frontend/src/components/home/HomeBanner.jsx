import Image from "next/image";

const HomeBanner = () => {
    return (
        <div className="relative w-full h-screen">
            <Image src="/images/home-page-banner.png" width={1920} height={857} alt="streamVibe banner" className="object-cover w-full h-full" />
            <div className="w-full h-[10vh] bg-gradient-to-t from-c-black to-c-black/0 absolute bottom-0"></div>
        </div>
    );
}

export default HomeBanner;