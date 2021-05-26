import moment from 'moment'

export const dateParser = (date)=>{
   return moment(date).format('ll')
}

