const API_URL = '/api';

export function createSession({ handle, password }) {
  return fetch(`${API_URL}/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ handle, password }),
  })
  .then((res) => res.json());
}

export function checkSession() {
  return fetch(`${API_URL}/session`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('twitter_clone_token')
    }
  })
  .then((res) => res.status === 200);
}
