
function Movie(title,description,img){
    this.title=title;
    this.description=description;
    this.rate=rate;
    this.img=img;
}
const  moviesInfo=[];
moviesInfo.push(new Movie('avengers','good','img.png'))
moviesInfo.push(new Movie('css','nice','img.png'))
moviesInfo.push(new Movie('html','exelent','img.png'))
moviesInfo.push(new Movie('react','hard','img.png'))

const  generateCards=(cardInfoList)=>{
    return  cardInfoList.map(cardInfo=>{
        return cardView(cardInfo)
    });}

const  cardContainer= document.getElementById('container')
cardContainer.innerHTML=generateCards(moviesInfo)


const cardView=(cardInfo)=>{
return` 
    <div class="card" >
        <img class="photo" src=${cardInfo.img}/>
         <div>
            <h3 class="title">${cardInfo.title}</h3>
            <p class="dec">${cardInfo.description}</p>
        </div>
    </div>
`
}


function  onSearch(element){
    const query= element.value;
     const filterCards= query.filter(item=>{
          return item.title.includes(query)||item.description.includes(query)
      })
    cardContainer.innerHTML=generateCards(filterCards)

}