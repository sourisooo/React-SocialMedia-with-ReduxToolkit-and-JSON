import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Friend from "./Friend";
import WidgetWrapper from "./WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getLikes, setLikes } from "../state/State";
import { useEffect } from "react";
  
  const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    comments,
    likes,
  }) => {

    // console.log(postId,likes,postUserId,name,location,userPicturePath);

    const [isComments, setIsComments] = useState(false);

    const dispatch = useDispatch();

    const loggedInUserId = useSelector((state) => state.id);

    // console.log(loggedInUserId)

    const likesstate = useSelector((state) => state.likes);

    // console.log(likesstate); 

    const isLiked = (likesstate>0);

    let likeCount;
    
    if(typeof likes!="undefined"){likeCount=likes.length}else(likeCount=0);
  
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
  
    const patchLike = async () => {

      let liked = loggedInUserId+Math.floor(Math.random()*1000)+Math.floor(Math.random()*1000)+Math.floor(Math.random()*1000)+Math.floor(Math.random()*1000);
      
      let res = await axios.get('http://localhost:5100/datas/'+postId);let resdata=res.data.likes;console.log(resdata,res.status);dispatch(getLikes([{resdata}]));

 
        dispatch( setLikes( liked));

        let result =  await axios.patch('http://localhost:5100/datas/'+postId,{likes: likesstate })

        // console.log(likesstate,"inside POSTREQUEST"); 

     
    };
  
    // async function get() { let res = await axios.get('http://localhost:5100/datas/'+postId);let resdata=res.data;console.log(resdata);dispatch(getLikes([{resdata}]));}

    console.log(likesstate); 

    return (
      <WidgetWrapper m="2rem 0">
        <Friend
          friendId={postUserId}
          name={name}
          subtitle={location}
          userPicturePath={userPicturePath}
        />
        <Typography color={main} sx={{ mt: "1rem" }}>
          {description}
        </Typography>
        {picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg"}
          />
        )}
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem">
              <IconButton onClick={patchLike}>
                {isLiked ? (
                  <FavoriteOutlined sx={{ color: primary }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
              <Typography>{likeCount}</Typography>
            </FlexBetween>
  
            <FlexBetween gap="0.3rem">
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
              <Typography>{comments.length}</Typography>
            </FlexBetween>
          </FlexBetween>
  
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </FlexBetween>
        {isComments && (
          <Box mt="0.5rem">
            {comments.map((comment, i) => (
              <Box key={`${name}-${i}`}>
                <Divider />
                <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                  {comment}
                </Typography>
              </Box>
            ))}
            <Divider />
          </Box>
        )}
      </WidgetWrapper>
    );
  };
  
  export default PostWidget;