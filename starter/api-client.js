var API_ROOT = 'https://api.noopschallenge.com';

function getJson(path) {
  return fetch(API_ROOT + path, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    }
  }).then(
    function(r) {
      if (!r.ok) throw new Error('Error fetching melody from ' + path + '.');
      return r.json();
    }
  );
}
