using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using InventoryApp.API.Data;
using InventoryApp.API.Model;
using Microsoft.AspNetCore.Http;
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

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public async Task<IEnumerable<Item>> GetAllItems()
        {
            return await _context.Items.Include(i => i.Photo).ToListAsync();
        }

        public async Task<Item> GetItem(int id)
        {
           return await  _context.Items.Include(i => i.Photo).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}