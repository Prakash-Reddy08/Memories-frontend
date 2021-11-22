import React, { useState } from 'react'
import styled from 'styled-components';
import moment from 'moment';
import Likes from './Likes';
import { useAuthContext } from '../context/UserContext';
import Delete from './Delete';
import image from '../utils/memories default.png'
import { usePostsContext } from '../context/PostsContext';

const Post = ({ post }) => {
    const { UserData } = useAuthContext();
    const { likedUsers, setLikes } = usePostsContext();
    const [users, setUsers] = useState([...likedUsers]);
    const handleLike = () => {
        const foundUser = users.find((id) => {
            return id === UserData.googleId;
        })
        if (foundUser) {
            const newLikes = [...users].filter((user) => {
                return user !== foundUser;
            });
            setUsers([...newLikes]);
        }

        if (!foundUser) {
            setUsers(prevState => [...prevState, UserData.googleId]);
        }
        setLikes(post._id, [...users]);
    }

    return (
        <Wrapper>
            <div key={post._id} className='post'>
                <div className="top-section">
                    <img src={post?.image ? post?.image : image} alt={post?.creatorName} />
                    <div className="details">
                        <h4>{post?.creatorName}</h4>
                        <p>{new moment(post?.time).fromNow()}</p>
                    </div>
                </div>
                <div className="middle-section">
                    <div className="tags">
                        {
                            post?.tags.map((tag, index) => {
                                return <span key={index}>
                                    {`#${tag} `}
                                </span>
                            })
                        }
                    </div>
                    <div className="title">
                        {post?.title}
                    </div>
                    <div className="desc">
                        {post?.message && post?.message?.substring(0, 100) + "..."}
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="like-button" onClick={handleLike}>
                        <Likes likes={post.likeCount} />
                    </div>
                    <div className="delete-button">
                        {UserData.googleId === post.creatorID && <Delete id={post._id} />}
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: #ffffff;
    /* max-width: 15rem; */
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: relative;
    min-width: 230px;
    max-width: 250px;
    box-shadow: 0px 4px 8px -1px rgba(77,75,75,0.75);
    .post{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* max-width: 15rem; */
        padding-bottom:1rem ;
        .top-section{
            position: relative;
            img{
                width: 100%;
                height: 130px;
                filter: brightness(50%)
                }
            .details{
                color:#FFFFEA;
                    position: absolute;
                    padding: 1.3rem;
                    top: 0;
                    opacity: 1;
                }
        }
        .middle-section{
            padding: 1rem;
            margin-bottom: 20px;
            .desc{
                max-width: 12rem;
                word-wrap: break-word;
            }
        }
        .bottom-section{
            /* position: absolute; */
            display: flex;
            padding: 15px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            /* bottom: 0; */
            left: 1.1rem;
            margin-bottom: 10px;
        }
    }

    .tags{
        span{
            text-transform: capitalize;
            padding: 2px;
            color: #777777;
            line-height: 2;
        }
    }
    .title{
        font-size: 32px;
        color: #202020;
        line-height: 2;
    }
    .desc{
        color: #777777;
    }

`

export default Post
