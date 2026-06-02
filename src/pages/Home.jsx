import { useEffect, useState } from "react";
import { getData } from "../api/jobsApi";
import JobCard from "../components/JobCard";
import { useSearchParams } from "react-router-dom";
import JobModal from "../components/JobModal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const [selectedJob, setSelectedJob] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const keyword = searchParams.get("q") || "";

  useEffect(() => {
    getData().then((data) => {
      setJobs(data.jobs);
    });
  }, []);
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(keyword.toLowerCase()),
  );
  const indexOfLastJob = currentPage * jobsPerPage;

  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  return (
    <div>
      <h1>Jobs</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} onView={() => setSelectedJob(job)} />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span
          style={{
            margin: "0 15px",
          }}
        >
          Page {currentPage}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      </div>
    </div>
  );
}
