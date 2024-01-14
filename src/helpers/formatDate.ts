import moment from 'moment';

export default function formatDate(unixDateSeconds: number): string {
  const milisecondDate = unixDateSeconds * 1000;
  return moment(milisecondDate).format('DD.MM');
}
