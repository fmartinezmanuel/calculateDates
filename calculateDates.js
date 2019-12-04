/*********************************************************************
*
* "Compare two dates and detect if the person is still alive"
*
* Author: Manuel Martinez Fernandez
* Description: One year = 365.25 days,
* Magic number of One year in miliseconds: 3.15576e+10 <- (24 * 3600 * 365.25 * 1000)
*
*********************************************************************/

const data = [
  {name: 'Chris', birthday:'01/01/1986', endDate: '01/03/2019'},
  {name: 'Homer', birthday:'02/31/1912', endDate: '12/12/2019'},
  {name: 'David', birthday:'12/06/1948', endDate: '04/12/2019'},
  {name: 'Kenji', birthday:'01/01/1952', endDate: '04/12/2019'},
  {name: 'Aliba', birthday:'04/09/1990', endDate: '04/12/2019'}
];

const getAge = (birthDate, endDate) => Math.floor((new Date(endDate) - new Date(birthDate).getTime()) / 3.15576e+10);
const maxYearsOfLive = 100;

data.forEach((item)=> getAge(item.birthday, item.endDate)< maxYearsOfLive ? console.log( item.name +' has '+getAge(item.birthday, item.endDate) ) : console.log(item.name+' maybe is Death U_U'));
