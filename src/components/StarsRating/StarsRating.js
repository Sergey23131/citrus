import './StarRate.css';
import StarRatings from "react-star-ratings";

export default function StarsRating({item}) {

    const {vote_average} = item;

    return (
        <div className="StarsRating">

            <StarRatings
                rating={vote_average / 2}
                starRatedColor="orange"
                starDimension="25px"
                starSpacing="5px"
            />

        </div>

    );
}
