"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

function CoursesPage() {
  const router = useRouter();

  const [courseToBeRemoved, setCourseToBeRemoved] = useState("");

  const [courses, setCourses] = useState<
    { name: string; code: string; faculty: string; profileImage: string }[]
  >([]);
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

  const removeCourse = async (code: string, id: any) => {
    try {
      await axios.post("/api/courses/removeCourse", {userId: id, code});
      toast.success("Course Removed!");
    } catch (error) {
      toast.error("An error occured!");
    }
  }

  useEffect(() => {
    if (courseToBeRemoved) removeCourse(courseToBeRemoved, id);
  }, [courseToBeRemoved]);
  return (
    <div className="h-full flex p-10">
      <div className="courses-container flex flex-wrap gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course relative h-fit p-5 rounded-3xl flex flex-col items-center cursor-pointer hover:scale-110 transition ease-in-out"
            style={{
              backgroundColor: "#F2E982",
            }}
          >
            <span onClick={() => setCourseToBeRemoved(course.code)} className="rounded-full bg-red-500 w-7 h-7 text-2xl flex items-center justify-center absolute top-2 right-2">
              X
            </span>
            <div className="img-container relative rounded-full border-black border-4 h-36 w-36">
              <Image
                src={course.profileImage ? "" : "/assets/default.png"}
                alt="course image"
                layout="fill"
                objectFit="cover"
                className="course-image rounded-full"
              />
            </div>
            <span className="font-semibold">{course.name.toUpperCase()}</span>
            <small>by {course.faculty.toLocaleUpperCase()}</small>
          </div>
        ))}
      </div>
      <span
        onClick={addCourse}
        className="add-course border border-black rounded-full h-24 w-24 flex items-center justify-center hover:scale-125 transition ease-in-out cursor-pointer absolute bottom-10 right-10"
      >
        +
      </span>
    </div>
  );
}

export default CoursesPage;
