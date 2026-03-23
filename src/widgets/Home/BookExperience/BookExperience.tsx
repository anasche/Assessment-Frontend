import ExploreLink from "@/components/ExploreLink";
import Badge from "@/components/Badge";
import EventBackground from "@/assets/images/experience/experience-1.jpg";
import Title from "@/components/Title";

const BookExperience: React.FC = () => {
  return (
    <section className="relative py-20  flex items-center overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={EventBackground}
          alt="Horse Racing Experience"
          className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px] relative z-10">
        <div className="max-w-xl">
          <Badge className="mb-6">UAE President Cup</Badge>
          <Title dark={false} className="mb-6">
            Book Your Experience
          </Title>
          <p className="text-white/70 text-sm mb-10 leading-relaxed max-w-md">
            Reserve your spot for the most prestigious horse racing events in
            the region. Experience luxury seating and exceptional hospitality.
          </p>
          <ExploreLink to="#">Book Experience</ExploreLink>
        </div>
      </div>
    </section>
  );
};

export default BookExperience;
