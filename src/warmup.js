
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    const pTag = document.createElement('p');
    pTag.innerHTML = string;
    htmlElement.appendChild(pTag);

};

htmlGenerator('Party Time.', partyHeader);