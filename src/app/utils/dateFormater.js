import moment from 'moment';

export const dateFormater = (date) => {
  return moment(String(date)).format("ll")
}