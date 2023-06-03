import { FC, useEffect, useState } from "react";
import Input from "../general/inputs/input";
import Link from "next/link";
import Button from "../glassmorph/Button";
import UserService from "../../services/user";
import { updateUser, selectUser } from "@/app/store/features/userSlice";
import { User } from "@/app/types/user.d";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { store } from "@/app/store/store";

interface LoginFormProps {
  changeForm: any;
}

const LoginForm: FC<LoginFormProps> = ({ changeForm }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user: User = selectUser(store.getState());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (event: any) => {
    setUsername(event.target.value);
  };
  const changePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const loginUserHandler = (event: any) => {
    event.preventDefault();

    const userObject: User = {
      eMail: username,
      password: password,
      username: username,
    };

    UserService.LoginUser(userObject).then((response) => {
      console.log(response.result);
      if (response.result !== null) {
        console.log(response.result)
        dispatch(updateUser(response.result));

        if (router) {
          router.push("/pages/main");
        }
      }
    });
  };

  const handleSignupClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();
    changeForm();
  };

  return (
    <form className="h-full w-100 flex flex-col justify-center items-center">
      <div className="text-blue-700 font-poppins text-2xl tracking-widest">
        Login
      </div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={changeUsername}
        className="input-text m-3"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={changePassword}
        className="input-text m-3"
      />
      <Button onClick={loginUserHandler} label="Login" />
      <p className="ml-48" onClick={handleSignupClick}>
        Noch keinen Account?
      </p>
    </form>
  );
};

export default LoginForm;
