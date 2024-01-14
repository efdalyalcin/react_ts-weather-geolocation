import NumberInputField from '@/components/NumberInputField';
import useBarGraphInputStore from '@/store/barGraphInputStore';
import { InputFieldPropsT } from '@/types/inputFieldProps';

export default {
  title: 'Components/NumberInputField',
  component: NumberInputField,
  argTypes: {
    label: { control: 'text' },
    storeId: { control: 'text' },
  },
};

const Template = (args: InputFieldPropsT) => {
  // Simulating the store usage
  useBarGraphInputStore();

  return <NumberInputField {...args} />;
};

export const InputOne = Template.bind(null);
InputOne.args = {
  label: 'First bar:',
  storeId: 'inputOne',
};

export const InputTwo = Template.bind(null);
InputTwo.args = {
  label: 'Second bar:',
  storeId: 'inputTwo',
};

export const InputThree = Template.bind(null);
InputThree.args = {
  label: 'Third bar:',
  storeId: 'inputThree',
};

export const InputFour = Template.bind(null);
InputFour.args = {
  label: 'Fourth bar:',
  storeId: 'inputFour',
};
