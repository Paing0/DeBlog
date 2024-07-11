import PostForm from "../components/PostForm"

const Create = () => {
  return (
    <>
      <PostForm
        header={"Create your post"}
        btnText={"Publish"}
        method={"POST"}
      />
    </>
  )
}

export default Create
