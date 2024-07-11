import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { getExpDuration } from "../utils/auth"
import { Loader } from "../components/Loader"

export const Main = () => {
  const token = useLoaderData()
  const submit = useSubmit()
  const { state } = useNavigation()

  useEffect(() => {
    if (!token) {
      return
    }
    if (token === "TOKEN EXP") {
      window.alert("Your token has expired. Please Login again")
      submit(null, { action: "/logout", method: "POST" })
    }

    const duration = getExpDuration()

    setTimeout(() => {
      window.alert("Your token has expired. Please Login again")
      submit(null, { action: "/logout", method: "POST" })
    }, duration)
  }, [token, submit])
  return (
    <>
      <Navbar />
      {state === "loading" ? <Loader /> : <Outlet />}
    </>
  )
}
