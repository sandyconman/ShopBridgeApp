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
        public async Task<IActionResult> Get() {
            var items = await _repo.GetAllItems();
            return Ok(items);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddItem([FromForm]IFormFile photo) {
            Console.WriteLine(photo);
            return Ok();
        }
    }
}