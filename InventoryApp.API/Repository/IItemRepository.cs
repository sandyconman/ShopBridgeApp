using System.Collections.Generic;
using System.Threading.Tasks;
using InventoryApp.API.Model;

namespace InventoryApp.API.Repository
{
    public interface IItemRepository
    {
        void Add<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Item>> GetAllItems();
        Task<Item> GetItem(int id);

    }
}