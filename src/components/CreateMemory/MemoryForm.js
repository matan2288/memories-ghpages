import React, { useState, useContext } from "react";
import { Memory } from "../Context/MemoryContext.js";
import MemoryCard from "../MemoryCardDesign/MemoryCard";
import "./MemoryFormStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const MemoryForm = () => {
  //! Beginning of the function

  const classes = useStyles();

  const memoryFromContext = useContext(Memory);

  //** USE FORM *//
  const { register, handleSubmit } = useForm();

  const onSubmit = async (thisListGoesToDB) => {
    // console.log(thisListGoesToDB.title)

    const id = thisListGoesToDB.title;

    if (
      thisListGoesToDB.img == "" ||
      thisListGoesToDB.title == "" ||
      thisListGoesToDB.title.date == ""
    ) {
      alert("Please fill the whole form!");
      return false;
    } else
      memoryFromContext.setQuestions((memories) => [
        ...memories,
        {
          id: id,
          ...thisListGoesToDB,
        },
      ]);

    // await   createList(thisListGoesToDB) //* THIS ALSO WORKS

    //AXIOS PROPER SETTING
    const options = {
      url: "http://localhost:5001/create-new-memory",
      method: "POST",
      data: thisListGoesToDB,
    };

    axios(options)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-main-div">
      <div id="wrapper">
        <div className="form-container">
          <p id="form-title">Add your memory here</p>
          <form className="inputs-container" onSubmit={handleSubmit(onSubmit)}>
            <label for="Password" class="labels">
              IMG:
            </label>
            <input
              placeholder="Paste your image adress here!"
              className="input-design"
              id="img"
              name="img"
              ref={register}
            />

            <label for="Password" class="labels">
              Title:
            </label>
            <input
              placeholder="Header"
              className="input-design"
              id="title"
              name="title"
              ref={register}
            />

            <label for="Password" class="labels">
              Date:
            </label>
            <input
              placeholder="Date"
              className="input-design"
              id="date"
              type="text"
              name="date"
              ref={register}
            />
            {/*         BUTTON!!!         */}
            <button id="Submit" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="card-list-container">
          {memoryFromContext.memories.map((passing) => {
            return (
              <ul>
                <li>
                  <MemoryCard
                    id={passing.title}
                    img={passing.img}
                    title={passing.title}
                    date={passing.date}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemoryForm;
