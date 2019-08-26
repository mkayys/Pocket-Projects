
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


const dogLinkCreator = () => {
  let dogsArr = [];

  for(let i = 0; i < Object.keys(dogs).length; i++) {
    let aTag = document.createElement('a');
    aTag.innerHTML = Object.keys(dogs)[i];
    aTag.setAttribute('href', Object.values(dogs)[i]);

    // links open to new tab
    aTag.setAttribute('target', '_blank');

    let li = document.createElement('li');
    li.classList.add('dog-link');
    li.appendChild(aTag);

    dogsArr.push(li);
  }

  return dogsArr;
};

const attachDogLinks = () => {

  const ul = document.querySelector('.drop-down-dog-list');

  const dogLinks = dogLinkCreator();

  for (let i=0; i < dogLinks.length; i++) {
    ul.appendChild(dogLinks[i]);
  }
};


attachDogLinks();

const handleEnter = () => {
  const dogLinks = document.querySelectorAll('.dog-link');

  dogLinks.forEach((dog) => dog.classList.remove('hide'));
};

const handleLeave = () => {
  const dogLinks = document.querySelectorAll('.dog-link');

  dogLinks.forEach((dog) => dog.classList.add('hide'));
};

const dropDown = document.querySelector('.drop-down-dog-nav');
dropDown.addEventListener('mouseenter', handleEnter);
dropDown.addEventListener('mouseleave', handleLeave);