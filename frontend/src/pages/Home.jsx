import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Posts from "./Posts"

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <main className="flex w-3/4 flex-wrap m-8 justify-evenly">
          <Posts />
        </main>
        <Sidebar />
      </div>
    </>
  )
}

export default Home
