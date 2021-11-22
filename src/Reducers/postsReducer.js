
const postsReducer = (state, action) => {
    if (action.type === "GET_ALL_POSTS") {
        return { ...state, posts: action.payload }
    }
    if (action.type === "CREATE_NEW_POST") {
        return { ...state, newPost: action.payload }
    }
    if (action.type === "DELETE_POST") {
        return { ...state, deletedPost: action.payload }
    }
    if (action.type === "UPDATE_LIKES") {
        console.log(action.payload);
        return { ...state, likedUsers: action.payload }
    }
}

export default postsReducer;
