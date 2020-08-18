namespace InventoryApp.API.Model
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        
        public Photo Photo { get; set; }
    }
}