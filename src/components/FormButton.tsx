import useBarGraphInputStore from '@/store/barGraphInputStore';
import NumberInputField from './NumberInputField';
import { InputFieldPropsT } from '@/types/inputFieldProps';
import { useState } from 'react';
import cn from 'classnames';

const propDataForInputField: InputFieldPropsT[] = [
  { label: 'First bar: ', storeId: 'inputOne' },
  { label: 'Second bar: ', storeId: 'inputTwo' },
  { label: 'Third bar: ', storeId: 'inputThree' },
  { label: 'Fourth bar: ', storeId: 'inputFour' },
];

const buttonClassNames =
  'py-2 px-5 rounded-lg text-white transition-colors w-max m-2';

export default function FormButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { clearInputs } = useBarGraphInputStore();

  const handleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="sticky top-0 flex items-end flex-col mr-2 mt-2">
      <button
        type="button"
        className={cn(buttonClassNames, ' bg-blue-700 hover:bg-blue-500')}
        onClick={handleFormVisibility}
      >
        Generate Chart
      </button>
      <div
        className={cn(
          'absolute right-0 sm:right-2 top-16 z-10 opacity-100 w-max p-4 border border-slate-500 rounded-lg',
          'transition-transform duration-300 bg-white',
          {
            '-translate-y-96': !isFormVisible,
          }
        )}
      >
        <form className="flex flex-col gap-1 ">
          {propDataForInputField.map((data) => (
            <NumberInputField
              label={data.label}
              storeId={data.storeId}
              key={data.storeId}
            />
          ))}
        </form>

        <div className="flex justify-around mt-4">
          <button
            type="button"
            onClick={clearInputs}
            className={cn(buttonClassNames, ' bg-red-500 hover:bg-red-400')}
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleFormVisibility}
            className={cn(buttonClassNames, ' bg-slate-500 hover:bg-slate-400')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
