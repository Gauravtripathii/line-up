"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

function CoursesPage() {
  const router = useRouter();

  // const [response, setResponse] = useState();
  const [id, setID] = useState();

  const getAuthenticatedUserID = async () => {
    const user = await axios.get("/api/auth/me");
    return user.data.data._id;
  };

  const addCourse = () => {
    router.push("/courses/view");
  };

  useEffect(() => {
    getAuthenticatedUserID().then((id) => {
      setID(id);
    });
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .post("/api/courses/getAllByUser", { id })
        .then((response) => console.log(response.data))
        .catch((error) => console.log("Error fetching courses : ", error))
        .catch((error) => console.log("Error fetching email : ", error));
    }
  }, [id]);
  return (
    <div className="h-full flex p-10">
      <div
        onClick={addCourse}
        className="add-course border rounded-full h-24 w-24 flex items-center justify-center hover:scale-125 transition ease-in-out cursor-pointer"
      >
        +
      </div>
    </div>
  );
}

export default CoursesPage;
