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
