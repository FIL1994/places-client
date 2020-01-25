export default interface Place {
  id: number;
  title: string;
  address: string;
  description?: string;
  imageUrl?: string;
  lat: number;
  lng: number;
  googleId?: string;
  photoReference: string;
}
