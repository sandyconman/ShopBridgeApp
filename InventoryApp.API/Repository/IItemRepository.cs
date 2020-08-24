using System.Collections.Generic;
using System.Threading.Tasks;
using InventoryApp.API.Model;

namespace InventoryApp.API.Repository
{
    public interface IItemRepository
    {
        // Add a record to an entity T
        void Add<T>(T entity) where T: class;

        // delete a record from an entry
        void Delete<T>(T entity) where T: class;

        // commit changes to database
        Task<bool> SaveAll();

        // Get all items from inventory
        Task<IEnumerable<Item>> GetAllItems();

        // get an item from inventory
        Task<Item> GetItem(int id);

    }
}