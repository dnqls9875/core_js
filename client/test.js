// const defaultOptions = {
//   method: 'GET',
//   body: null,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// async function getData(options) {
//   const { url, ...rest } = {
//     ...defaultOptions,
//     ...options,
//     headers: {
//       ...defaultOptions.headers,
//       ...options.headers,
//     },
//   };

//   const response = await fetch(url, rest);

//   const data = await response.json();

//   document.body.insertAdjacentHTML(
//     'beforeend',
//     `
//     <div class="pokemon">
//       <h2>${data.name}</h2>
//       <img src="${data.sprites.front_default}" alt="${data.name}" />
//     </div>
//   `
//   );

//   console.log(data);

//   return data;
// }

// const monster = await getData({
//   url: 'https://pokeapi.co/api/v2/pokemon/9',
// });
