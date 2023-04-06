import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const navigate  = useNavigate();
    const handleGoBack =()=> {
        navigate(-1);
    }
    const {id,title,useId,body} = post;
    return (
        <div>
            <h3>Details About Your Post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;