let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("input-btn")
let saveTabBtn = document.getElementById("saveTab-btn")
const deleteBtn = document.getElementById("delete-btn")
let unOrderedList = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("saveTab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for (let i =0; i < leads.length; i++){
       listItems += 
       `<li>
            <a target='_blank' href=${leads[i]}>
                ${leads[i]}
            </a>
       </li>`
    }
     unOrderedList.innerHTML = listItems
 }

 
 saveTabBtn.addEventListener("click", function(){
     
 })

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


saveInput.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})