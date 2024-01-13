/* since zustand is lightweight, no need to create providers and easy to use
  I prefered to use instead of Context or Redux
*/
import { create } from 'zustand';

// This type is directly related to the store so it is not exported from a type file
export type InputNumberT = 'inputOne' | 'inputTwo' | 'inputThree' | 'inputFour';

type BarGraphInputStoreT = {
  inputOne: number;
  inputTwo: number;
  inputThree: number;
  inputFour: number;
  setInput: (inputNumber: InputNumberT, value: number) => void;
  clearInputs: () => void;
};

const useBarGraphInputStore = create<BarGraphInputStoreT>()((set) => ({
  // I decided it is easier to consume the data separately
  // if the number increases this should be definitely an input object
  inputOne: 4,
  inputTwo: 3,
  inputThree: 2,
  inputFour: 1,

  setInput: (inputNumber, value) =>
    set((state) => ({
      ...state,
      [inputNumber]: value,
    })),

  clearInputs: () =>
    set(() => ({
      inputOne: 0,
      inputTwo: 0,
      inputThree: 0,
      inputFour: 0,
    })),
}));

export default useBarGraphInputStore;
