function getToken() {
  return process.env.ADMIN_TOKEN === undefined ? '12ffbb6' : process.env.ADMIN_TOKEN;
}

function getData(url, callback) {
  fetch(url)
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
}

export function editNews(news, callback) {
}

export function highlightNews(news, callback) {
}

export function deleteNews(newsId, callback) {
}

export function recoverNews(newsId, callback) {
}
