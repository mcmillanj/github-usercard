/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/





/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/




/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
/* *******************************************************************
first attempt wrong

//  import axios from 'axios';
// const entryPoint = document.querySelector('div.cards');
// axios.get(`https://api.github.com/users/mcmillanj`)
// .then(response => {
//   const card = githubCard(response.data)
//   const dom = document.querySelector(`.cards`)
//   document.appendChild(gitHubCardMaker(card)
// })
// .catch(err => {
//   console.log(error);
// })


************************************************************************
*/

import axios from 'axios'



const gitHudInfo = (user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(({data})=> {
   const entryPoint = document.querySelector('.cards') 
   entryPoint.appendChild(gitHubCardMarker({data}));
 })
   .catch(error => console.log(error));
}

const followersArray = [
  'jlbevans',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(user => {
  gitHudInfo(user)
})
/***********************************************************************************
 / const followersArray = [];
// const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
// followersArray.forEach(user => {
//   axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//           for(let i =0; i < response.data.length; i++){
//           let card = gitHubCardMarker(response.data[i])
//             entryPoint.appendChild(card);
//           }
//         })
//         .catch(error => {
//           console.log(error)
//         })
// }) 
 * 
  
 **/
function gitHubCardMarker({data})
 {
  
  const user = document.createElement('div')
  const userProfile = document.createElement('img')
  const cardInfo = document.createElement('div')
  const Name = document.createElement('h3')
  const uLogin = document.createElement('p')
  const uLocation = document.createElement('p')
  const id = document.createElement('p')
  const address = document.createElement('a')
  const uFollowers = document.createElement('p')
  const uFollowing = document.createElement('p')
  const userBio = document.createElement('p')
  
  
 
   
  
  user.classList.add('card')
  cardInfo.classList.add('card-info')
  Name.classList.add('name')
  uLogin.classList.add('user')
  Name.textContent = `${data.name}`;
  uLogin.textContent = `${data.login}`;
  uLocation.textContent = `Location: ${data.location}`;  
  address.textContent = `Profile:${data.url}`;
  uFollowers.textContent = `Followers: ${data.followers}`;
  uFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = `Bio: ${data.bio}`;
  
  user.appendChild(userProfile)
  user.appendChild(cardInfo)
  cardInfo.appendChild(uLogin)
  cardInfo.appendChild(Name)
  cardInfo.appendChild(uLocation)
  cardInfo.appendChild(id)
  cardInfo.appendChild(uFollowers)
  cardInfo.appendChild(uFollowing)
  cardInfo.appendChild(userBio)
  id.appendChild(address)
  
  return user
}
