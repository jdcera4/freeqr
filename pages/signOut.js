import { useEffect } from "react";
import { useRouter } from 'next/router'

import { logout } from "../initAuth";

export default function SignOut() {
  useEffect(() => {}, []);
  const navigate = useRouter();

  return (
    <div
      onUserLoggedIn={async () => {
        await logout();
        navigate.push("/login");
      }}
      onUserNotLoggedIn={() => {
        navigate.push("/login");
      }}
    ></div>
  );
}
