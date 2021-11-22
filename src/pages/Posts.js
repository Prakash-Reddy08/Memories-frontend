import React from 'react'
import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import SearchPost from '../components/SearchPost';
import { usePostsContext } from '../context/PostsContext';
import { useAuthContext } from '../context/UserContext'

const Posts = () => {
    const { UserData, isLoading } = useAuthContext();
    const { posts } = usePostsContext();
    if (isLoading) {
        return <Loading />
    }
    return (
        <Wrapper>
            <div className='nav'>
                <Navbar userData={UserData} />
            </div>
            <main>
                <div className="posts">
                    {
                        [...posts].reverse().map((post) => {
                            return <Post key={post._id} post={post} />
                        })
                    }
                </div>
                <div className="form">
                    <SearchPost />
                    <CreatePost />
                    <Pagination />
                </div>
            </main>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .nav{
        width: 100%;
    }
    main{
        /* display: grid;
        grid-template-columns: 1fr 0.3fr;
        grid-gap: 0.8rem; */
        display: flex;
        flex-direction: row;
        margin: 3rem;
    }
    .posts{
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        min-width: 75%;
    }
    .form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: fit-content;
    }
    @media (max-width:700px){
        main{
            display: flex;
            flex-wrap: wrap-reverse;
            gap:1rem;
            .posts{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    }
`

export default Posts
