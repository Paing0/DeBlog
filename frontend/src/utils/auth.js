import { redirect } from "react-router-dom"

export const getExpDuration = () => {
  const expTime = localStorage.getItem("exp")
  const expTimeInMil = new Date(expTime)
  const currentTime = new Date()
  const duration = expTimeInMil - currentTime

  return duration
}

export const getToken = () => {
  const token = localStorage.getItem("authToken")
  if (!token) {
    return null
  }
  const duration = getExpDuration()
  if (duration < 0) {
    return "TOKEN EXP"
  }
  return token
}

export const tokenLoader = () => {
  return getToken()
}

export const checkTokenLoader = () => {
  const token = getToken()
  if (!token) {
    return redirect("/auth?mode=login")
  }
  return token
}
