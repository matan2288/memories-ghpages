import axios from "axios"


export const createList = (memoriesListDB) => fetch("http://localhost:5001/create-new-memory", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },//= memoriesListDB and empty slot for thisListGoesToDB 
     //(from MemoryForm component) to fit in
  body: JSON.stringify(memoriesListDB) 
  //! memoriesListDb =  thisListGoesToDB (the object sent from the form)
})  


export const deleteListing = async (idHolder) =>{
    /**DELETE METHOD */
    const options =  await{
      url: 'http://localhost:5001/delete',
      method: 'DELETE',
      data: idHolder
    };
    
    axios(options)
    .then(response => {
      console.log('A listing got deleted!')
    }).catch((err)=>{console.log(err)})
    

}

export const getCollection = (memoriesListDB) => fetch(`http://localhost:5001/create-new-memory`).then(res => res.json())