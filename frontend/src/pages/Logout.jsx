export const loader = () => {
  localStorage.removeItem("authToken")
  localStorage.removeItem("exp")

  // I used this instead of redirect because there's a bug with redirect where if you logout from create-post, you return to "/" but the text for auth will still be "logout"
  window.location.href = "/"
  return null
}
