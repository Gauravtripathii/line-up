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

export default function AddCourse() {
  const [payload, setPayload] = useState({
    code: "",
    name: "",
    description: "",
    profileImage: "",
    faculty: "",
    days: [] as string[],
  });
  return (
    <div className="h-full flex items-center justify-center">
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
        <p className="flex flex-wrap items-center">
          <input
            type="checkbox"
            name="monday"
            id="monday"
            onChange={() =>
              setPayload({ ...payload, days: [...payload.days, "monday"] })
            }
            className="m-4"
          />{" "}
          Monday
          <input
            type="checkbox"
            name="tuesday"
            id="tuesday"
            onChange={() =>
              setPayload({ ...payload, days: [...payload.days, "tuesday"] })
            }
            className="m-4"
          />{" "}
          Tuesday
          <input
            type="checkbox"
            name="wednessday"
            id="wednessday"
            onChange={() =>
              setPayload({ ...payload, days: [...payload.days, "wednessday"] })
            }
            className="m-4"
          />{" "}
          Wednessday
          <input
            type="checkbox"
            name="thursday"
            id="thursday"
            onChange={() =>
              setPayload({ ...payload, days: [...payload.days, "thursday"] })
            }
            className="m-4"
          />{" "}
          Thursday
          <input
            type="checkbox"
            name="friday"
            id="friday"
            onChange={() =>
              setPayload({ ...payload, days: [...payload.days, "friday"] })
            }
            className="m-4"
          />{" "}
          Friday
        </p>
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
