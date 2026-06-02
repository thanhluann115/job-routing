export default function JobModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "black",
          color: "white",
          width: "700px",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <h2>{job.title}</h2>

        <p>📍 {job.city}</p>

        <p>
          💰 ${job.salaryLow} - ${job.salaryHigh}
        </p>

        <p>Experience: {job.yrsXPExpected} years</p>

        <p
          style={{
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          {job.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {job.skills.map((skill) => (
            <span
              key={skill}
              style={{
                background: "#e74c3c",
                color: "white",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
