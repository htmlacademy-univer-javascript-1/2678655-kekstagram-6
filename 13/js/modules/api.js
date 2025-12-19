import { ResponceMessage, Route } from '../data/data.js';

async function load(url, route, errorText, method = 'GET', body = null){
  const response = await fetch(`${url}${route}`, { method, body });
  if (!response.ok) {
    throw new Error(errorText);
  }
  const data = await response.json();
  return data;
}

export const getData = (url) => load(url, Route.GET_DATA, ResponceMessage.GET_DATA);
export const sendData = (url, body) => load(url, Route.SEND_DATA, ResponceMessage.SEND_DATA, 'POST', body);
