import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, logout } = useAuth();
  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Định tuyến công việc</h2>

      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchParams.get("q") || ""}
        onChange={(e) =>
          setSearchParams({
            q: e.target.value,
          })
        }
        style={{
          padding: "8px",
          width: "250px",
        }}
      />

      <>
        {!user ? (
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Đăng nhập
          </Link>
        ) : (
          <div>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {user.username}
            </span>

            <button onClick={logout}>Đăng xuất</button>
          </div>
        )}
      </>
    </nav>
  );
}
