import React, { useContext, useEffect, useReducer } from "react";
import { createPost, deletePost, getAllPosts, updateLikes } from "../api/Posts";
import postsReducer from "../Reducers/postsReducer";
import { useAuthContext } from "./UserContext";

const PostsContext = React.createContext();


const initialState = {
    posts: [],
    newPost: {
        title: "",
        message: "",
        tags: '',
        image: "",
        creatorName: '',
        creatorID: '',
    },
    deletedPost: '',
    likedUsers: [],
}

export const PostsProvider = ({ children }) => {
    const { setIsLoading } = useAuthContext();
    const [state, dispatch] = useReducer(postsReducer, initialState);

    const getPosts = async () => {
        const posts = await getAllPosts();
        dispatch({ type: "GET_ALL_POSTS", payload: posts.data })
        setIsLoading(false);
    }

    const createNewPost = async (post) => {
        await createPost(post);
        dispatch({ type: "CREATE_NEW_POST", payload: post });
    }
    const removePost = async (id) => {
        const post = await deletePost(id);
        dispatch({ type: "DELETE_POST", payload: post });
    }

    const setLikes = async (postId, users) => {
        const update = await updateLikes(postId, users);
        console.log(state.likedUsers);
        dispatch({ type: "UPDATE_LIKES", payload: update.data.likeCount });
    }

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.newPost, state.deletedPost, state.likedUsers])

    return (
        <PostsContext.Provider
            value={{
                ...state,
                createNewPost,
                removePost,
                setLikes
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}

export const usePostsContext = () => {
    return useContext(PostsContext);
}