import React from "react";
/** Atom */
import { Link, useNavigate } from "react-router-dom";
import { useUserMutation } from "@/api/UserQuery";
/** Hook */
import { useForm } from "react-hook-form";
/** Type */
import Bible from "@/type/Bible";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useUserMutation();
  const { register, handleSubmit, resetField, setFocus } = useForm({
    defaultValues: {
      userId: ""
    }
  });

  const handleLogin = (data: { userId: string }) => {
    mutate(data, {
      onSuccess: (data: Bible.User) => {
        sessionStorage.setItem("userName", data.userName);
				sessionStorage.setItem("uuid", data.id);
				sessionStorage.setItem("auth", data.auth);
        navigate("/home")
      },
      onError: () => {
				resetField("userId");
        setFocus("userId");
			}
    })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            주은혜 교회
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-7" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                아이디
              </label>
              <div className="mt-2">
                <input
                {...register("userId")}
                  className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            <Link to="/join" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              회원가입
            </Link>
          </p>
        </div>
      </div>
  )
};

export default LoginPage;