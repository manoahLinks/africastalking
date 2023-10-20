import { Appointments, Laboratory, Medication } from '../components';
import MedicalHistory from '../components/MedicalHistory';

function Appointment() {
  return (
    <div className="flex-1 grid grid-cols-1 gap-y-8">
      <div>
        <h2 className="text-black text-2xl font-normal mb-[12px]">
          Daniel Kasuwa{' '}
          <span className="ml-[10px] text-[#0b63f8] text-base">#AHGA68</span>
        </h2>
        <MedicalHistory />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-2 ">
        <Appointments />
        <Medication />
        <Laboratory />
      </div>
    </div>
  );
}

export default Appointment;
