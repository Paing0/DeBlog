import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import uuid from "react-uuid"
import { getToken } from "../utils/auth"

const PostForm = ({ header, btnText, oldPostData, method }) => {
  const data = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  return (
    <section className="p-12">
      <Form method={method}>
        <div className="ml-[20vw] flex flex-col mb-5">
          <h1 className="mb-5 font-extrabold">{header}</h1>
          <label className="text-xl font-semibold mb-1" htmlFor="form-title">
            Title
          </label>
          {data && data.errors.title && (
            <ErrorList errors={data.errors.title} />
          )}
          <input
            className="text-lg p-2 w-[50vw] border-solid rounded-lg"
            type="text"
            id="form-title"
            name="title"
            placeholder="Enter your title"
            required
            defaultValue={oldPostData ? oldPostData.title : ""}
            autoFocus={true}
          />
        </div>
        <div className="ml-[20vw] flex flex-col mb-5">
          <label className="text-xl font-semibold mb-1" htmlFor="form-image">
            Image
          </label>
          {data && data.errors.image && (
            <ErrorList errors={data.errors.image} />
          )}
          <input
            className="text-lg p-2 w-[50vw] border-solid rounded-lg"
            type="url"
            id="form-image"
            name="image"
            placeholder="Enter image url"
            required
            defaultValue={oldPostData ? oldPostData.image : ""}
          />
        </div>
        <div className="ml-[20vw] flex flex-col mb-5">
          <label className="text-xl font-semibold mb-1" htmlFor="form-date">
            Date
          </label>
          {data && data.errors.date && <ErrorList errors={data.errors.date} />}
          <input
            className="text-lg p-2 w-[50vw] border-solid rounded-lg"
            type="date"
            id="form-date"
            name="date"
            required
            defaultValue={oldPostData ? oldPostData.date : ""}
          />
        </div>
        <div className="ml-[20vw] flex flex-col mb-5">
          <label
            className="text-xl font-semibold mb-1"
            htmlFor="form-description"
          >
            Description
          </label>
          {data && data.errors.description && (
            <ErrorList errors={data.errors.description} />
          )}
          <textarea
            className="text-lg p-2 w-[50vw] border-solid rounded-lg"
            id="form-description"
            name="description"
            placeholder="Enter your description"
            rows={5}
            required
            defaultValue={oldPostData ? oldPostData.description : ""}
          />
        </div>
        <div className="ml-[20vw]">
          <button className="border-none rounded-lg p-2.5 cursor-pointer text-lg bg-teal-700 text-white">
            {isSubmitting ? "Publishing" : btnText}
          </button>
        </div>
      </Form>
    </section>
  )
}

export default PostForm

export const action = async ({ request, params }) => {
  const data = await request.formData()
  const method = request.method
  const token = getToken()

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  }

  let url = "http://localhost:8080/posts"

  if (method === "PATCH") {
    const id = params.id
    url = `http://localhost:8080/posts/${id}`
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  })
  if (response.status === 422) {
    return response
  }
  if (!response.ok) {
    throw json({ status: response.status })
  }
  console.log(response)
  return redirect("/")
}
