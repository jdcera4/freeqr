import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";

// HOOK FOR VALIDATE IF USER IS LOGGED

export const useAuthUser = () => {
  const { push, pathname } = useRouter();

  const auth = getAuth()

  const { setisLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user === null ? false : true;

      if (!userLogged) {
        push("/auth");
        setisLogged(false);
      } else {
        setisLogged(true);
        // IF THE USER IS LOGGED IN AND WANTS TO VISIT THE ROUTES
        if (pathname === "/auth" || pathname === "/signUp") {
          push("/");
        }
      }
    });
  }, []);
};
