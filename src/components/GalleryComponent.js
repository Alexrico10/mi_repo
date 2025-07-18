import Image from "next/image";
import { useRouter } from "next/router";

const GalleryComponent = ({ images = [], linkUrl }) => {
  const router = useRouter();

  const handleClickImg = () => {
    if (linkUrl) {
      router.push(linkUrl);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={handleClickImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;