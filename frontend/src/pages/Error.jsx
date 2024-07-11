import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  return (
    <div className="flex items-center justify-center flex-col mt-20">
      {error.status === 404 ? (
        <h1>404, Page not found</h1>
      ) : (
        <h1>
          {error.status + ", "} {error.data.message}
        </h1>
      )}
      <Link to={"/"}>
        <button className="text-lg border-solid p-2 mt-2 border-[#33a56]">
          Go back to home
        </button>
      </Link>
    </div>
  )
}

export default Error
