import { useCallback } from "react";
import Benefits from "../components/homepage/Benefits";
import Hero from "../components/homepage/Hero";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { useState } from "react";
const descriptions = [
  "Description for Web Hosting",
  "Description for Web Design",
  "Description for Professional Email",
];

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const updateSelectedIndex = useCallback(() => {
    if (emblaApi) {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Update the index on init and when it changes
      updateSelectedIndex();
      emblaApi.on("select", updateSelectedIndex);
    }
  }, [emblaApi, updateSelectedIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <Hero />
      <Benefits />
      {/* Services */}
      <div className="embla flex flex-col border border-black">
        <h1 className="font-bold text-3xl">Our Services</h1>
        <div className="services flex flex-row items-center border">
          <button className="embla__prev flex" onClick={scrollPrev}>
            Prev
          </button>
          <div
            className="embla__viewport flex mx-auto h-56 max-w-lg border"
            ref={emblaRef}
          >
            <div className="embla__container h-full">
              <div className="embla__slide flex items-center justify-center">
                Web Hosting
              </div>
              <div className="embla__slide flex items-center justify-center">
                Web Design
              </div>
              <div className="embla__slide flex items-center justify-center">
                Professional Email
              </div>
            </div>
          </div>
          <div className="description">{descriptions[selectedIndex]}</div>
          <div className="buttons flex flex-row justify-between">
            <button className="embla__next flex" onClick={scrollNext}>
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      {/* Contact */}
    </>
  );
};

export default Home;
