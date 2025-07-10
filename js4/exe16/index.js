const dayjs = require('dayjs')
dayjs().format()

function birthday(date){
    dayjs('00-00-1970', 'DD/MM/YYYY')

    const birthday = dayjs(date)
    const today = dayjs()
    
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const missingDays = nextBirthday.diff(today, 'days') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Seu proximo aniversario sera na data ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${missingDays} dias`)
}

birthday("1973-07-15")