import { NavLink, useRouteLoaderData } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const isToken = useRouteLoaderData("root")

  return (
    <nav className="w-full h-12 flex items-center font-[Josefin-Sans]">
      <div className="w-1/4 flex justify-center items-center text-2xl">
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="mr-2.5 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faSquareTwitter}
          className="mr-2.5 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faSquarePinterest}
          className="mr-2.5 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className="mr-2.5 cursor-pointer"
        />
      </div>
      <div className="w-2/4 flex justify-center items-center m-0 p-0 list-none  text-xl font-light mt-6">
        <NavLink to={"/"} className={"mr-5 no-underline"}>
          Home
        </NavLink>
        {isToken && (
          <NavLink to={"/create-post"} className={"mr-5 no-underline"}>
            Create-Posts
          </NavLink>
        )}
        {!isToken && (
          <NavLink to={"/auth?mode=login"} className={"mr-5 no-underline"}>
            Login
          </NavLink>
        )}
        {isToken && (
          <NavLink to={"/logout"} className={"mr-5 no-underline"}>
            Logout
          </NavLink>
        )}
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <FontAwesomeIcon icon={faUser} className="cursor-pointer text-lg" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[#666] ml-5 cursor-pointer text-lg"
        />
      </div>
    </nav>
  )
}

export default Navbar
