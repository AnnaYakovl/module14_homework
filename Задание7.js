const btn = document.querySelector('.j-btn');
const input = document.querySelector('.input');
const resultNode = document.querySelector('.j-result');

function createToDoList(data) {
  var list = '';

  if (data.length === 0)
  {
    alert("«Пользователь с указанным id не найден».");
  }
  else {
    
    for (var key in data)
    {
      const task = data[key]["title"];
      const completed = data[key]["completed"];
     
      if (completed)
      {
           list += (`<li style="text-decoration: line-through">${task}</li>`);     
      }
      else
      {
           list += (`<li>${task}</li>`);                
      }
    }    
  
    resultNode.innerHTML = list;
  }        
}

btn.addEventListener('click', () => {
  const link = `https://jsonplaceholder.typicode.com/users/${input.value}/todos`;
  // Делаем запрос за данными
  fetch(link)
    .then((response) => {
      // Объект ответа на запрос
      //console.log('response', response);
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      //console.log('result', result);
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      console.log(data);
      createToDoList(data);
    })
    .catch(() => { console.log('error') });
});