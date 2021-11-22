import React from 'react'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
const Likes = ({ likes }) => {
    return (
        <div>
            {likes?.length === null ? <AiOutlineLike /> : <AiFillLike />}
            {likes.length} Likes
        </div>
    )
}

export default Likes
