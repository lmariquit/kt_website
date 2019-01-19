import axios from 'axios'

//ACTION TYPES
const GET_ALL_POSTS = 'GET_ALL_POSTS'

//INITIAL STATE
const defaultBlog = []

//ACTION CREATORS
const getAllPosts = posts => ({type: GET_ALL_POSTS, posts})

//THUNK ACTION CREATORS
export const fetchAllPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/blog')
    dispatch(getAllPosts(res.data))
  } catch (err) {
    console.err(
      err,
      'ERROR WITH FETCHALLPOSTS ACTION CREATOR --> client/store/blog.js'
    )
  }
}

//REDUCER
export default function(state = defaultBlog, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...action.posts]
    default:
      return state
  }
}
