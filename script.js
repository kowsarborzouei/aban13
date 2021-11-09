
function Movie(title,description,rate,img){
    this.title=title;
    this.description=description;
    this.rate=rate;
    this.img=img;
}
const  moviesInfo=[];
moviesInfo.push(new Movie('avengers','',8.7,''))
moviesInfo.push(new Movie('avengers','',8.7,''))
moviesInfo.push(new Movie('avengers','',8.7,''))
moviesInfo.push(new Movie('avengers','',8.7,''))


const cardView=(cardInfo)=>{
return` <div id="card" >
        <img src="img.png">
    </div>`
}

const  generateCards=(cardInfoList)=>{
   return  cardInfoList.map(cardInfo=>{
        return cardView(cardInfo)
    });}
const  cardContainer= document.getElementById('container')
cardContainer.innerHTML=generateCards(moviesInfo)


function  onSearch(element){
    const query= element.value;
     const filterCards= query.filter(item=>{
          return item.title.includes(query)||item.description.includes(query)
      })
    cardContainer.innerHTML=generateCards(filterCards)

}