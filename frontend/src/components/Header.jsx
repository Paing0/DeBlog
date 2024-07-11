import headerImage from "../assets/headerImage.jpg"

const Header = () => {
  return (
    <>
      <section className="mt-10 flex items-center justify-center">
        <h1 className="font-[Lora] font-extralight absolute top-[15%] text-[80px] bg-transparent">
          DeBlog
        </h1>
        <img
          src={headerImage}
          alt="Header Image"
          className="w-full h-[450px] object-cover mt-[60px]"
        />
      </section>
    </>
  )
}

export default Header
