function PhoneNumber(phone){
    const fixedtring = phone.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedtring.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedtring.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedtring.match(/ (?<=\)).+ /)[0].replace(/-/g,"")
}

console.log(new PhoneNumber("+55 (44) 9 9922-8284"))