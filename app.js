
function loadCard() {
    var gridContainer = document.querySelector('.grid-container');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => { 
        for (var index=0; index < 9 ; index++) {
            gridContainerChildren += `
                <div class="card">
                    <div class="card-img">
                        <img src="${data[index].image}" alt="blog" />
                    </div>
                    <div class="date">
                        <p>${data[index].date}</p>
                        <img src="./images/more 1.png" alt="menu" />
                    </div>
                    <div class="card-text">${data[index].text}</div>
                </div>
            `
        }
        gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}

function loadOnClick(value) {
    var gridContainer = document.querySelector('.grid-container');
    var gridContainerChildren = "";
    fetch('./card_data.json').then(response => response.json())
    .then(data => {
        for (var index=(value - 1) * 9; index < value * 9 ; index++) {
            gridContainerChildren += `
                <div class="card">
                    <div class="card-img">
                        <img src="${data[index].image}" alt="blog" />
                    </div>
                    <div class="date">
                        <p>${data[index].date}</p>
                        <img src="./images/more 1.png" alt="menu" />
                    </div>
                    <div class="card-text">${data[index].text}</div>
                </div>
            `
        }
       gridContainer.innerHTML = gridContainerChildren;
    })
    .catch(err => console.log(err));
}


loadCard();

