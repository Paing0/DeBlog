import { redirect, useRouteLoaderData, json } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { PostDetails } from "../components/PostDetails"
import { getToken } from "../utils/auth"

const Details = () => {
  const post = useRouteLoaderData("post-detail")

  return (
    <>
      <div className="flex">
        <PostDetails post={post} />
        <Sidebar />
      </div>
    </>
  )
}

export default Details

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `${process.env.REACT_APP_DOMAIN}/posts/${params.id}`
  )
  if (!response.ok) {
    throw json(
      { message: "Cannot get data or post does not exist" },
      { status: response.status }
    )
  }
  const data = await response.json()
  return data.post
}

export const action = async ({ request, params }) => {
  const token = getToken()
  const response = await fetch(
    `${dotenv.process.REACT_APP_DOMAIN}/posts/${params.id}`,
    {
      method: request.method,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
  if (!response.ok) {
    throw json(
      { message: "Cannot delete post. Please try again." },
      { status: response.status }
    )
  }
  return redirect("/")
}
