import React from 'react';
import useInterSectionHook from '../../hooks/useInterSectionHook';
import { useSelector, useDispatch } from "react-redux";
import { pageIncrement } from "../../redux/page/actions";
const imageUrl = (x) => `/Slices/${x}`

export const Home = ({ books }) => {

  const callback = () => {
    dispatch(pageIncrement(pageno));
  }

  const { elementRef } = useInterSectionHook(callback);
  const pageno = useSelector((state) => state.pageno);

  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl py-5 px-4 sm:py-24 sm:px-6">

      <div className="grid grid-cols-3 gap-y-2 gap-x-6 sm:grid-cols-2 overflow-auto">
        {(books || []).map((cover, i) => (
          <div key={i} className="group relative" ref={i === books.length - 1 ? elementRef : null}>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1">
              <img
                src={imageUrl(cover['poster-image'])}
                alt={'cover.imageAlt'}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="flex justify-between">
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
