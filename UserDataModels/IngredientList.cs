using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace UserDataModels
{
    public class IngredientList
    {
        public List<string> Ingredients { get; set; }

        public IngredientList(List<string> ingredients)
        {
            Ingredients = ingredients;
        }
    }
}
