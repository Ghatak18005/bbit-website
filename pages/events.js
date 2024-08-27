import Image from 'next/image';
const EventCard = ({ imageSrc, altText, description }) => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#27066F]">
    <Image
      className="w-full h-auto object-cover sm:w-full sm:h-auto md:w-full md:h-auto lg:w-full lg:h-auto xl:w-full xl:h-auto "
      src={imageSrc}
      alt={altText}
      width={700} 
      height={400} 
    />
    <div className="p-4">
      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">{description}</p>
    </div>
  </div>
);
const Events = () => {
  const eventData = [
    {
      imageSrc: "/hostel/comp.jpg",
      altText: "Event Image 1",
      description: "The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems."
    },
    {
      imageSrc: "/hostel/comp.jpg",
      altText: "Event Image 2",
      description: "An annual tech conference was hosted, featuring keynote speakers from the industry and numerous breakout sessions on emerging technologies."
    },
    {
      imageSrc: "/hostel/comp.jpg",
      altText: "Event Image 3",
      description: "A charity fundraiser event was organized, aiming to support local community projects and raise awareness about social issues."
    },
    {
      imageSrc: "/hostel/comp.jpg",
      altText: "Event Image 4",
      description: "A charity fundraiser event was organized, aiming to support local community projects and raise awareness about social issues."
    },
    {
      imageSrc: "/hostel/comp.jpg",
      altText: "Event Image 4",
      description: "A charity fundraiser event was organized, aiming to support local community projects and raise awareness about social issues."
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 pt-20 mb-20">
      <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <div className="bg-gradient-to-t from-[#FFC84A] to-[#F3F2FF] h-52 w-full"></div>
        </div>
        <div className="relative z-10 mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center">Events</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-20 relative z-10">
          {eventData.map((event, index) => (
            <EventCard
              key={index}
              imageSrc={event.imageSrc}
              altText={event.altText}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
