function Movie(title, description, rate, img, date, time) {
    this.title = title
    this.description = description
    this.img = img
    this.rate = rate
    this.date = date
    this.time = time
    this.creatRate = function (rate) {
        this.rate = this.rate + 0.1
        return this.rate;
    }
}

const moviesInfo = [];
moviesInfo.push(new Movie('avengers:Endgame', 'Lorem ipsum.', 8.8, 'img.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('Hobbs & show', 'Lorem ipsum.', 9.2, 'img_1.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('John Wick 3', 'Lorem ipsum.', 8.8, 'img_3.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('Deadpool 2', 'Lorem ipsum.', 8.1, 'img_2.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('The Lion King', 'Lorem ipsum.', 7.4, 'img_4.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('Mad Max: Fury Road', 'Lorem ipsum.', 8.1, 'img_5.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('Aquaman', 'Lorem ipsum.', 9, 'img_6.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))
moviesInfo.push(new Movie('Mission Impossible', 'Lorem ipsum.', 7.8, 'img_7.png', 'TUE 4 JULY_05:00PM', '2HR 13MIN'))

const cardView = (cardInfo) => {
    return ` 
    <div class="card" >
        <img class="photo" src=${cardInfo.img}/>
         <div class="card--text">
            <span class="title">${cardInfo.title}</span ><span class="mark">/10</span><span class="rate" onclick="creatRate(this)">${cardInfo.rate}</span>
            <p class="dec">${cardInfo.description}</p>
            <span class="date">${cardInfo.date}</span><span class="time" >${cardInfo.time}</span>
        </div>
    </div>
`
}


const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    })
}


const cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = generateCards(moviesInfo).join(' ')


function onSearch(element) {
    const query = element.value;
    const filteredCards = moviesInfo.filter(item => {
        return item.title.includes(query) || item.description.includes(query)
    })
    cardContainer.innerHTML = generateCards(filteredCards).join(' ')

}