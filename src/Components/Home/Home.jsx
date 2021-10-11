import React from 'react';
import useInterSectionHook from '../../hooks/useInterSectionHook';
import { useSelector, useDispatch } from "react-redux";
import { pageIncrement } from "../../redux/page/actions";
import defaultImage from '../../assets/placeholder_for_missing_posters.png';
const imageUrl = (x) => `/Slices/${x}`;

export const Home = ({ books, search }) => {

  const callback = () => {
    dispatch(pageIncrement(pageno));
  }

  const { elementRef } = useInterSectionHook(callback);
  const pageno = useSelector((state) => state.pageno);

  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl py-5 px-3 sm:py-24 sm:px-6">

      <div className="grid grid-cols-3 gap-y-2 gap-x-3 sm:grid-cols-2 overflow-auto">
        {(books || [])
        .filter(cover => {
          if ( !search ) return cover
          return (cover.name).toLowerCase().includes(search.toLowerCase())
        })
        .map((cover, i) => (
          <div key={i} className="group relative" ref={i === books.length - 1 ? elementRef : null}>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 mt-5">
              <img
                src={imageUrl(cover['poster-image'])}
                onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}}
                alt={imageUrl(cover['poster-image'])}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="flex justify-between truncate">
              <div>
                <p className="text-sm text-gray-500">{cover.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>)


};

export default Home
