
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

    let li = document.createElement('li');
    li.classList.add('dog-link');
    li.appendChild(aTag);

    dogsArr.push(li);

  }
}

