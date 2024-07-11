import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom"

export const PostDetails = ({ post }) => {
  const isToken = useRouteLoaderData("root")
  const { title, image, description, date } = post
  const submit = useSubmit()
  const postDeleteHandler = () => {
    const confirmStatus = window.confirm(
      "Are you sure you want to delete this post?"
    )
    if (confirmStatus) {
      submit(null, { method: "DELETE" })
    }
  }

  return (
    <section className="w-3/4 mt-2.5">
      <div className="p-5 pr-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[70vh] rounded-lg object-cover"
        />
        <div className="text-center m-2.5 text-3xl">
          <h1 className="font-[Josefin-Sin] inline-block ml-[47.5px]">
            {title}
          </h1>
          {isToken && (
            <div className="float-right text-xl">
              <Link to={"edit-post"}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="cursor-pointer text-[#2a86aa]"
                />
              </Link>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="ml-2.5 cursor-pointer text-[#dd2a2a]"
                onClick={postDeleteHandler}
              />
            </div>
          )}
        </div>
        <div className="mb-5 flex justify-between text-[#b39656] font-[Valera-Round]">
          <span>
            Author: <b>Paing</b>
          </span>
          <div>
            <FontAwesomeIcon icon={faCalendar} className="text-lg" />{" "}
            <span className="font-[Lora] text-base italic font-medium text-[#be9656]">
              {date}
            </span>
          </div>
        </div>
        <p className="text-[#444] text-xl leading-9 first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
          {description}
        </p>
      </div>
    </section>
  )
}
