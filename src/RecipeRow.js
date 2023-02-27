import React from "react";

function RecipeRow({ recipe, rowID, deleteRecipe }) {
  //   const deleteButtonHandler = (event) => {
  //     console.log("deleteID is", event.target.id);
  //     deleteRecipe(event.target.id);
  //   };
  const deleteRecipeHandler = (event) => {
    const indexToDelete = event.target.id;
    // console.log("recipeRow index to delete is", indexToDelete);
    deleteRecipe(indexToDelete);
  };

  //   console.log(recipe.photo);
  return (
    <React.Fragment>
      <tr key={rowID}>
        <td>
          <p>{recipe.name}</p>
        </td>
        <td>
          <p>{recipe.cuisine}</p>
        </td>
        <td>
          <img src={`${recipe.photo}`} />
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button id={rowID} name="delete" onClick={deleteRecipeHandler}>
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default RecipeRow;
