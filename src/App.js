import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Home from "./Components/Home/Home";
import Back from './assets/Back.png';
import searchIcon from './assets/search.png';
import { getBooksAction } from "./redux/books/actions";

function App() {
  const { loading, data: books, pageno } = useSelector((state) => state.books);
  const nextPage = useSelector((state) => state.pageno);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!books) {
      dispatch(getBooksAction(1));
    }

  }, [books, dispatch]);

  useEffect(() => {
    if (nextPage <= 3 && pageno !== nextPage) {
      dispatch(getBooksAction(nextPage));
    }
  }, [dispatch, nextPage, pageno])

  return (
    <div className="bg-black">
      <div>
        {/* <h1 className='text-gray-100 opacity-0 hover:opacity-100'>Romantic Comedy</h1> */}
        <div className='bg-navbar bg-cover fixed z-10 h-20'>
          <button className='ml-3 mt-1'><img src={Back} alt="back" width='20px' height='20px' /></button>
          <input type="text" onChange={(e) => setSearch(e.target.value)} className="h-7 w-76 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-opacity-0" placeholder="Search ..." />
          <button className='ml-14 mt-2 pr-2' ><img src={searchIcon} alt="search" width='20px' height='20px' /></button>
        </div>
      </div>
      <Home books={books} loading={loading} search={search} />
    </div>
  );
}

export default App;
