// 1. Получение токена (заменить на ваш токен)
const yandexWikiToken = 'y0_AgAAAAB62vn2AAY5wwAAAAEc0puFAAD63d0S6WVLcKPXeZKrwBvuDJdXDA'; // Вставьте сюда ваш токен

// 2. Функция для запроса контента с API Яндекс Wiki
async function fetchWikiContent(token) {
    const url = 'https://api.wiki.yandex.net/v2/pages/YOUR_PAGE_ID'; // Замените на id вашей страницы
     try{
        const response = await fetch(url, {
         headers: {
             'Authorization': `Bearer ${token}`,
             'Accept': 'application/json'
         }
     });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
     }
     catch(error){
        console.error("Ошибка при запросе к API Yandex Wiki:", error);
        return null;
     }
}

// 3. Функция для отображения контента
function displayWikiContent(content) {
  const appDiv = document.getElementById('app');
  if (content && content.content){
        appDiv.innerHTML = content.content.html;
    }
  else{
    appDiv.innerHTML = '<p>Ошибка при загрузке контента</p>'
  }
}

// 4. Основная логика
async function main() {
  const content = await fetchWikiContent(yandexWikiToken);
   displayWikiContent(content);

}

// Запуск основной логики
main();
