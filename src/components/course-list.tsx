"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCourses } from "@/lib/api";
import { CourseCard } from "@/components/course-card";
import { SearchInput } from "@/components/search-input";
import { Skeleton } from "@/components/ui/skeleton";

export function CourseList() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: courses = [],
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const filteredCourses = courses.filter((course) =>
    course.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  ); // 根据品牌名称进行搜索

  if (isLoading) {
    return <CourseListSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold text-destructive mb-2">
          Error Loading Courses
        </h2>
        <p className="text-muted-foreground mb-4">
          There was a problem loading the courses. Please try again later.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
        <button
          onClick={() => {
            refetch();
          }}
          className="cursor-pointer px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl font-serif mb-3">Our Authentication Courses</h1>
        <p className="text-muted-foreground text-center max-w-2xl mb-10">
          Discover Your Next Luxury Authentication Course at AuthClass. Explore
          our diverse range of courses, from beginner to advanced, and find the
          perfect program to elevate your expertise and start a rewarding
          career.
        </p>
        <div className="w-full max-w-md">
          <SearchInput
            onSearch={setSearchQuery}
            placeholder="Search by brand name..."
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No courses found</h2>
          <p className="text-muted-foreground">
            Try adjusting your search or check back later for new courses.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course) => (
            <div key={course.id} className="h-[500px] px-2">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CourseListSkeleton() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-16">
        <Skeleton className="h-12 w-80 mb-3" />
        <Skeleton className="h-4 w-full max-w-2xl mb-2" />
        <Skeleton className="h-4 w-full max-w-2xl mb-10" />
        <Skeleton className="h-10 w-full max-w-md" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-[500px] px-2">
            <Skeleton className="h-full w-full rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
