import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { AppContext } from "../Context/AppContext";

function Dashboard({ token }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);

  const Auth = useContext(AppContext);

  function handleLogoutButton() {
    Auth.handleLogout();
    navigate("/login");
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?page=${page}&_limit=10`)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((err) => console.log(err));
  }, [page]);
  // console.log(data)
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">TOKEN: {token}</h4>
      <button onClick={handleLogoutButton} data-testid="logout-btn">
        Logout
      </button>
      <ul data-testid="item-container">
        {data.map((el) => (
          <li data-testid="item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
      <div data-testid="pagination-container">
        <Pagination changePage={setPage} current={page} total={data} />
      </div>
    </div>
  );
}

export default Dashboard;
