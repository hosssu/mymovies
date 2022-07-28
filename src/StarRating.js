import React from "react";
import { FaStar } from 'react-icons/fa'
import { useState, useEffect } from "react";


const StarRating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [show, setShow] = useState('none')

    useEffect(() => {
        window.localStorage.setItem('movieRating', JSON.stringify(rating))
    }, [rating])

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label
                        type='radio'
                        name='rating'
                        value={ratingValue}
                        onClick={() => {
                            setRating(ratingValue)
                        }}>
                        <FaStar class='star' color={ratingValue <= (hover || rating) ? '#f2d224' : '#444444'} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} size={50} />
                    </label>)
            })}
            <p>{rating} / 5</p>
            < FaStar class='star1' display={rating < 5 ? `${show}` : ''} color={rating < 6 ? '#ffffff' : '#f2d224'} onClick={() => setRating(6)} size={50} />
        </div>

    )
}

export default StarRating