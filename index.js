


showNotes();

let addbtn= document.getElementById('addbtn');

 addbtn.addEventListener("click",function(e)
 {

   
    let addtxt=document.getElementById("addtxt");
    let addTitle=document.getElementById("addtitle");
    let notes =localStorage.getItem("notes");
      if(notes == null)
      {
     
       notesObj = [];
      }
      else{
        notesObj = JSON.parse(notes);
      }
   let myObj={
     title:addTitle.value, 
     text:addtxt.value
      }
   
     notesObj.push(myObj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value='';
   addTitle.value='';
     showNotes();
   
  })
 

 
  
  // function to show note
     function showNotes()
     {
     let notes =localStorage.getItem("notes");
     if(notes == null)
     {
   
      notesObj = [];
      }
  else{
       notesObj = JSON.parse(notes);
     }
   let html ="";     
 notesObj.forEach(function(element,index)
 {
     html+=`<div class="card card1 my-3 mx-3" style="width: 18rem;">
      
     <div class="card-body">
     <h5 class="card-title">${element.title}</h5>  
     <p class="card-text">${element.text}</p>
       <button id ="${index}"onclick='deleteNote(this.id)' class="btn btn-primary">Delete notes</button>
     </div>
   </div>`;
   });    
   let noteShow=document.getElementById('notes');
    if(notesObj!=0)
    {
         noteShow.innerHTML=html;
    }
     else
       noteShow.innerText='no note to show';
}

 

//delete notes 
  function deleteNote(index)
    {
   notesObj.splice(index,1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

   } 

 
   var search = document.getElementById('input');
 
    let note=document.getElementsByClassName('card1');
   
    search.addEventListener('input',function()
    {
 
    Array.from(note).forEach(function(element)
    {

       let cardMatch = element.getElementsByTagName("p")[0].innerText;  
        if(cardMatch.includes(search.value))
       {
          element.style.display="block";
       }
      else{
        element.style.display = "none";
    }  
      
      
    })

  })









