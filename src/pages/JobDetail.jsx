import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../api/jobsApi";

export default function JobDetail() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    getData().then((data) => {
      const foundJob = data.jobs.find((item) => item.id === id);

      setJob(foundJob);
    });
  }, [id]);

  if (!job) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{job.title}</h2>

      <p>📍 {job.city}</p>

      <p>
        💰 ${job.salaryLow} - ${job.salaryHigh}
      </p>

      <p>
        Experience:
        {job.yrsXPExpected} years
      </p>

      <p>
        Remote:
        {job.remote ? " Yes" : " No"}
      </p>

      <p>{job.description}</p>
    </div>
  );
}
