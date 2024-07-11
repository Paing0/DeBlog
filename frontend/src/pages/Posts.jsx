import { useLoaderData } from "react-router-dom"
import Post from "../components/Post"

const Posts = () => {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post post={post} key={post.id} />)}
    </>
  )
}
export default Posts

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts")
  if (!response.ok) {
    throw json(
      { message: "Server is down. Please come back later." },
      { status: response.status }
    )
  }
  const data = await response.json()
  return data.posts
}
