// const jwebb = document.querySelector('.jwebb');

fetch('https://api.jwst-hub.com/track')
.then(response => response.json())
.then(webbData => {
  let distance = document.createElement('h2');
  distance.innerText = `Distance from Earth: ${webbData['distanceEarthKm']} kilometers`
  let time = document.createElement('h3');
  time.innerText = `Time since Launch: ${webbData['launchElapsedTime']}`
  document.body.appendChild(distance)
  document.body.appendChild(time)
});



