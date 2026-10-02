import '../styles/Gallery.css';

const images = [
  { src: '/img/gallery1.jpg', alt: 'Gallery Img1' },
  { src: '/img/gallery2.jpg', alt: 'Gallery Img2' },
  { src: '/img/gallery3.jpg', alt: 'Gallery Img3' },
  { src: '/img/gallery4.jpg', alt: 'Gallery Img4' },
  { src: '/img/gallery5.jpg', alt: 'Gallery Img5' },
  { src: '/img/gallery6.jpg', alt: 'Gallery Img6' },
  { src: '/img/gallery7.jpg', alt: 'Gallery Img7' },
  { src: '/img/gallery8.jpg', alt: 'Gallery Img8' },
  { src: '/img/gallery9.jpg', alt: 'Gallery Img9' },
];

function Gallery() {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`gallery-img-${index + 1}`}
        />
      ))}
    </section>
  );
}

export default Gallery;
