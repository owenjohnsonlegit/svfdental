import Image from "next/image";
import photos from "@/data/photos.json";

export type PhotoId = keyof typeof photos;
export function PracticePhoto({
  id,
  className = "",
  sizes = "(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 50vw, 600px",
  priority = false,
}: {
  id: PhotoId;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const photo = photos[id];
  return (
    <div className={`practice-photo photo-${id} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        preload={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
export function PhotoGallery({
  items,
  className = "",
}: {
  items: { id: PhotoId; caption: string }[];
  className?: string;
}) {
  return (
    <div className={`photo-gallery ${className}`}>
      {items.map((item) => (
        <figure key={item.id}>
          <PracticePhoto
            id={item.id}
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 45vw, 400px"
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
