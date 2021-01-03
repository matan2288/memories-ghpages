import React, { useState , createContext } from "react";
import axios from 'axios'
import {deleteListing} from '../Api/api.js'


export const Memory = createContext();

export const MemoryProvider = ({ children }) => {

//Memories Array
const memoryCollection = []

//Array state
const [memories, setQuestions] = useState(memoryCollection);

//remove a question
const removeQuestion = async (id) => {
      
  //*DELETE LISTING FROM API  id = idHolder in deleteListing(idHolder)
    deleteListing(id)
        //! DO NOT DELETE
        setQuestions((memories) => memories.filter((q) => q.id !== id));
  };

  return (
    <Memory.Provider value={{memories,setQuestions,removeQuestion}}>
      {children}
    </Memory.Provider>
  );
};
