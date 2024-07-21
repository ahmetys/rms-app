import axios from "axios";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
