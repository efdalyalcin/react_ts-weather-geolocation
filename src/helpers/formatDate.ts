import moment from 'moment';

export default function formatDate(unixDateSeconds: number): string {
  const millisecondDate = unixDateSeconds * 1000;
  return moment(millisecondDate).format('DD.MM');
}
