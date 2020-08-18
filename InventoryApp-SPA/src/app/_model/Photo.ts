 export interface Photo {
    id: number;
    photoName: string;
    photoSize: number;
    photoUrl: string;
    photoAsByteArray: Blob;
    photoAsBase64: string;
 }
