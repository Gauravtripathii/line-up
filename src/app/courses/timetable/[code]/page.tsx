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
    schedule: [
      {
        day: "",
        time: "",
        _id: "6533739dd872ac4379b9bd52"
      }
    ]
  });

  const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'];
  const times = ['08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18'];

  const getCourseByCode = async () => {
    const response = await axios.post("/api/courses/getCourse", {
      code: params.code,
    });
    return response.data.course;
  };

  useEffect(() => {
    if (!course.code) {
      getCourseByCode()
        .then((response) => setCourse(response))
        .catch((error) =>
          toast.error(
            "An error occurred while fetching course information",
            error.message
          )
        );
    }
    console.log(course.schedule)
  }, [course]);

  return (
    <div className="h-full flex flex-col justify-center p-10">
      <h2 className="text-3xl text-center font-bold mb-4">Course Timetable</h2>
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-1"></div>
        {days.map((day) => (
          <div
            key={day}
            className="col-span-1 text-center p-2 border border-gray-200"
          >
            {day}
          </div>
        ))}
      </div>
      {times.map((timeSlot, index) => (
        <div key={index} className="grid grid-cols-6 gap-1">
          <div className="col-span-1 text-right p-2 border border-gray-200">
            {timeSlot}
          </div>
          {days.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`col-span-1 p-2 border border-gray-200 text-center ${
                isCourseScheduled(day.toLowerCase(), timeSlot) ? "bg-green-400" : "bg-red-400"
              }`}
            >
              {course.schedule &&
                isCourseScheduled(day.toLowerCase(), timeSlot) && (
                  course.name
                )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  function isCourseScheduled(courseDay: string, courseTime: string) {
    return course.schedule.some((scheduled) => {
      return (
        scheduled.day.toLowerCase() === courseDay.toLowerCase() &&
        scheduled.time === courseTime
      );
    });
  }
}
