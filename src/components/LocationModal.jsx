import { MapPinIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeLocationModal } from '../features/app/appSlice';

const LocationModal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();

  const handleModalClose = (e) => {
    if (!modalRef.current.contains(e.target)) dispatch(closeLocationModal());
  };

  return (
    <div
      onClick={handleModalClose}
      className='bg-gray-900/70 fixed top-0 left-0 w-full h-full flex justify-center items-center'
    >
      <div
        ref={modalRef}
        className='w-[90%] flex flex-col justify-center items-center max-w-[600px] m-auto p-8 bg-white rounded-md min-h-[240px]'
      >
        <h1 className='text-2xl font-semibold '>
          Please provide your location
        </h1>
        <button className='w-full max-w-[360px] flex justify-center items-center gap-2 border p-2 px-4 my-4 bg-gray-50  shadow-sm rounded-md'>
          Access my location <MapPinIcon className='w-4 h-4' />
        </button>

        <p>or, enter manually</p>

        <div className='flex items-center gap-4 w-full max-w-[360px]'>
          <input
            className='w-full grow bg-gray-50 my-4 p-2 border border-gray-400 rounded-md'
            type='text'
            placeholder='Delhi'
            name='location'
            id='location'
          />
          <button className='p-2 px-4 bg-orange-500 text-white rounded-md'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;