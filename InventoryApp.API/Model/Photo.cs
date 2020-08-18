namespace InventoryApp.API.Model
{
    public class Photo
    {
        public int Id { get; set; }
        public string PhotoName { get; set; }
        public string PhotoSize { get; set; }
        public byte[] PhotoAsByteArray { get; set; }
    }
}