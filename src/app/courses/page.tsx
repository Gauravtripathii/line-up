"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

function CoursesPage() {
  const router = useRouter();

  const [courses, setCourses] = useState<{name: string, code: string, faculty: string}[]>([]);
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
        .then((response) => setCourses(response.data.courses))
        .catch((error) => console.log("Error fetching courses : ", error))
        .catch((error) => console.log("Error fetching email : ", error));
    }
  }, [id]);
  return (
    <div className="h-full flex p-10">
      <div className="courses-container">
        {courses.map((course, index)=>(
          <span key={index}>{course.name}</span>
        ))}
      </div>
      <span
        onClick={addCourse}
        className="add-course border rounded-full h-24 w-24 flex items-center justify-center hover:scale-125 transition ease-in-out cursor-pointer"
      >
        +
      </span>
    </div>
  );
}

export default CoursesPage;
