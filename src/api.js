export const fetchPlayList = () => {
  return fetch('/playlist').then(resp => resp.json());
}