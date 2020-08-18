using InventoryApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Item> Items { get; set; }
    }
}