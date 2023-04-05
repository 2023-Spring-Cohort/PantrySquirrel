using ApiDataModels.RecipeModels;
using System.Net.Http;

namespace PantrySquirrel.Services
{
    public class RecipeSearch : IRecipeSearch
    {
        private readonly HttpClient client;

        public RecipeSearch(HttpClient client)
        {
            this.client = client;
        }
        public const string RECIPE_SEARCH = "?type=public&q={0}&app_id=c154e7bd&app_key=%20682151aef66ae3f4681106b3ea2cca76";

        public async Task<RecipeSearchResults> GetRecipes(string userIngredientsString)
        {
            string query = string.Format(RECIPE_SEARCH, userIngredientsString);
            RecipeSearchResults retValue = new RecipeSearchResults();
            HttpResponseMessage? response = await client.GetAsync(query);
            retValue = await response.ReadContentAsync<RecipeSearchResults>();
            return retValue;
        }




    }
}
