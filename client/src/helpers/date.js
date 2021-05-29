import moment from 'moment'

export const dateParser = (date)=>{
return moment(new Date(date)).format('lll')
}

