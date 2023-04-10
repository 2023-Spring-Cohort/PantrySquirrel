using Microsoft.AspNetCore.Mvc;
using PantrySquirrel.Models;
using PantrySquirrel.Services;
using System.Diagnostics;

namespace PantrySquirrel.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IRecipeSearch recipeSearch;

        public HomeController(ILogger<HomeController> logger, IRecipeSearch recipeSearch)
        {
            _logger = logger;
            this.recipeSearch = recipeSearch;
        }

        public async Task<ActionResult> Index(string userIngredientsString)
        {
            var recipes = await recipeSearch.GetRecipes(userIngredientsString);

            foreach( var recipe in recipes.hits)
            {
                for(int i = 0; i < recipe.recipe.ingredients.Length; i++)
                {
                    if (userIngredientsString.Contains(recipe.recipe.ingredients[i].food.ToLower()))
                    {
                        recipe.recipe.ingredients[i].hasIt = true;
                    }
                    else if (recipe.recipe.ingredients[i].food.ToLower().Contains(userIngredientsString))
                    {
                        recipe.recipe.ingredients[i].hasIt = true;
                    }
                }
            }

            return View(recipes);
        }

        [HttpPost]
        public async Task<ActionResult> BrowseRecipes(string recipeText)
        {
            var recipes = await recipeSearch.GetRecipes(recipeText);
            return View(recipes);
        }

        public IActionResult BrowseRecipes()
        {
            return View();
        }

        public IActionResult HowItWorks()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }


}