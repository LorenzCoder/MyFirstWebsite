var copyJahr = document.getElementById('copyJahr');
var date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) {
    copyJahr.innerHTML = '01' + '.' + '0' + month + '.' + year;
}
else {
    copyJahr.innerHTML = '01' + '.' + month + '.' + year;
}