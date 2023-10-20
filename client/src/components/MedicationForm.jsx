import { useState } from 'react';

function MedicationForm() {
  const [orderList, setOrderList] = useState([]);
  const [medcine, setMedcine] = useState('');
  const [dosage, setDosage] = useState('');

  function handleAdd() {
    if (!medcine || !dosage) return;
    setOrderList((list) => [...list, { medcine, dosage }]);
    setMedcine('');
    setDosage('');
  }
  return (
    <div className="flex flex-col gap-y-4">
      <button
        className="text-base self-center p-2 rounded bg-[#c4c4c4] text-white"
        onClick={handleAdd}
      >
        add
      </button>
      <h4 className="text-center font-semibold">Medication Order</h4>
      <div className="grid grid-cols-[377px_203px] gap-x-[24px]">
        <div className="flex flex-col gap-y-2">
          <small>Medicine</small>
          <input
            type="text"
            name="medicine"
            className="text-xs placeholder-slate-300 border w-[377px] border-slate-300 rounded-md"
            placeholder="Enter drug name"
            value={medcine}
            onChange={(e) => setMedcine(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <small>Dosage</small>
          <input
            type="text"
            name="dosage"
            className="text-xs placeholder-slate-300 border border-slate-300 rounded-md"
            placeholder="Enter dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
        </div>
      </div>
      {orderList.length !== 0 && (
        <div>
          <div className="grid grid-cols-[377px_203px] gap-x-[24px] text-black  text-base font-normal">
            <h2>Drugs</h2> <h2>Dosage</h2>
          </div>
          <div className="flex flex-col gap-y-2">
            {orderList.map((order, i) => (
              <div
                key={i}
                className="grid grid-cols-[377px_203px] gap-x-[24px] text-blackLight300 text-base font-light"
              >
                <h2>{order.medcine}</h2>
                <h2>{order.dosage}</h2>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="text-white p-2 w-[400px] m-auto bg-[#013CC6] rounded-md">
        <small>Save</small>
      </button>
    </div>
  );
}

export default MedicationForm;
