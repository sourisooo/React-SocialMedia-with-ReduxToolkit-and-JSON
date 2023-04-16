import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  friends:[],
  likes:[],
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

      // if (state.friends) {
        state.friends.push(action.payload);
      // } else {
      //   console.error("user friends non-existent :(");
      // }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      console.log(Object.getOwnPropertyNames(action),Object.values(action),Object.getOwnPropertyNames( state),Object.values(state))

    },

    removeFriends: (state, action) => {

      // if (state.friends) {


      // const updatedFriends = state.friends.map(f => {
      //   if (f.friendId === action.payload.formData) return action.payload.formData;
      //   return f; 



      // });
      // state.friends = updatedFriends;

      state.friends= state.friends.filter(f => f==action.payload.formData);


      // state.friends.splice( state.friends.indexOf(action.payload.formData),1);

        console.log(state.friends.indexOf(action.payload.formData))

        // state.friends.map(e => {if(e==action.payload){ return action.payload} else {return e}});
      // } else {
      //   console.error("user friends non-existent :(");
      // }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      console.log(typeof (action.payload.formData),Object.getOwnPropertyNames(action.payload.formData),Object.values(action.payload.formData),Object.getOwnPropertyNames( state),Object.values(state))

    },
  
    

    getFriends: (state, action) => {

      // if (state.friends) {
        state.friends=(action.payload.at(0).resdata);
      // } else {
      //   console.error("user friends non-existent :(");
      // }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      console.log(Object.getOwnPropertyNames(action.payload.at(0).resdata),Object.values(action.payload.at(0).resdata),Object.getOwnPropertyNames( state),Object.values(state))

    },


      setLikes: (state, action) => {

        console.log("///////////////////////////////////////////////////////////////////////////////////////")
        console.log(Object.getOwnPropertyNames(action),Object.values(action),Object.getOwnPropertyNames( state),Object.values(state))

      // if (state.friends) {
        state.likes.push(action.payload);
      // } else {
      //   console.error("user friends non-existent :(");
      // }

   

    },


    getLikes: (state, action) => {

      // if (state.friends) {
        state.likes=(action.payload.at(0).resdata);
      // } else {
      //   console.error("user friends non-existent :(");
      // }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      console.log(Object.getOwnPropertyNames(action.payload.at(0).resdata),Object.values(action.payload.at(0).resdata),Object.getOwnPropertyNames( state),Object.values(state))

    },

    


    resetLikes: (state, action) => {

      // if (state.friends) {
        state.likes=0;
      // } else {
      //   console.error("user friends non-existent :(");
      // }

      console.log("///////////////////////////////////////////////////////////////////////////////////////")
      // console.log(Object.getOwnPropertyNames(action.payload.at(0).resdata.like),Object.values(action.payload.at(0).resdata.like),Object.getOwnPropertyNames( state),Object.values(state))

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

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost,setLikes,getLikes,resetLikes,getFriends,removeFriends } =
  authSlice.actions;
export default authSlice.reducer