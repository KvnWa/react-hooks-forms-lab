import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({props, onItemFormSubmit }) {

  const [ input, setInput ] = useState('')
  const [ category, setCategory ] = useState('Produce')

  function addInput(event) {
    setInput(event.target.value)
  }

  function addCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({id: uuid(), name: input, category: category})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={addCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
