import { practice, directionsUrl } from "@/data/practice";
import { ExternalLink } from "./ui";

export function LocationMap() {
  return (
    <div className="location-map">
      <div className="location-map-frame">
        <iframe
          src={practice.googleMapsEmbedUrl}
          title="Google Map showing South Valley Family Dental in Providence, Utah"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <ExternalLink className="button button-primary" href={directionsUrl}>
        Get Directions
      </ExternalLink>
    </div>
  );
}
