"use client";

import { useRouter } from "next/navigation";

function CoursesPage() {
  const router = useRouter();

  const addCourse = () => {
    router.push("/courses/add");
  }
  return (
    <div className="h-full flex p-10">
      <div onClick={addCourse} className="add-course border rounded-full h-24 w-24 flex items-center justify-center hover:scale-125 transition ease-in-out cursor-pointer">+</div>
    </div>
  );
}

export default CoursesPage;
