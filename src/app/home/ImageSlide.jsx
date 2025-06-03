import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const profiles = [
  { name: "Prof. Y. Narahari", image: "/speakers/p1.png", affiliate: "IEEE Fellow, IISc Bangalaore" },
  { name: "Prof. B. Shah", image: "/speakers/p2.jpg", affiliate: "Provost Chair Professor, Singapore University of Technology and Design" },
  { name: "Dr. C. Gupta", image: "/speakers/p3.jpg", affiliate: "Associate Professor, Yale University" },
  { name: "Prof. D. Mehta", image: "/speakers/p4.png", affiliate: "Associate Professor, Indian Institute of Science Bangalore, India" },
];

const images = [
  "/home_img/slideshow/p1.jpg",
  "/home_img/slideshow/p2.jpg",
  "/home_img/slideshow/p3.jpg",
  "/home_img/slideshow/p4.jpg",
];

export default function TwoSectionSlider() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center gap-12 px-4 py-10">
      <h1 className="text-2xl md:text-3xl border-b-2 border-blue-500 pb-2 font-bold text-center text-gray-800">
        Keynote Speakers
      </h1>

      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {profiles.map((person, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex flex-col items-center justify-center w-full h-72 sm:h-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out p-6">
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full shadow-sm">
                  Keynote
                </div>
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-blue-200 blur-xl opacity-30"></div>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="relative z-10 w-36 h-36 sm:w-[160px] sm:h-[160px] rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">{person.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">{person.affiliate}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full h-48 sm:h-64 md:h-96">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="w-full h-full">
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
