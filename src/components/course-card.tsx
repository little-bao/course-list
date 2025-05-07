"use client";

import { Course } from "@/types/course";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const isLive = course.status === "live";

  return (
    <Card className="overflow-hidden h-full relative group rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
      <div className="relative w-full h-full aspect-[3/4]">
        <Image
          src={course.cover_image_url}
          alt={`${course.title} ${course.subtitle}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 transition-all duration-300 group-hover:from-black/20 group-hover:via-black/40 group-hover:to-black/70"></div>

        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-gradient-to-t from-black/95 via-black/85 to-black/70 backdrop-blur-sm p-6 pt-8 w-full transform translate-y-[85%] group-hover:translate-y-0 transition-transform duration-300 ease-out shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)]">
            <h3 className="text-white text-xl font-serif mb-3">
              {course.title}
            </h3>
            <p className="text-white/90 text-sm line-clamp-4 overflow-hidden leading-relaxed">
              {course.description ||
                course.highlight ||
                "No description available."}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2"></path>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                </svg>
                {course.lesson_count} lessons
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {course.lesson_length}
              </span>
            </div>
          </div>
        </div>

        {/* Top content - brand logo */}
        <div className="absolute top-0 left-0 w-fit text-center group-hover:opacity-0 group-hover:translate-y-[-1rem] transition-all duration-300">
          <div className="flex flex-col items-start">
            <div className="text-white text-5xl font-serif mb-1 drop-shadow-lg">
              <Image
                src={course.brand_logo_image_url}
                width={100}
                height={100}
                alt="logo"
              ></Image>
            </div>
          </div>
        </div>

        {/* Bottom content - course info and button */}
        <div className="absolute bottom-12 left-0 w-full text-center px-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300">
          <h3 className="text-white text-xl font-serif mb-1 drop-shadow-md">
            {course.brand_name}
          </h3>
          <h4 className="text-white text-xl font-serif mb-4 drop-shadow-md">
            Authentication Course
          </h4>

          <div className="text-white text-xs mb-6 drop-shadow-sm">
            {course.lesson_count} Sessions
          </div>

          {isLive ? (
            <div className="p-2 py-1 gap-2 mx-auto bg-white text-black rounded-full w-fit flex items-center justify-center overflow-hidden shadow-lg">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="font-medium text-xs">Live Now</div>
            </div>
          ) : (
            <div className="p-2 py-1 text-xs mx-auto bg-white/80 text-black rounded-full w-fit font-medium shadow-lg">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
