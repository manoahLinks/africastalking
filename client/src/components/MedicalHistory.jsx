function MedicalHistory() {
  return (
    <div className="bg-white p-4">
      <h1 className="text-black text-xl font-semibold mb-[18px]">
        Medical History
      </h1>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-y-4 gap-x-[43px] text-black text-base font-medium">
        <h3>
          Medical Condition:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Medication History:{' '}
          <span className="text-blackLight font-normal">
            Ciprofloccacin 200mg, Diclofenac 678mg
          </span>
        </h3>
        <h3>
          Hospitalization:{' '}
          <span className="text-blackLight font-normal">12</span>
        </h3>
        <h3>
          Medical Allergies:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Immunization History:{' '}
          <span className="text-blackLight font-normal">
            June 12, Azepetamin Aug 2 dopamine
          </span>
        </h3>
        <h3>
          Recent Allergies:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Surgical History:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Diagnostic Tests:{' '}
          <span className="text-blackLight font-normal">
            Xray 20-23 Kidney stone, MRI-Positive
          </span>
        </h3>
        <h3>
          Surgical History:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Surgical History:{' '}
          <span className="text-blackLight font-normal">None</span>
        </h3>
        <h3>
          Past Medical Events:{' '}
          <span className="text-blackLight font-normal">Heart attack</span>
        </h3>
      </div>
    </div>
  );
}

export default MedicalHistory;
