import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination({ total, current, changePage }) {
  let pages = (
    <button
      data-testid="page-btn"
      onClick={changePage(current + 1)}
      disabled={(current = 0)}
    >
      next
    </button>
  );

  // const { state } = useContext(AppContext);

  return (
    <div>
      {/* <button disabled={state.count = 1} onClick={()=> changePage()}> prev </button>
        <button onClick={changePage(current+1)}> Next  </button> */}
      {pages}
    </div>
  );
}

export default Pagination;

// current page of the component
// event handler when button is clicked,
// changePage accepts the new page in number
