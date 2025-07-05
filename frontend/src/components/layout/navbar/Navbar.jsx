"use client";

import { MenuSvg, MultiStar, UserOIcon, UserPlusOIcon } from "@/assets/Svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarNav from "./NavbarNav";
import NotificationButton from "./NotificationButton";
import useUserStore from "@/stores/useUserStore";
// import SearchBox from "@/components/search/SearchBox";


const Navbar = () => {

    const user = useUserStore((state) => state.user);
    const loading = useUserStore((state) => state.loading);
    const pathname = usePathname();

    return (
        <header className={`py-5 ${pathname === "/" && "absolute"} top-0 right-0 z-30 w-full ${pathname == "/register" && "hidden"}`}>
            <div
                className="fixed w-full h-[5px] top-0 right-0 z-20
          3xl:bg-slate-500 2xl:bg-amber-400 xl:bg-stone-600 lg:bg-red-800 md:bg-orange-500 sm:bg-violet-500 bg-teal-400
        "></div>
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        {/* Animated logo */}
                        <div className="relative flex items-center justify-center w-12 h-12">
                        {/* Outer rotating dual ring */}
                        <div className="w-12 h-12 border-4 rounded-full border-t-red-600 border-b-white border-l-transparent border-r-transparent animate-spin" style={{ animationDuration: "1.5s" }}></div>

                        {/* Play icon with pulse */}
                        <div className="absolute animate-pulse">
                            <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-white"></div>
                        </div>
                        </div>

                        <span className="text-lg font-semibold text-white">Odia Villager</span>
                    </div>

                </Link>

                <NavbarNav pathname={pathname} />

                <div className="flex items-center gap-4">
                    {/* <SearchBox /> */}
                    {loading ? <div className="3xl:w-[5rem] w-[4.1rem] h-1" ></div> : !loading && user ?
                        <>
                            <Link href="/profile" className="relative">
                                <UserOIcon className="3xl:w-[2.4rem] 3xl:h-[2.4rem]" />
                                {user?.subscription?.status == "active" &&
                                    <MultiStar className="absolute -bottom-2.5 -left-2.5 w-[22px] h-[22px]" />
                                }
                            </Link>
                            <NotificationButton />
                        </> :
                        <Link href="/register?page=login">
                            <button className="focus:outline-none focus:border-none mx-2.5 md:inline hidden">
                                <UserPlusOIcon className="3xl:w-[2.4rem] 3xl:h-[2.4rem]" />
                            </button>
                        </Link>
                    }

                    <button
                        className="flex items-center justify-center border rounded-lg w-11 h-11 btn-black-10 border-c-black-15 md:hidden "
                    >
                        <MenuSvg />
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Navbar;