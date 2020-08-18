import { Photo } from './Photo';

export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: Photo;
}
