// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div');
    const todaysDate = document.createElement('span');
    const heading = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    todaysDate.classList.add('date');
    temp.classList.add('temp');

    todaysDate.textContent = 'MARCH 28, 2020';
    heading.textContent = 'Lambda Times';
    temp.textContent = '98°';

    header.appendChild(todaysDate);
    header.appendChild(heading);
    header.appendChild(temp);

    return header;
}

    const headerContainer = document.querySelector('.header-container');

    headerContainer.appendChild(Header());