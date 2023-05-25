import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="container">
      <Carousel showThumbs={true}>
        <div>
          <Image src="/img/bg1.jpg" alt="Image 1" width={600} height={400} />
        </div>
        <div>
          <Image src="/img/bg2.jpg" alt="Image 2" width={600} height={400} />
        </div>
        <div>
          <Image src="/img/bg3.jpg" alt="Image 3" width={600} height={400} />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
