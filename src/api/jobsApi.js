// src/api/jobsApi.js

export async function getData() {
  const response =
    await fetch("/jobs.json");

  return response.json();
}