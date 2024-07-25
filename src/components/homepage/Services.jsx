import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const descriptions = [
  "Experience unparalleled performance with our cloud hosting. Benefit from 99.9% uptime, lightning-fast load times, and scalable resources tailored to your needs.",
  "Transform your online presence with our bespoke web design services. We create visually stunning, responsive websites that captivate your audience and drive conversions.",
  "Elevate your professional communication with our robust email solutions. Enjoy custom domains, advanced security features, and seamless integration with popular productivity tools.",
];
const ServiceCard = ({ title, isSelected }) => (
  <div
    className={`embla__slide p-6 rounded-lg shadow-md transition-all duration-300 ${
      isSelected ? "bg-blue-600 text-white scale-105" : "bg-white text-gray-800"
    }`}
  >
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
  </div>
);

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      updateSelectedIndex();
      emblaApi.on("select", updateSelectedIndex);
      return () => emblaApi.off("select", updateSelectedIndex);
    }
  }, [emblaApi, updateSelectedIndex]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary py-16 shadow-2xl rounded-2xl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h1>
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex  font-roboto-sans">
              {[
                "Cloud Hosting",
                "Custom Web Design",
                "Business Email Solutions",
              ].map((service, index) => (
                <div
                  key={service}
                  className="embla__slide flex-[0_0_100%] min-w-0 px-4"
                >
                  <ServiceCard
                    title={service}
                    isSelected={index === selectedIndex}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 font-roboto-sans">
            {descriptions[selectedIndex]}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
