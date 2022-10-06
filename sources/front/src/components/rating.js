import { FullStarIcon, HalfStarIcon, StarIcon } from "./icons"

const Rating = ({ value, text }) => {
    return <>
        <div>
            <div className="flex items-center space-x-1 text-[#ffd700]">
                <span>
                    {value >= 1 ? <FullStarIcon className="w-4 h-4" /> : value >= 0.5 ? <HalfStarIcon className="w-4 h-4" /> : <StarIcon className="w-4 h-4" />}
                </span>
                <span>
                    {value >= 2 ? <FullStarIcon className="w-4 h-4" /> : value >= 1.5 ? <HalfStarIcon className="w-4 h-4" /> : <StarIcon className="w-4 h-4" />}
                </span>
                <span>
                    {value >= 3 ? <FullStarIcon className="w-4 h-4" /> : value >= 2.5 ? <HalfStarIcon className="w-4 h-4" /> : <StarIcon className="w-4 h-4" />}
                </span>
                <span>
                    {value >= 4 ? <FullStarIcon className="w-4 h-4" /> : value >= 3.5 ? <HalfStarIcon className="w-4 h-4" /> : <StarIcon className="w-4 h-4" />}
                </span>
                <span>
                    {value >= 5 ? <FullStarIcon className="w-4 h-4" /> : value >= 4.5 ? <HalfStarIcon className="w-4 h-4" /> : <StarIcon className="w-4 h-4" />}
                </span>
                <span className="text-sm text-black">{text}</span>
            </div>
        </div>
    </>
}

export default Rating