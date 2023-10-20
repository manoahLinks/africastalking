import { useState } from 'react';
import { TfiPencilAlt, TfiHeart } from 'react-icons/tfi';
import Fullscreenmodal from './Fullscreenmodal';
import MedicationForm from './MedicationForm';

function Medication() {
  const [medForm, setMedForm] = useState(false);

  const handleModal = () => {
    setMedForm(false);
  };
  return (
    <div className="flex flex-col gap-y-2 bg-white p-5">
      <span className="flex items-center gap-x-2">
        <small>Medications:</small>
        <TfiPencilAlt />
      </span>
      <div className="grid grid-cols-1">
        <span className="flex">
          <small>Drugs Prescribed :</small>
        </span>
      </div>

      <button
        onClick={() => {
          setMedForm(true);
        }}
        className="cursor-pointer text-white p-2 rounded-md bg-[#013CC6] justify-center flex gap-x-4"
      >
        <small>Add prescribtion</small>
        <TfiHeart />
      </button>

      {medForm && (
        <Fullscreenmodal handleModal={handleModal} width="737px">
          <MedicationForm />
        </Fullscreenmodal>
      )}
    </div>
  );
}

export default Medication;
