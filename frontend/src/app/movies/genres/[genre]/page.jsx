"use client";

import { useEffect, useRef, useState } from "react";

import { SpinnerSvg } from "@/assets/Svgs";
import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import moviesData from "@/assets/movies.json"; // Adjust path if needed

const AllMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            setLoading(true);
            // Simulate API fetch delay
            setTimeout(() => {
                setMovies(moviesData);
                setLoading(false);
            }, 500); // Adjust/remove as needed

            effectRan.current = true;
        }
    }, []);

    return (
        <main className="container lg:py-20 py-12">
            <div className="relative border border-c-black-15 rounded-xl xl:pt-8 xl:pb-10 pt-3 pb-10 lg:px-10 md:px-6 px-4">

                <h1
                    className="inline-flex absolute md:top-[-22.5px] top-[-19px] 3xl:text-super-base xl:text-base font-medium
                     text-super-sm items-center tracking-wide bg-c-red-45 text-white rounded-md px-6 md:h-[45px] h-[38px]"
                >
                    All Movies
                </h1>

                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-10">
                    {!loading ? (
                        movies.length > 0 ? (
                            movies.map(({ _id, title, duration, thumbnail, views, rate }) => (
                                <MovieCard
                                    special
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    image={thumbnail}
                                    duration={duration}
                                    view={views}
                                    rate={rate}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center mt-10">
                                <h1 className="text-white">No Movies Found</h1>
                            </div>
                        )
                    ) : (
                        Array.from({ length: 12 }).map((_, index) => (
                            <MovieCardSkeleton special key={index} />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default AllMoviesPage;
