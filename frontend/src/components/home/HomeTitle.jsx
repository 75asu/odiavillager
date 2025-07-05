"use client"

import { PlaySvg } from "@/assets/Svgs.jsx";
import Link from "next/link";

const HomeTitle = () => {
    return (
        <section className="absolute px-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-[75%] left-1/2">
            <h2 className="font-semibold 2xl:text-5xl lg:text-4.5xl md:text-4xl text-2xl mb-4 text-white">
                Eii website bisayare kahaku kahibani
            </h2>

            <p className="max-w-xl mx-auto mb-5 text-xs text-c-grey-60 3xl:text-super-base lg:text-sm md:text-sm">
                only selective, cool content that represent modern film-making
            </p>

            <Link href="/movies">
                <button className="bg-c-red-45 text-white xl:px-6 md:px-4 px-3 xl:py-2.5 md:py-2 py-1.5 rounded-lg md:text-sm text-super-xs flex items-center gap-2 mx-auto">
                    <PlaySvg /> Start Watching Now
                </button>
            </Link>
        </section>
    );
};

export default HomeTitle;
