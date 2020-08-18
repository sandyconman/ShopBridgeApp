using System.Collections.Generic;
using System.Threading.Tasks;
using InventoryApp.API.Model;

namespace InventoryApp.API.Repository
{
    public interface IItemRepository
    {
         Task<IList<Item>> GetAllItems();
    }
}