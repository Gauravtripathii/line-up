"use client";

import Link from "next/link";

export default function viewCourses() {
    return <h1>a list of courses : <Link href="/courses/add">add a new course</Link></h1>
}