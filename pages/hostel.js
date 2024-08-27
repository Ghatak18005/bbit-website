import Image from 'next/image';

const Hostel = () => {
  const amenitiesList = (items) => (
    <ol className="list-decimal pl-5 mt-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );

  const Section = ({ title, content, imageAlt, imageUrl }) => (
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-48 md:max-w-md lg:max-w-60 xl:max-w-72 h-12 bg-[#FFDE88] text-center rounded-2xl flex items-center justify-center font-bold mb-5 mt-12 md:mt-0 text-lg md:text-xl">
        {title}
      </div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-40 md:h-60 lg:h-72 xl:h-80 object-cover mt-5"
      />
      <div className="text-lg px-4 md:px-8 lg:px-30 mt-8 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl text-left">
        {content}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full p-8 md:p-16 lg:p-36 xl:p-32 flex flex-col items-center text-[#27066F]">
        <Section
          title="Girl's Hostel"
          imageAlt="Girl's Hostel"
          imageUrl="../hostel/comp.jpg"
          content={
            <>
              <p className="mb-6">
                The campus comprises well-manufactured inn blocks, both for girls and boys. Every inn comprises different wreckage, managerial office, warden quarter, a separate mess, and accommodates around 200 students. Notwithstanding well-furnished rooms, the lodging is complete with facilities like association, gym, and various comforts for games, entertainment, and relaxation. It also includes 24/7 water facilities and RO for drinking water. A nearby shopping complex, with various shops outside, is located near the hostel blocks and caters to the daily needs of the students like groceries, stationery, laundry, and grooming.
              </p>
              <h3 className="text-lg font-bold mt-6">Hostel Amenities:</h3>
              {amenitiesList([
                'The hostel rooms are spacious with natural light and ventilation. Each room has an attached toilet and bathroom.',
                'Each student is provided with a study table and chair.',
                'Each hostel has 24-hour electricity and water supply, water cooler, common telephone, and common TV room.'
              ])}
              <h3 className="text-lg font-bold mt-6">Security:</h3>
              <p className="mt-4">
                The following arrangements have been made to ensure the security of the inmates of the hostels:
              </p>
              {amenitiesList([
                'Security check at the main gate of each Hostel.',
                'Individual security guard at each hostel building.',
                'Lady Warden at girl’s hostels.'
              ])}
            </>
          }
        />
        <Section
          title="Boy's Hostel"
          imageAlt="Boy's Hostel"
          imageUrl="../hostel/comp.jpg"
          content={
            <>
              <p className="mb-6">
                The campus comprises of well-manufactured inn blocks, both for girls and boys. Boy’s inn comprises of different wreckage, managerial office, warden quarter, a mess and obliges around 290 students. Notwithstanding very much outfitted rooms, the lodging is finished with facilities like association, different comforts for games. It likewise incorporates every minute of every day 24/7 hot & cold water facilities and drinking water. A close-by shopping complex, comprising of different shops outside, is situated in the region of the lodging pieces and takes into account the day by day needs of the students like basic supplies, stationery, clothing and grooming.
              </p>
              <h3 className="text-lg font-bold mt-6">Hostel Amenities:</h3>
              {amenitiesList([
                'The hostel rooms are spacious with natural light and ventilation.',
                'Each student is provided with a study table, cupboard, and chair.',
                'Hostel has 24-hour electricity and water supply, water cooler, and common TV room.'
              ])}
              <h3 className="text-lg font-bold mt-6">Security:</h3>
              <p className="mt-4">
                The following arrangements have been made to ensure the security of the inmates of the hostels:
              </p>
              {amenitiesList([
                'Security check at the main gate of Hostel.',
                'Individual security guard at each hostel building.'
              ])}
            </>
          }
        />
      </div>
    </div>
  );
};

export default Hostel;
