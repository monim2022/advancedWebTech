import axiosInstance from "@/utils/axiosInstance";
import {
  errorToast,
  isEmpty,
  isValidEmail,
  isValidPassword,
  successToast,
} from "@/utils/formValidation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


function Register() {
  const INITIAL_REGISTER_OBJ = {
    username: "",
    email: "",
    password: "",
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (isEmpty(registerObj.username))
      return errorToast("Username is required! (use any value)");
    if (!isValidEmail(registerObj.email))
      return errorToast("Email is required! (use valid email)");
    if (!isValidPassword(registerObj.password))
      return errorToast(
        "Password is required! Use six-length password including (number, uppercase, lowercase, special character)"
      );

    setLoading(true);
    console.log(registerObj);
    const formData = new FormData();
    for (const key in registerObj) {
      if (registerObj.hasOwnProperty(key)) {
        formData.append(key, registerObj[key]);
      }
    }
    axiosInstance
      .post("http://localhost:3000/register", formData)
      .then((res) => {
        if (res.status === 201) {
          successToast("Sign Up Success!");
          router.push("/components/login");
        } else {
          errorToast("Something went wrong! Try Again.");
        }
      })
      .catch((err) => {
        console.log(err);
        errorToast("Something went wrong! Try Again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Update form value handler
  const updateFormValue = (key, value) => {
    setErrorMessage("");
    setRegisterObj((prevObj) => ({ ...prevObj, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto max-w-5xl shadow-xl">
        <div className="bg-base-100 rounded-xl">
          <div className="py-16 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>Username</label><br />
                  <input
                    type="text"
                    value={registerObj.username}
                    onChange={(e) => updateFormValue("username", e.target.value)}
                  /><br />
                </div>
                <div>
                  <label>Email</label><br />
                  <input
                    type="email"
                    value={registerObj.email}
                    onChange={(e) => updateFormValue("email", e.target.value)}
                  /><br />
                </div>
                <div>
                  <label>Password</label><br />
                  <input
                    type="password"
                    value={registerObj.password}
                    onChange={(e) => updateFormValue("password", e.target.value)}
                  /><br />
                </div>
              </div>

              <div className="mt-16">
                <button type="submit" className="btn btn-primary float-right">
                  Sign Up
                </button>
              </div>

              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link href="/components/login">
                  <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
