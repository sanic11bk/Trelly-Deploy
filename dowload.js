fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  headers: {
    'api-key': '485015b3-dc68-4e68-95d3-7548b0ec058d',
  }
})
.then(res => {
  console.log('=== Заголовки ответа ===');
  for (const [key, value] of res.headers.entries()) {
    console.log(`${key}: ${value}`);
  }

  console.log('Статус:', res.status, res.statusText);

  return res.text(); // сначала как текст, чтобы увидеть "сырое" тело
})
.then(body => {
  console.log('=== Тело ответа ===');
  console.log(body);

  try {
    const data = JSON.parse(body);
    console.log('=== JSON ===');
    console.log(data);
  } catch (e) {
    console.warn('Не удалось распарсить как JSON');
  }
})
.catch(err => console.error('Ошибка запроса:', err));
