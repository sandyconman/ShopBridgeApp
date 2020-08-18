using System;

namespace InventoryApp.API.Data
{
    public class FileDto
    {
        public string FileName { get; set; }
        public string FileSize  { get; set; }
        public string FileType  { get; set; }
        public long LastModifiedTime  { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string FileAsBase64 { get; set; }
        public byte[] FileAsByteArray { get; set; }
    }
}