import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import MeetUp from "@/app/components/meetup";
const cardData = [
  {
    title: "Meeting 1",
    content: "This is the content of Card 1.",
    imageUrl: "/img/bg1.jpg",
  },
  {
    title: "Meeting 2",
    content: "This is the content of Card 2.",
    imageUrl: "/img/bg2.jpg",
  },
  {
    title: "Meeting 3",
    content: "This is the content of Card 3.",
    imageUrl: "/img/bg3.jpg",
  },
  {
    title: "Meeting 4",
    content: "This is the content of Card 3.",
    imageUrl: "/img/bg4.jpg",
  },
  {
    title: "Meeting 5",
    content: "This is the content of Card 3.",
    imageUrl: "/img/bg5.jpg",
  },
  {
    title: "Meeting 3",
    content: "This is the content of Card 3.",
    imageUrl: "/img/bg3.jpg",
  },
];

const HomePage = (props) => {
  // console.log(props.meetups);
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
      <div>
        <div className="card-container">
          {props.meetups.map((meetup, index) => (
            <MeetUp
              imageUrl={meetup.imageUrl}
              title={meetup.title}
              content={meetup.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: cardData,
    },
  };
}

export default HomePage;
