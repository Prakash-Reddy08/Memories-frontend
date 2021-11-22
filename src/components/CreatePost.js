import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { usePostsContext } from '../context/PostsContext'
import { useAuthContext } from '../context/UserContext';

const CreatePost = () => {
    const { createNewPost } = usePostsContext();
    const { UserData } = useAuthContext();
    const ref = useRef();
    const [postInfo, setPostInfo] = useState({
        title: '',
        message: '',
        tags: '',
        image: '',
        creatorName: UserData.fullName,
        creatorID: UserData.googleId,
    })

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file);
        setPostInfo(prevState => ({ ...prevState, image: base64 }));
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const reset = () => {
        ref.current.value = null;
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPostInfo(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewPost(postInfo);
        reset();
        setPostInfo({
            title: '',
            message: '',
            tags: '',
            image: '',
            creatorName: UserData.fullName,
            creatorID: UserData.googleId,
        })
        return
    }

    const handleClear = (e) => {
        e.preventDefault();
        reset();
        setPostInfo({
            title: '',
            message: '',
            tags: '',
            image: '',
            creatorName: UserData.fullName,
            creatorID: UserData.googleId,
        })
    }

    return (
        <Wrapper>
            <h2>Creating a Memory</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" maxLength="14" placeholder="Title" value={postInfo.title} required onChange={handleChange} />
                <textarea name="message" id="" rows="6" placeholder="Message" value={postInfo.message} required onChange={handleChange}></textarea>
                <input type="text" name="tags" id="" placeholder='Tags (coma seprated) (max tags 3)' value={postInfo.tags} required onChange={handleChange} />
                <input type="file" name="image" ref={ref} onChange={uploadImage} />
                <div className="buttons">
                    <button className='submit' type='submit'>SUBMIT</button>
                    <button className='clear' onClick={handleClear}>CLEAR</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 1rem;
box-shadow: 0px 4px 8px -1px rgba(77,75,75,0.55);
padding: 1.6rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h2{
    font-weight: 400;
    font-size: xx-large;
    width: 90%;
    line-height: 2;
    margin-bottom: 4px;
}
input{
    width: 90%;
    height: 2.4rem;
    padding: 4px;
    outline:none;
    font-size: 16px;
    font-weight: 400;
    padding:5px;
    margin-bottom: 0.8rem;
}
textarea{
    font-size: 16px;
    font-weight: 400;
    resize: none;
    width: 91%;
    margin-bottom: 0.98rem;
    padding: 4px;
}
.buttons{
    display: flex;
    flex-direction: column;
    .submit{
        margin-bottom: 9px;
        padding: 9px;
        background-color: #1B1212;
        color: #FFFFF0;
        border:1px solid #1B1212;
        border-radius: 4px;
        :hover{
            background-color: #FFFFF0;
            color: #1B1212;
        }
        cursor: pointer;
    }
    .clear{
        padding: 6px;
        background-color: #FFBF00;
        border:1px solid #FFBF00;
        border-radius: 4px;
        color: #1B1212;
        cursor: pointer;
        :hover{
            background-color: #FFFFF0;
            color: #1B1212;
        }
    }
}
`
export default CreatePost
