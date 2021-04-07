
var result = ifUserNotNew();

if (result === null) {
  var userName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
  var userDate = new Date();
  localStorage.setItem('myName', userName);
  localStorage.setItem('myDate', userDate);
} 
else {
    var date = localStorage.getItem('myDate');
  alert(
    `Добрый день, ${result}! Давно не виделись. В последний раз вы были у нас ${date}`
  );
  var curDate = new Date();
  localStorage.setItem('myDate', curDate);
}

function ifUserNotNew() {
    let name = localStorage.getItem('myName');
    let result;

    if (name !== null) {
        result = name;
    }
    else {
        result = null;
    }
    return result;
}


