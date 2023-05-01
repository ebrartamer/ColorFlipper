const btn = document.querySelector('.btn')
const colors=["green", "red", "blue", "purple", "pink"]
const color=document.querySelector('.color') 

btn.addEventListener('click',function(){
    //0-4 arası sayı elde edelim
const randomNumber=getRandomNumber()


document.body.style.backgroundColor=colors[randomNumber]
color.textContent=colors[randomNumber]

})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length) 
    //Math.random->0 ve 1 arasında random sayi üretir
    //Math.floor->bir sayının en yakın tam sayıya yuvarlanmasını sağlar.
}