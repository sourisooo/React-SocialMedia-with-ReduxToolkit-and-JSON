import { useEffect } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPosts } from "../state/State";

import PostWidget from "./PostWidget";
import axios from "axios";


const PostsWidget = (id) => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts)

  let [data,setData] = useState([]);
  let test = [];
  let res = [];
  let info = "";
  let dat = [];


// console.log(id,id.user)

// console.log(Object.getOwnPropertyNames(id),Object.values(id))

// console.log("insidepostswidget")

// console.log(posts, typeof posts)

// console.log(Object.getOwnPropertyNames(posts),Object.values(posts))


async function getPosts() {

  console.log("inside getposts")

   res = await axios.get('http://localhost:5100/datas/');

  // setdata(res.data);
    // console.log(res.data)

     test=res.data;

      test.forEach( e => 


        
        {

          // console.log(e);
info={description:e.description,id:e.id,like:e.like,picture:e.picture,userId:e.userId};

  dat.push(e) ; 
  dispatch(setPosts(e));
  
  setData(dat);
  // console.log(data);
  // console.log(posts);


}); }

      // console.log(info)

      //  console.log(data)               

      console.log(posts);

  useEffect(() => {getPosts()}, []);


  if (!posts) {
    return null;
  }



  return (
    <div>
    "test"
   
    <>
      { posts.length > 0 && posts.map(
        (e) => (
          <PostWidget
            // key={_id}
            postId={e.id}
            postUserId={e.userId.user.id}
            name={`${e.userId.user.firstName} ${e.userId.user.lastName}`}
            description={e.description}
            location={e.userId.user.location}
            picturePath={e.picture}
            userPicturePath={e.userId.user.picturePath}
            likes={e.like}
            comments={e.description}
          />
        )
      )}
    </>
     </div>
  );
};

export default PostsWidget