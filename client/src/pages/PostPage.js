import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useState } from "react";

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`).then(response=>{
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            });
        });
    },[]);//no dependencies. That means use effect will only run when postPage mounts(renders)

    if(!postInfo) return '';

  return (
    <div className="post-page">
        <div className="image">
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>
        <h1>{postInfo.title}</h1>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}

export default PostPage