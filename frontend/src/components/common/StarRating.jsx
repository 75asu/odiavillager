import { HalfStarIcon, OutlineStarIcon, StarIcon } from "@/assets/Svgs";

const StarRating = ({ special, rating }) => {
    const safeRating = rating == null || isNaN(rating) ? 0 : parseFloat(rating);
    const formattedRating = Number.isInteger(safeRating) ? safeRating : parseFloat(safeRating.toFixed(1));

    const filledStars = Array(Math.floor(safeRating)).fill('filled');
    const halfStar = safeRating % 1 >= 0.5 ? ['half'] : [];
    const emptyStars = Array(10 - filledStars.length - halfStar.length).fill('empty');

    const starSizeClass = special
        ? "w-4 h-4 md:h-3 md:w-3"  // smaller size for special cards
        : "w-3 h-3";

    return (
        <div className="flex items-center gap-0.5 flex-wrap">
            {filledStars.map((_, index) => (
                <StarIcon key={`filled-${index}`}
                    className={`${starSizeClass} text-c-red-45`}
                />
            ))}
            {halfStar.map((_, index) => (
                <HalfStarIcon key={`half-${index}`}
                    className={`${starSizeClass} text-c-red-45`}
                />
            ))}
            {emptyStars.map((_, index) => (
                <OutlineStarIcon key={`empty-${index}`}
                    className={`${starSizeClass} fill-c-grey-60`}
                />
            ))}
            <span className={special ? "text-c-grey-60 max-md:text-super-base font-medium ml-1" : "text-c-grey-60 ml-1"}>
                {formattedRating}
            </span>
        </div>
    );
};

export default StarRating;
