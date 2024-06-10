import React from "react";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
