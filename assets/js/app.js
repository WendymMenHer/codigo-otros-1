const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');// Le agregué el # para que se acoplara a los datos.
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {//Le agregué el async para que funcionara el await
  $n.textContent = 'cargando...';
 try{ // Le agregué el try - catch como me acordé que lo usamos.
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`;// A los tres les cambié la comilla sencilla a el acento al revéz porque aparecía solo como texto y no agarraba el ${}
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err){
  handleError(err);
}}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Le cambié de n a $n para que fuera la misma constante
}

displayUser('stolinski').catch(handleError(err));