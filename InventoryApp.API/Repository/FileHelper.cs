using System;
using System.IO;
using System.Threading.Tasks;
using InventoryApp.API.Model;
using Microsoft.AspNetCore.Http;

namespace InventoryApp.API.Repository
{
    public class FileHelper
    {
        public static string GenerateUniqueFileName(string fileName) {
            var uniqueFileName = 
                    Path.GetFileNameWithoutExtension(
                    fileName) + "-" +
                    DateTime.Now.ToString().Replace("/", "")
                    .Replace(":", "").Replace(" ", "") + 
                    Path.GetExtension(fileName);
            return uniqueFileName;
        }
        public static async Task<Photo> CreatePhotoObject(IFormFile file)
        {
            if(file == null) 
                return null;
            var uniqueFileName = GenerateUniqueFileName(file.FileName);
            var photo = new Photo()
            {
                PhotoName = uniqueFileName,
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
                var filePath = directory + @"\Content\" + uniqueFileName;

                using (var stream = File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                    photo.photoUrl = filePath;
                }
            }
            return photo;
        }

        public static byte[] GetPhotoAsByteArray(string fileName)
        {
            //var fileName = Path.GetFileName(photoUrl);
            var url = Directory.GetCurrentDirectory() + @"\Content\" + fileName;
            var file = File.ReadAllBytes(url);
            return file;
        }
    }
}