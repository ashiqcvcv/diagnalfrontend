import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { getBooksAction } from "./redux/books/actions";

function App() {
  const { loading, data: books, pageno } = useSelector((state) => state.books);
  const nextPage = useSelector((state) => state.pageno);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!books) {
      console.log('useefect 1')
      dispatch(getBooksAction(1));
    }
    
  }, [books, dispatch]);

  useEffect(() => {
    console.log(pageno, nextPage)
    if ( nextPage <= 3 && pageno !== nextPage ) {
      dispatch(getBooksAction(nextPage));
      console.log('useefect 2')
    }
  }, [dispatch, nextPage, pageno])

  return (
    <div className="bg-black">
      <Navbar />
      <Home books={books} loading={loading} />
    </div>
  );
}

export default App;
