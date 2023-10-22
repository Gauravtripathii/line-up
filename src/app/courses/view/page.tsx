"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function viewCourses() {
  const [courses, setCourses] = useState<
    {
      name: string;
      code: string;
      faculty: string;
      profileImage: string;
      enrolledUsers: string[];
    }[]
  >([]);

  const [courseToBeUpdated, setCourseToBeUpdated] = useState("");
  const [authenticatedUserId, setAuthenticatedUserId] = useState("");
  const [email, setEmail] = useState("");

  const getAllUsers = async () => {
    const response = await axios.get("/api/courses/getAllCourses");
    return response.data.courses;
  };
  const getAuthenticatedUserEmail = async () => {
    const user = await axios.get("/api/auth/me");
    return user.data.data.email;
  };
  const getAuthenticatedUserId = async () => {
    const user = await axios.get("/api/auth/me");
    console.log(user.data.data._id);
    setAuthenticatedUserId(user.data.data._id);
  };

  const appendCourse = async (code: string) => {
    try {
      await axios.post("/api/courses/appendCourse", { email, code });
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.code === code
            ? {
                ...course,
                enrolledUsers: [...course.enrolledUsers, authenticatedUserId],
              }
            : course
        )
      );
      toast.success("Course Added!");
    } catch (error) {
      toast.error("There was an error!");
    }
  };

  useEffect(() => {
    if (courseToBeUpdated) {
      appendCourse(courseToBeUpdated);
    }
    if (!authenticatedUserId) getAuthenticatedUserId();
  }, [courseToBeUpdated, authenticatedUserId]);

  useEffect(() => {
    getAllUsers().then((response) => setCourses(response));
    getAuthenticatedUserEmail().then((response) => setEmail(response));
  }, []);

  return (
    <div className="h-full flex p-10">
      <div className="courses-container flex flex-wrap gap-4">
        {courses!.map((course, index) => (
          <div
            key={index}
            className="course h-fit p-5 rounded-3xl flex flex-col items-center justify-between cursor-pointer hover:scale-110 transition ease-in-out"
            style={{
              backgroundColor: "#F2E982",
            }}
          >
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
            {!course.enrolledUsers.includes(authenticatedUserId) ? (
              <span
                className="bg-red-500 w-full text-center rounded p-2"
                onClick={() => setCourseToBeUpdated(course.code)}
              >
                add this course
              </span>
            ) : (
              <span>already added!</span>
            )}
          </div>
        ))}
        <Link
          href="/courses/add"
          className="add-course border border-black rounded-full h-24 w-24 flex items-center justify-center hover:scale-125 transition ease-in-out cursor-pointer absolute bottom-10 right-10 text-center"
        >
          add a new course
        </Link>
      </div>
    </div>
  );
}

{
  /* <Link href="/courses/add">add a new course</Link> */
}
