import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state/State";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import axios from "axios";
import { useState } from "react";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.id);  
  const user = useSelector((state) => state.user);
  const friendsstate = useSelector((state) => state.friends);
  const friends = [user.friends];
  let result = [];


  
  // console.log(id)
  // console.log(user)
  // console.log(typeof friends,friends)

  // console.log(friendId, name, subtitle, userPicturePath)

  // console.log(Object.getOwnPropertyNames(typeof user),Object.getOwnPropertyNames(user),Object.values(user))

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // const isFriend = friends.find((f) => {f.id === friendId,console.log(f.id === friendId, f.id,friendId  )});


  const patchFriend = async () => {

    const formData = {friendId:friendId, name:name, subtitle:subtitle, userPicturePath:userPicturePath};

    dispatch(setFriends( formData ));

     result =  await axios.patch('http://localhost:5000/datas/'+id,{friends:friendsstate })

};


// console.log(friends,friendsstate)




  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          // onClick={() => {
          //   navigate(`/profile/${friendId}`);
          //   navigate(0);
          // }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {/* {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )} */}


          <PersonAddOutlined sx={{ color: primaryDark }} />
      
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;