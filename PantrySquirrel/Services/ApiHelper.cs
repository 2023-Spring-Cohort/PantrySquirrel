using Newtonsoft.Json;

namespace PantrySquirrel.Services
{
    public static class ApiHelper
    {
        public static async Task<T> ReadContentAsync<T>(this HttpResponseMessage response)  //"this" is a sign of an extension method
        {
            if (response.IsSuccessStatusCode == false)
                throw new ApplicationException($"Something went wrong calling the API: " + response.ReasonPhrase);
            var dataAsString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<T>(dataAsString);
            return result;
        }
    }
}
