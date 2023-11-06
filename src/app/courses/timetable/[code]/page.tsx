"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function TimeTablePage({ params }: any) {
  const [course, setCourse] = useState({
    code: "",
    description: "",
    name: "",
    faculty: "",
    schedule: "",
  });

  const getCourseByCode = async () => {
    const response = await axios.post("/api/courses/getCourse", {
      code: params.code,
    });
    console.log(response.data.course);
    return response.data.course;
  };

  useEffect(() => {
    if (!course.code) {
      console.log(params.code, course);
      getCourseByCode()
        .then((response) => setCourse(response))
        .catch((error) =>
          toast.error(
            "An error occurred whil fetching course information",
            error.message
          )
        );
    }
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="table-container flex flex-col gap-5 border">
        <p className="flex gap-5 text-2xl font-bold items-center justify-center">
          <span></span>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
        </p>
        <div className="time-container border">
          <div className="time-lable flex flex-col">
            <p>
              <span>08-09</span>
            </p>
            <p>
              <span>09-10</span>
            </p>
            <p>
              <span>10-11</span>
            </p>
            <p>
              <span>11-12</span>
            </p>
            <p>
              <span>12-13</span>
            </p>
            <p>
              <span>13-14</span>
            </p>
            <p>
              <span>14-15</span>
            </p>
            <p>
              <span>15-16</span>
            </p>
            <p>
              <span>16-17</span>
            </p>
            <p>
              <span>17-18</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
