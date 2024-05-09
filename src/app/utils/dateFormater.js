import moment from 'moment';

export const dateFormater = (date) => {
  return moment(date).format('DD-MM-YYYY');
};
