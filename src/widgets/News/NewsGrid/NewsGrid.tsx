import NewsCard from '@/components/NewsCard';
import Event1 from "@/assets/images/news/news-1.png";


const NewsGrid: React.FC = () => {
  const newsItems = [
    {
      image: Event1,
      date: 'Monday, 25 April 10:49AM',
      tag: 'Arabian Horse News',
      title: 'Congratulations to the champions of the Moroccan leg of the UAE President Cup Series',
      description: 'The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President\'s Cup Series Committee for Purebred Arabian Horses, and Omar Al Saqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.'
    },
    {
      image: Event1,
      date: 'Monday, 25 April 10:49AM',
      tag: 'Competition News',
      title: 'Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off',
      description: 'The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President\'s Cup Series Committee for Purebred Arabian Horses.'
    },
    {
      image: Event1,
      date: 'Monday, 25 April 10:49AM',
      tag: 'Arabian Horse News',
      title: 'Tomorrow, the Netherlands hosts the UAE President\'s Cup for Arabian Horses.',
      description: 'The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President\'s Cup Series Committee.'
    }
  ];

  // Logic to repeat items to match the 9 grid items in the screenshot
  const gridItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {gridItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
