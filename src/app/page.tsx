import { CourseList } from "@/components/course-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-6 px-4 flex items-center justify-between">
          <Image
            src="https://authclass-static.oss-accelerate.aliyuncs.com/website/logo-app-full.png"
            width={140}
            height={24}
            alt=""
            className="cursor-pointer"
          ></Image>
        </div>
      </header>
      <main className="py-8">
        <CourseList />
      </main>
      <footer className="border-t mt-12">
        <div className="container mx-auto py-8 px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LuxAuth. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
