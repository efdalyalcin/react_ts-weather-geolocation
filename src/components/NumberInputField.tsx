import useBarGraphInputStore from '@/store/barGraphInputStore';
import { InputFieldPropsT } from '@/types/inputFieldProps';

export default function NumberInputField({ label, storeId }: InputFieldPropsT) {
  const { inputOne, inputTwo, inputThree, inputFour, setInput } =
    useBarGraphInputStore();

  const handleValue = () => {
    switch (storeId) {
      case 'inputOne':
        return inputOne;
      case 'inputTwo':
        return inputTwo;
      case 'inputThree':
        return inputThree;
      case 'inputFour':
        return inputFour;
    }
  };

  return (
    <div className="flex justify-between gap-2 items-center">
      <label htmlFor={storeId}>{label}</label>
      <input
        id={storeId}
        type="number"
        value={handleValue()}
        onChange={(e) => setInput(storeId, Number(e.target.value))}
        onFocus={(e) => e.target.select()}
        className="px-4 py-1 rounded border w-60 text-center"
      />
    </div>
  );
}
