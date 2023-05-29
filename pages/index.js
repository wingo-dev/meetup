import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import MeetUpList from "@/app/components/MeetUpList";

const HomePage = () => {
  const cardData = [
    {
      title: "Card 1",
      content: "This is the content of Card 1.",
      imageUrl: "/img/bg1.jpg",
    },
    {
      title: "Card 2",
      content: "This is the content of Card 2.",
      imageUrl: "/img/bg2.jpg",
    },
    {
      title: "Card 3",
      content: "This is the content of Card 3.",
      imageUrl: "/img/bg3.jpg",
    },
  ];

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
      <section>
        <MeetUpList meetups={props.meetups} />
      </section>
    </div>
  );
};

export async function getStaticPage() {
  return {
    props: {
      meetups: cardData,
    },
  };
}

export default HomePage;
