export default function setDocumentTitle(title) {
  if (title === '') {
    document.title = 'Rugby News Board';
  } else {
    document.title = `${title} | Rugby News Board`;
  }
}
