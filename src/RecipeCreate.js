import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("event.target is", event.target);
    // console.log("formData is", formData);
    //
    addRecipe(formData);
    setFormData({ ...initialFormData });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
