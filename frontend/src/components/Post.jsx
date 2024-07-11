import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const Post = ({ post }) => {
  const { id, title, date, image, description } = post
  return (
    <div className="w-[385px] mt-0 mx-6 mb-[40px]">
      <Link to={`${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover rounded-lg"
        />
      </Link>
      <div className="flex flex-col items-center font-[Varela-Round] text-sm leading-5  mt-3.5 mr-2.5">
        <Link className="no-underline" to={`${id}`}>
          <h4 className="font-[Josefin-Sans] text-3xl font-bold mt-3.5 mb-2">
            {title}
          </h4>
        </Link>
        <div>
          <FontAwesomeIcon icon={faCalendar} className="text-lg" />{" "}
          <span className="font-[Lora] text-base italic font-medium text-[#be9656]">
            {date}
          </span>
        </div>
      </div>
      <p className="font-[Valera-Round] text-base leading-7 mt-6 line-clamp-4">
        {description}
      </p>
    </div>
  )
}

export default Post
