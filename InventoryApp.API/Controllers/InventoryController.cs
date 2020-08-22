using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using InventoryApp.API.Data;
using InventoryApp.API.Model;
using InventoryApp.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : ControllerBase
    {
        private readonly IItemRepository _repo;

        public InventoryController(IItemRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems() 
        {
            var items = await _repo.GetAllItems();
            foreach (var item in items) {
                if(item.Photo != null &&item.Photo.photoUrl != null) {
                    item.Photo.PhotoAsByteArray = FileHelper.GetPhotoAsByteArray(item.Photo.PhotoName);
                }
            } 
            return Ok(items);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddItem([FromForm]ItemDto itemDto) 
        {
            var item = new Item {
                Name = itemDto.Name,
                Description = itemDto.Description,
                Price = itemDto.Price,
                Photo = await FileHelper.CreatePhotoObject(itemDto.Photo)
            };
            _repo.Add(item);
            if(await _repo.SaveAll())
                return Ok();
            return BadRequest("Upload error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) 
        {
            var itemToDelete = await _repo.GetItem(id);
            _repo.Delete(itemToDelete);
            if(await _repo.SaveAll()) 
                return Ok();
            return BadRequest("Deletion failed");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id) {
            var item = await _repo.GetItem(id);
            if(item.Photo != null &&item.Photo.photoUrl != null) {
                item.Photo.PhotoAsByteArray = FileHelper.GetPhotoAsByteArray(item.Photo.PhotoName);
            }
            return Ok(item);
        }
    }
}