const API_URL = '/api';

export function getTweets() {
  return fetch(`${API_URL}/tweets`)
  .then((res) => res.json());
}

export function postTweet(message) {
  return fetch(`${API_URL}/tweets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('twitter_clone_token')
    },
    body: JSON.stringify({ message })
  })
  .then((res) => res.json());
}
