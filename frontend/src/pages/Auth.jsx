import AuthForm from "../components/AuthForm"
import { json, redirect } from "react-router-dom"

const Auth = () => {
  return <AuthForm />
}

export default Auth

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get("mode") || "login"
  const data = await request.formData()

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Mode is incorrect" })
  }

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  }
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  })

  if (response.status === 422 || response.status === 401) {
    return response
  }
  if (!response.ok) {
    throw json({ message: "Something went wrong" }, { status: response.status })
  }
  const resData = await response.json()
  const authToken = resData.token

  localStorage.setItem("authToken", authToken)
  const expDate = new Date()
  expDate.setHours(expDate.getHours() + 1)
  localStorage.setItem("exp", expDate.toISOString())

  return redirect("/")
}
