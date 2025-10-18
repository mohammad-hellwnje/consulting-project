// services/inPersonCoursesApi.ts
import { api } from "./axios";

// Get all in-person courses
export async function getInPersonCourses() {
  const res = await api.get("/services/in-person-courses", { withCredentials: true });
  return res.data.data.courses;
}

// Get in-person course by id
export async function getInPersonCourseById(id: string) {
  const res = await api.get(`/services/in-person-courses/${id}`, { withCredentials: true });
  return res.data.data.course;
}

// Create in-person course
export async function createInPersonCourse(data: FormData) {
  const res = await api.post("/services/in-person-courses", data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.course;
}

// Update in-person course
export async function updateInPersonCourse(id: string, data: FormData) {
  const res = await api.put(`/services/in-person-courses/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data.data.course;
}

// Delete in-person course
export async function deleteInPersonCourse(id: string) {
  const res = await api.delete(`/services/in-person-courses/${id}`, { withCredentials: true });
  return res.data;
}

