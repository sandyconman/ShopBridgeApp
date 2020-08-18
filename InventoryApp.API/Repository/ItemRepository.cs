using System.Collections.Generic;
using System.Threading.Tasks;
using InventoryApp.API.Data;
using InventoryApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.API.Repository
{
    public class ItemRepository : IItemRepository
    {
        private readonly DataContext _context;

        public ItemRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<Item>> GetAllItems()
        {
            return await _context.Items.Include(i => i.Photo).ToListAsync();
        }
    }
}