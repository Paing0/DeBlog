import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquarePinterest,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"
import asideImage from "../assets/aside.jpg"
const Sidebar = () => {
  return (
    <aside className="w-1/4 m-5 pb-7 rounded-lg flex flex-col">
      <div className="flex flex-col items-center">
        <h4 className="sidebarTitle">ABOUT ME</h4>
        <img
          src={asideImage}
          alt="Sidebar Image"
          className="h-[300px] object-cover w-full mt-3.5 rounded-lg"
        />
        <p className="py-8 text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae tempore
          in quam eius, exercitationem alias atque, aliquam qui, possimus nisi
          sequi repellendus! Tempore aperiam, modi obcaecati suscipit blanditiis
          hic libero.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="sidebarTitle">FOLLOW US</h4>
        <div className="sidebarSocial">
          <FontAwesomeIcon icon={faSquareFacebook} className="sidebarIcon" />
          <FontAwesomeIcon icon={faSquareTwitter} className="sidebarIcon" />
          <FontAwesomeIcon icon={faSquarePinterest} className="sidebarIcon" />
          <FontAwesomeIcon icon={faSquareInstagram} className="sidebarIcon" />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
