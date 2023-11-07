"use client";

import "./navigation.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Navigation() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      toast.success("Catch you later ;-)");
      setIsAuth(false);
      router.push("/");
    } catch (error: any) {
      toast.error(`An error occurred while logging out : ${error.message}`);
    }
  };

  const getAuthenticatedUserID = async () => {
    try {
      const user = await axios.get("/api/auth/me");
      return user.data.data._id;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    getAuthenticatedUserID().then((id) => {
      id ? setIsAuth(true) : setIsAuth(false);
    });
  }, [isAuth]);

  return isAuth ? (
    <div className="navigation">
      <nav>
        <span onClick={logout}>Log Out</span>
        <span>Contact Us</span>
      </nav>
    </div>
  ) : (
    <div className="navigation">
      <nav>
        <span>Contact Us</span>
      </nav>
    </div>
  );
}

export default Navigation;
