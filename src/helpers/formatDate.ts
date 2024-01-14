import moment from 'moment';

export default function formatDate(unixDateSeconds: number): string {
  // assume time is in milliseconds
  if (unixDateSeconds.toString().length > 10) {
    return moment(unixDateSeconds).format('DD.MM');
  }

  const millisecondDate = unixDateSeconds * 1000;
  return moment(millisecondDate).format('DD.MM');
}
