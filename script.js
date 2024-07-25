var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpop=document.getElementById("addpopbtn")

addpop.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var can=document.getElementById("cancelbook")
can.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})


//select container,addbook,booktitle,bookauthorinput,desinput

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthorinput=document.getElementById("bookauthorinput")
var desinput=document.getElementById("desinput")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${desinput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()

}