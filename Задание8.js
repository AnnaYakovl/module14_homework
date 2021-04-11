const btn = document.querySelector('.j-btn');
const pageNumber = document.querySelector('.input1');
const limit = document.querySelector('.input2');
const resultNode = document.querySelector('.j-result');

function checkLimitAndPageNumber(number) {
  var result = false;
  
  if (number >= 1 && number <= 10)
    {
        result = true;
    }
   return result;
}

function createResult(result) {
  
  let pictures = '';
    
    for(var key in result){  
        const imgUrl = result[key].download_url;
        const imgAuthor = result[key].author;
        const HTML = `<div class="card"><img src="${result[key].url}" class="card-image"/><p>${imgAuthor}</p></div>`;    
        pictures += HTML;
    }    
  
    resultNode.innerHTML = pictures;
 }

btn.addEventListener('click', () => {
  var userLimit = limit.value;
  var userPageNumber = pageNumber.value;
  
  if (!checkLimitAndPageNumber(userLimit) && !checkLimitAndPageNumber(userPageNumber))
    {
       alert("Номер страницы и лимит вне диапазона от 1 до 10");
    }
  else if (!checkLimitAndPageNumber(userLimit))
    {
      alert("Лимит вне диапазона от 1 до 10");
    }
  else if (!checkLimitAndPageNumber(userPageNumber))
    {
      alert("Номер страницы вне диапазона от 1 до 10");
    }
  else
    {
        const link = `https://picsum.photos/v2/list?page=${userPageNumber}&limit=${userLimit}`;

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
            //console.log(data);
            createResult(data);
          })
          .catch(() => { console.log('error') });
    }
});