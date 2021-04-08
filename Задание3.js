// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
//селектор с годом
const selectNode = document.querySelector('.year');

//рисуем таблицу
function drawTable(data) {
   const table = `<table>
   <tr>
      <td>1кв.</td>
      <td>2кв</td>
      <td>3кв</td>
      <td>4кв</td>
   </tr>
   <tr>
      <td>${data.sales.q1}</td>
      <td>${data.sales.q2}</td>
      <td>${data.sales.q3}</td>
      <td>${data.sales.q4}</td>
   </tr>
</table>`;

   resultNode.innerHTML = table;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    if (selectNode.value === "empty") {
        alert("Выберите, пожалуйста, год");
    }
    else {
        // Создаем экзепляр класса XMLHttpRequest
        let xhr = new XMLHttpRequest();
        // Инициализируем запрос
        xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');

        // Добавляем обрабочик ответа сервера
        xhr.onload = function() {
        
            if (xhr.status != 200) { // HTTP ошибка?
            // Если статус не 200 (указывает, что запрос выполнен успешно),
            // то обрабатываем отдельно
            console.log('Статус ответа: ', xhr.status);
        } else {
            // Ответ мы получаем в формате JSON, поэтому его надо распарсить
            // console.log('Ответ сервера JSON', xhr.response);

            // Парсим и выводим ответ сервера
            const result = JSON.parse(xhr.response);

            var length = 0;
            for(var k in result) if(result.hasOwnProperty(k)) length++;
            
            for (let i = 0; i < length; i++)
            {
            if (result[i].year == selectNode.value)
                {
                    drawTable(result[i]);
                }
            }
        }
        };

        // Отправляем запрос
        xhr.send();
    }
  })



