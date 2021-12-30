export default class Api {
 constructor() {
  this.url = process.env.REACT_APP_API_URL;
  this.get = this.get.bind(this);
  this.post = this.post.bind(this);
  this.put = this.put.bind(this);
  this._delete = this._delete.bind(this);
 }
 get(urlPath) {
  const requestOptions = {
   method: 'GET'
  };
  return fetch(this.url + urlPath, requestOptions).then(this.handleResponse);
 }

 post(urlPath, body) {
  const requestOptions = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(body)
  };
  return fetch(this.url + urlPath, requestOptions).then(this.handleResponse);
 }

 put(urlPath, body) {
  const requestOptions = {
   method: 'PUT',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(body)
  };
  return fetch(this.url + urlPath, requestOptions).then(this.handleResponse);
 }

 // prefixed with underscore because delete is a reserved word in javascript
 _delete(urlPath) {
  const requestOptions = {
   method: 'DELETE'
  };
  return fetch(this.url + urlPath, requestOptions).then(this.handleResponse);
 }

 handleResponse(response) {
  return response.text().then(text => {
   const data = text && JSON.parse(text);

   return data;
  });
 }
}