// src/components/JobCard.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function JobCard({ job, onView }) {
  const navigate = useNavigate();

  const { user } = useAuth();
  const handleView = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    onView();
  };
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <div>
        {job.skills.slice(0, 3).map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <p>📍 {job.city}</p>

      <p>
        💰 ${job.salaryLow} - ${job.salaryHigh}
      </p>

      <button className="view-btn" onClick={handleView}>
        TÌM HIỂU THÊM
      </button>
    </div>
  );
}
