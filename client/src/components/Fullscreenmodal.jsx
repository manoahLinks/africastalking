/* eslint-disable react/prop-types */
// import React, {useState} from 'react'
import { TfiClose } from 'react-icons/tfi';

function Fullscreenmodal({ children, handleModal, width }) {
  return (
    <div className="fixed flex inset-0 w-full h-screen bg-[#013CC6] bg-opacity-40">
      <div
        className={`flex flex-col ${!width && 'md:w-4/12'} w-[${
          width ? width : '4/12'
        }] w-full m-auto p-5 bg-white rounded-lg`}
      >
        <span
          onClick={handleModal}
          className="self-end p-1 bg-[#013CC6] rounded-full bg-opacity-10 animate-spin"
        >
          <TfiClose />
        </span>

        <div className="grid grid-cols-1">{children}</div>
      </div>
    </div>
  );
}

export default Fullscreenmodal;
