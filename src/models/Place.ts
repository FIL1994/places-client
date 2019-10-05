export default interface Place {
  id: number;
  title: string;
  address: string;
  description?: string;
  imageUrls?: string[];
  lat: number;
  lng: number;
}
