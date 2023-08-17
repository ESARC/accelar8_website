import React from "react";
import CustomForm from "../components/form";

interface OptionType {
  value: string;
  label: string;
}

interface FormFields {
  type: string;
  min?: number;
  max?: number;
  htmlFor?: string;
  labelName?: string;
  placeholder?: string;
  options?: OptionType[];
}

const YearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(20), (_, index) => currentYear + index);

  return years.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));
};

const FormFields = ({
  type,
  placeholder,
  htmlFor,
  labelName,
  options,
  min,
  max,
}: FormFields) => {
  if (type === "select" && !options)
    throw new Error("options are required for select type");

  return (
    <div className="flex flex-col gap-4">
      {["input", "number"].includes(type) && (
        <input
          type="text"
          className="border border-gray-300 rounded-full bg-black h-10 flex-shrink-0 px-4 text-white"
          placeholder={placeholder}
          min={min}
          max={max}
        />
      )}
      {type === "select" && options && (
        <select className="border border-gray-300 rounded-full bg-black h-10 flex-shrink-0 px-4 text-gray-400">
          <>
            <option value={new Date().getFullYear()} disabled selected>
              {placeholder}
            </option>
            {options.map((option) => (
              <option value={option.value} key={option.label}>{option.label}</option>
            ))}
          </>
        </select>
      )}
      {labelName && <label htmlFor={htmlFor}>{labelName}</label>}
    </div>
  );
};

const Contact = () => {
  const handleCheckboxSelectChange = (selectedValues: string[]) => {
    console.log("Selected values:", selectedValues);
    // You can perform any additional actions with the selected values here
  };
  const options = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
    // ... add more options as needed ...
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-[70vh] w-[80vw] flex items-center justify-center rounded-lg bg-transparent-black">
        <div className="flex p-8">
          <div className="flex-1 pr-8">
            <p className="text-lg">
              Discover a seamless and innovative way to purchase your dream car
              with our cutting-edge digital car buying platform.
            </p>
            &nbsp;
            <p className="text-lg">
              We\'re thrilled to announce our upcoming pilot program, and we
              invite you to be a part of this exciting journey.
            </p>
            &nbsp;
            <p className="text-lg">
              By enrolling in our pilot program, you\'ll have exclusive access to
              firsthand experience the future of car buying.
            </p>
            &nbsp;
            <h2 className="text-xl font-semibold mb-4">Benefits:</h2>
            <ul className="list-disc pl-6">
              <li>Seamless Car Shopping</li>
              <li>Exclusive Access to upkeep benefits</li>
              <li>Convenience of scheduled maintenance</li>
              <li>Competitive and ongoing insurance benefits</li>
              <li>Manage insurance claims and financing</li>
            </ul>
          </div>
          <div className="w-px bg-green-500"></div>
          <div className="flex flex-col justify-between flex-1 pl-8 gap-4">
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
