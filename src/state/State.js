import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  friends:[],
  id: null,
  token: null,
  posts: [],
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.friends) {
        state.friends.push(action.payload);
      } else {
        console.error("user friends non-existent :(");
      }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      console.log(state.friends,state.user, action, Object.getOwnPropertyNames(action),Object.values(action))

    },
    setPosts: (state, action) => { 

      state.posts.push(action.payload);
      // console.log(state.posts,state.user, action, Object.getOwnPropertyNames(action),Object.values(action))


    },
    setPost: (state, action) => {

      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.post.id) return action.payload.post;
        return post;
        
      });
      state.posts = updatedPosts;

      // console.log(state.posts,state.user, action, Object.getOwnPropertyNames(action),Object.values(action))

    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer