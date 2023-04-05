using ApiDataModels.RecipeModels;

namespace PantrySquirrel.Services
{
    public interface IRecipeSearch
    {
        Task<RecipeSearchResults> GetRecipes(string userIngredientsString);
    }
}