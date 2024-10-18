import React, { useState } from "react";
import accordionData from "./accordionData";

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [selectMultiData, setSelectMultiData] = useState<number[]>([]);

  const handleClick = (id: number) => {
    let cpyMutiple = [...selectMultiData];
    const findIndexOfCurrentId = cpyMutiple.indexOf(id);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(id);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    setSelectMultiData(cpyMutiple);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="flex justify-center">
        <button
          onClick={() => setEnableMultiSelect(!enableMultiSelect)}
          className="mb-4 px-4 py-2 bg-blue-500  text-white rounded-md hover:bg-blue-600 transition"
        >
          {enableMultiSelect
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>
      </div>
      <div className="space-y-4">
        {accordionData.map((accordion) => (
          <div
            key={accordion.id}
            onClick={() =>
              enableMultiSelect
                ? handleClick(accordion.id)
                : setSelected(accordion.id === selected ? 0 : accordion.id)
            }
            className="p-6 border rounded-md cursor-pointer transition  w-96"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">{accordion.title}</h1>
              <span className="text-xl font-bold">+</span>
            </div>
            {(enableMultiSelect
              ? selectMultiData.includes(accordion.id)
              : selected === accordion.id) && (
              <div className="mt-4 p-4 border-t border-gray-300 bg-gray-50">
                <p className="text-gray-700">{accordion.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
