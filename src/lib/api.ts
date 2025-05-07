import { Course } from "@/types/course";

const API_URL = "https://api.authclass.com/user/v1/course";

export async function fetchCourses(): Promise<Course[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return data.data || [];
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
