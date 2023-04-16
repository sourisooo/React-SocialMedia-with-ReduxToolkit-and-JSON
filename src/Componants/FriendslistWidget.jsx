import { Box, Typography, useTheme } from "@mui/material";
import Friend from "./Friend";
import WidgetWrapper from "./WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../state/State";
import axios from "axios";


const FriendListWidget = (id) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();

  const friends = useSelector((state) => state.friends);

    console.log(friends)

    console.log(id,id.user.id)


  const patchFriends = async () => {

    let res = await axios.get('http://localhost:5000/datas/'+id.user.id);let resdata=res.data.friends;console.log(resdata,res.status);dispatch(getFriends([{resdata}]));

    console.log(friends)

  };


  console.log(friends)

  useEffect(() => {patchFriends();}, [id]);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((f) => (
          <Friend
            // key={friend._id}
            friendId={f.friendId}
            name={f.name}
            subtitle={f.subtitle}
            userPicturePath={f.userPicturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;