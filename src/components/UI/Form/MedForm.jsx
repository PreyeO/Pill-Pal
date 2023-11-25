import TextInput from "../Inputs/TextInput";

const LoginForm = () => {
  return (
    <form className="flex flex-col mx-auto mt-4 gap-6 ">
   {/* <div className="flex flex-col justify-center items-center "> */}

      <TextInput
        placeholder="Enter medication name"
        type="text"
        label="Med name"
        required
      />
  
      <div className="flex gap-3 text-center">
      <TextInput
        placeholder="Dosage"
        type="text"
        label="Enter dosage"
        required
      />
      <TextInput
        placeholder="Enter Unit/dosage"
        type="number"
        label="Unit"
        required
      />
      </div>
      <div className="flex justify-between text-center">
      <TextInput
        placeholder="Enter start date"
        type="date"
        label="Start date"
        required
      />
      <TextInput
        placeholder="Enter end date"
        type="date"
        label="End date"
        required
      />
      </div>
      <div className=" flex justify-between text-center">
      <TextInput
        placeholder="Enter dosage time"
        type="time"
        label="Dosage time"
        required
      />
      <TextInput
        placeholder="Enter name of disease"
        type="text"
        label="Description"
        required
      />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-[#55AAFF] h-[55px] w-full rounded-md"
        >
          Add medication schedule
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default LoginForm;
