
let number;
//генерим рандомное число
function generateNumber()
{
  number = Math.ceil(Math.random() * 100);
  console.log(number);
}

// Создаем promise
const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        generateNumber();
        if (number % 2 == 0) {
            resolve(`Завершено успешно. Сгенерированное число — ${number}`);
        }
        else {
            reject(`«Завершено с ошибкой. Сгенерированное число — ${number}`);
        }
    }, 3000);
});
        
  // Выполняем promise
myPromise
.then((result) => {
  console.log('Обрабатываем resolve', result);
})
.catch((error) => {
  console.log('Обрабатываем reject', error);
});