import React from 'react'
import { usePostsContext } from '../context/PostsContext'

const Delete = ({ id }) => {
    const { removePost } = usePostsContext();
    const handelDelete = (id) => {
        removePost(id)
    }
    return (
        <div>
            <button onClick={() => handelDelete(id)}>Delete</button>
        </div>
    )
}

export default Delete
