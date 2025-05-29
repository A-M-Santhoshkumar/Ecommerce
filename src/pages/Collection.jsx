import React, { useContext,useState} from 'react';
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> Catagories</p>
          <div className='flex flex-col gap-2 text-sm  font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'kids'} /> kids
            </p>

          </div>

        </div>
        {/* sub catagory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? "" : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> Type</p>
          <div className='flex flex-col gap-2 text-sm  font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'winterwear'} /> Winterwear
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Collection;
