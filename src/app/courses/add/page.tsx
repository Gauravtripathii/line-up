"use client";

import { useState } from "react";

const styles = {
  formContainer: {
    backgroundColor: "#F2E982",
  },
  formContainerInputFocus: {
    outline: "none",
    transition: "0.5s",
    letterSpacing: "2px",
  },
};

const days = ["mon", "tue", "wed", "thurs", "fri"];
const times = [
  "08-09",
  "09-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "16-17",
  "17-18",
];

export default function AddCourse() {
  const [payload, setPayload] = useState({
    code: "",
    name: "",
    description: "",
    profileImage: "",
    faculty: "",
    schedule: [
      {
        day: "",
        time: "",
      },
    ],
  });
  return (
    <div className="h-100 flex items-center justify-center p-5">
      <div
        className="form-container p-10 rounded-2xl w-1/3"
        style={styles.formContainer}
      >
        <h1 className="font-bold text-3xl mb-6">Log into your account</h1>
        <p>
          <input
            type="text"
            placeholder="Course Code"
            className="mb-5 p-2 w-full rounded"
            value={payload.code}
            onChange={(e) => setPayload({ ...payload, code: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Course Name"
            className="mb-5 p-2 w-full rounded"
            value={payload.name}
            onChange={(e) => setPayload({ ...payload, name: e.target.value })}
          />
        </p>
        <p>
          <textarea
            name="Course_description"
            id="Course_description"
            cols={20}
            rows={7}
            className="mb-5 p-2 w-full rounded"
            placeholder="Course Description"
            value={payload.description}
            onChange={(e) =>
              setPayload({ ...payload, description: e.target.value })
            }
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            placeholder="Course Faculty"
            className="mb-5 p-2 w-full rounded"
            value={payload.faculty}
            onChange={(e) =>
              setPayload({ ...payload, faculty: e.target.value })
            }
          />
        </p>
        <div className="flex flex-wrap items-center">
          {days.map((day, index) => (
            <div key={index}>
              <span>
                <input type="checkbox" name={day} id={day} /> {day} :
              </span>
              <div className="flex flex-wrap">
                {times.map((time, index2) => (
                  <span
                    key={index2}
                    className="mr-2 mb-2 border border-black p-1"
                  >
                    <input
                      type="radio"
                      name={time}
                      id={time}
                      onClick={() =>
                        setPayload({
                          ...payload,
                          schedule: [
                            ...payload.schedule,
                            {
                              day,
                              time,
                            },
                          ],
                        })
                      }
                    />{" "}
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p>
          <button
            onClick={() => console.log(payload)}
            className="border-2 border-red-500 rounded bg-red-500 text-white p-2 w-full font-bold text-xl hover:bg-inherit hover:text-red-500"
          >
            Add Course
          </button>
        </p>
      </div>
    </div>
  );
}
