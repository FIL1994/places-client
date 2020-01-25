import URI from "urijs";

const DEFAULT_MAX_HEIGHT = 800;
const GOOGLE_PLACE_PHOTO_URL =
  "https://maps.googleapis.com/maps/api/place/photo";

export const PhotoUtils = {
  photoUrl(
    { photoReference }: { photoReference: string },
    options: { maxHeight?: number } = {}
  ) {
    const maxHeight = options.maxHeight ?? DEFAULT_MAX_HEIGHT;

    const url = new URI(GOOGLE_PLACE_PHOTO_URL)
      .addQuery("key", process.env.GOOGLE_MAPS_KEY)
      .addQuery("photoreference", photoReference)
      .addQuery("maxheight", maxHeight);

    return url.valueOf();
  }
};
