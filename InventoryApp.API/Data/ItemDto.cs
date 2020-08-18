using Microsoft.AspNetCore.Http;

namespace InventoryApp.API.Data
{
    public class ItemDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; } 
        public IFormFile Photo { get; set; }       
    }
}