const yearList = [];
var beginYear = 1990;
var currentYear = new Date().getFullYear();
while (beginYear <= currentYear) {
  yearList.push(beginYear);
  beginYear ++;
}
export default yearList;