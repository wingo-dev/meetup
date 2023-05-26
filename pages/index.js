import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="container">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <Image src="/img/bg1.jpg" alt="Image 1" width={600} height={600} />
        </div>
        <div>
          <Image src="/img/bg2.jpg" alt="Image 2" width={600} height={600} />
        </div>
        <div>
          <Image src="/img/bg3.jpg" alt="Image 3" width={600} height={600} />
        </div>
        <div>
          <Image src="/img/bg4.jpg" alt="Image 4" width={600} height={600} />
        </div>
        <div>
          <Image src="/img/bg5.jpg" alt="Image 5" width={600} height={600} />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
