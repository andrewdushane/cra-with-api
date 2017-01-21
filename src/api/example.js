export const loadMessage = () => fetch('/api', {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'GET',
}).then(response => response.json());
