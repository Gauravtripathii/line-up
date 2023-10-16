import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen p-10">
      <div className="img-container h-full flex content-center items-center">
        <Image
          src="/assets/home-img.png"
          alt="home page image"
          layout="intrinsic"
          width={1000}
          height={700}
          className="home-image"
        />
      </div>
      <div className="home-content  flex-col h-full flex justify-center">
        <h1 className="text-6xl font-bold text-slate-950 mb-10">
          Time Table Planner!
        </h1>
        <p className="text-2xl text-slate-500 mb-10">
          A friendly space where you can effortlessly plan, draft, and manage
          your classes. Like creating your own unique timetable, checking your
          calendar, and seeing all your classes neatly organized in one spot.
          <br />
          And hey, if a course isn't your jam, you can easily step away, making
          your academic journey feel just right.
        </p>
        <p className="text-3xl flex gap-10">
          <button className="border-2 border-red-500 rounded bg-red-500 text-white font-bold p-4 hover:bg-white hover:text-red-500">Register</button>
          <button className="border-2 border-gray-400 rounded bg-gray-400 p-4 hover:bg-white">Login</button>
        </p>
      </div>
      <div className="bg-circle"></div>
    </main>
  );
}
