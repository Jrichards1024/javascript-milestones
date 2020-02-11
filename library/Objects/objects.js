function personalInfo() {
  //This is how you initialize an object
  let personData = {}
  //In order to add keys to a dictionary you use the following format
  personData.firstName = 'Jean-Luc'
  personData.lastName = 'Picard'
  personData.age = 79
  console.log(personData)
}
personalInfo()

function daysPerMonth() {
  let daysInMonth = {};
  //In order to add keys to a dictionary you use the following format
  daysInMonth.January = 31;
  daysInMonth.February = 29;
  daysInMonth.March = 31;
  daysInMonth.April = 30;
  daysInMonth.May = 31;
  daysInMonth.June= 30;
  daysInMonth.July = 31;
  daysInMonth.August = 31;
  daysInMonth.September = 30;
  daysInMonth.October = 31;
  daysInMonth.November = 30;
  daysInMonth.December = 31;
  console.log(daysInMonth)
}
daysPerMonth()
