import { RiStarFill } from "@remixicon/react";

const StarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center -space-x-[2px]">
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <RiStarFill
            key={`full-${index}`}
            size={20}
            className="text-yellow-400 w-5 h-5"
          />
        ))}

      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <RiStarFill
            key={`empty-${index}`}
            size={20}
            className="text-gray-300 w-5 h-5"
          />
        ))}
    </div>
  );
};

export default StarRating;
