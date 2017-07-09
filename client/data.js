function getData(url, callback) {
  fetch(url)
    .then((response) => { return response.json(); })
    .then((json) => { callback(json); });
}

function postData(url, form, callback) {
  fetch(url, {
  	method: 'POST',
  	body: JSON.stringify(form),
  	headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => { return response.json(); })
    .then((json) => { callback(json); });
}

export function getHomePage(callback) {
  getData('/api/index', callback);
}

export function getNewsByChannel(channelId, pageNum, callback) {
  getData(`/api/list?channel=${channelId}&page=${pageNum}`, callback);
}

export function getNewsByEvent(eventId, pageNum, callback) {
  getData(`/api/list?event=${eventId}&page=${pageNum}`, callback);
}

export function getNewsItem(newsId, callback) {
  getData(`/api/news/${newsId}`, callback);
}

export function translateWord(word, callback) {
  getData(`/api/translate/${word}`, callback);
}

export function createNews(news, callback) {
  postData(`/api/create`, news, callback);
}

export function updateNews(newsId, news, callback) {
  postData(`/api/update/${newsId}`, news, callback);
}

export function highlightNews(newsId, callback) {
  postData(`/api/highlight/${newsId}`, null, callback);
}

export function unhighlightNews(newsId, callback) {
  postData(`/api/unhighlight/${newsId}`, null, callback);
}

export function deleteNews(newsId, callback) {
  postData(`/api/delete/${newsId}`, null, callback);
}
