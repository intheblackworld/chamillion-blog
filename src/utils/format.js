import moment from 'moment'

export const formatChineseDateTime = (val) => moment(val).format('YYYY年MM月DD日 HH:mm:ss')

export const formatChineseDate = (val) => moment(val).format('YYYY年MM月DD日')
  