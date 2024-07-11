import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom"

const AuthForm = () => {
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get("mode") === "login"
  const data = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  const ErrorList = ({ errors }) => {
    return (
      <ul className="m-0 p-0 list-none bg-transparent font-semibold">
        {Object.values(errors) && <li className="bg-transparent">{errors}</li>}
      </ul>
    )
  }
  return (
    <section className="h-[calc(100vh-50px)] flex flex-col justify-center   items-center w-full bg-cover linear-gradient login-image mt-10">
      <h3 className="text-3xl bg-transparent font-[lora] font-medium">
        {isLogin ? "Login to your account" : "Create your account"}
      </h3>
      <Form method="post" className="mt-5 flex flex-col bg-transparent w-[30%]">
        {data && data.message && (
          <p className="m-0 mb-1 bg-transparent font-semibold">
            {data.message}
          </p>
        )}
        <label
          htmlFor="email"
          className="font-semibold text-xl my-2.5 mx-0 bg-transparent font-[lora]"
        >
          Email
        </label>
        {data && data.errors.email && <ErrorList errors={data.errors.email} />}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="p-2.5 border-none rounded-lg outline-none text-lg font-[lora] min-w-[175px]"
          required
        />
        <label
          htmlFor="password"
          className="font-semibold text-xl my-2.5 mx-0 bg-transparent"
        >
          Password
        </label>
        {data && data.errors.password && (
          <ErrorList errors={data.errors.password} />
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="text-lg p-2.5 border-none rounded-lg outline-none font-[lora] min-w-[175px]"
          required
        />
        <div className="flex justify-center bg-transparent">
          <button
            className="text-lg mt-5 cursor-pointer bg-teal-700 text-white p-1.5 border-none rounded-lg text-center font-[lora] w-[60%]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : isLogin ? "Login" : "Register"}
          </button>
        </div>
      </Form>
      {isLogin ? (
        <p className="bg-transparent mt-3 font-medium">
          Don't have an account?{" "}
          <Link
            to={"/auth?mode=signup"}
            className="bg-transparent font-extrabold"
          >
            Register here
          </Link>
        </p>
      ) : (
        <p className="bg-transparent mt-3 font-medium">
          Already have an account?{" "}
          <Link
            to={"/auth?mode=login"}
            className="bg-transparent font-extrabold "
          >
            Login here
          </Link>
        </p>
      )}
    </section>
  )
}

export default AuthForm
