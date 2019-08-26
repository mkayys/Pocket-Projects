
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if(htmlElement.children) {
        let childArr = Array.from(htmlElement.children);
        for (let i=0; i < childArr.length; i++) {
            htmlElement.removeChild(childArr[i]);
        }
    }
    
    const pTag = document.createElement('p');
    pTag.innerHTML = string;
    htmlElement.appendChild(pTag);

};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation', partyHeader);