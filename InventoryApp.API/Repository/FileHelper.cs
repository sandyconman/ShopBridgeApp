using System.IO;
using System.Threading.Tasks;
using InventoryApp.API.Model;
using Microsoft.AspNetCore.Http;

namespace InventoryApp.API.Repository
{
    public class FileHelper
    {
        public static async Task<Photo> CreatePhotoObject(IFormFile file)
        {
            var photo = new Photo()
            {
                PhotoName = file.FileName,
                PhotoSize = file.Length.ToString(),
            }; 

            if(file.Length < 2097152) {
                // write file to database
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);

                    
                    photo.PhotoAsByteArray = memoryStream.ToArray();
                     
                }
            }
            else {
                //put file in directory
                var directory = Directory.GetCurrentDirectory();
                var filePath = directory + @"\Content\" + file.FileName;

                using (var stream = File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                    photo.photoUrl = filePath;
                }
            }
            return photo;
        }

        public static byte[] GetPhotoAsByteArray(string photoUrl)
        {
            //var fileName = Path.GetFileName(photoUrl);
            var file = File.ReadAllBytes(photoUrl);
            return file;
        }
    }
}