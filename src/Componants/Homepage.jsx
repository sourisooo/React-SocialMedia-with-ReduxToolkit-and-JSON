import { Box, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
import UserWidget from "./UserWidget";
import MyPostWidget from "./MypostWidget";
import { useDispatch, useSelector } from "react-redux";
import PostsWidget from "./PostsWidget";
import FriendListWidget from "./FriendslistWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const id = useSelector((state) => state.id);
  const user = useSelector((state) => state.user);

console.log(user,id)


  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget id={id} user={user}/>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget id={id} user={user}/>
          <PostsWidget id={id} user={user}/>
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">

            <Box m="2rem 0" />
            <FriendListWidget id={id} user={user} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage