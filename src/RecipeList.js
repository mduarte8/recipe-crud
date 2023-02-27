import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipeHeaders, recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // console.log("recipeheaders is", recipeHeaders);
  // console.log("recipes is", recipes);

  const deleteRecipeHandler = (indexToDelete) => {
    deleteRecipe(indexToDelete);
  };

  return (
    <div className="recipe-list">
      <table>
        <colgroup>
          {/* <col span="3" style="width: 10%;" />
          <col span="2" style="width: 30%" />
          <col span="1" style="width: 10%" /> */}
        </colgroup>
        <thead>
          <tr key="0">
            {recipeHeaders.map((key) => {
              return <th> {key} </th>;
            })}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, rowID) => (
            <RecipeRow
              recipe={recipe}
              rowID={rowID}
              deleteRecipe={deleteRecipeHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
