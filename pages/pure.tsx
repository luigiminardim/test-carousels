import {
  Button,
  IconButton,
  Container,
  Image,
  Center,
  Box,
} from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { banners } from "../src/banners";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Slick() {
  const mobileBanners = banners.filter((banner) => banner.size === "mobile");
  const desktopBanners = banners.filter((banner) => banner.size === "desktop");

  return (
    <>
      <Container maxW={"container.xl"} display={{ base: "block", lg: "none" }}>
        <CarouselProvider
          naturalSlideWidth={1920}
          naturalSlideHeight={768}
          totalSlides={mobileBanners.length}
          isPlaying
          infinite
        >
          <Slider>
            {mobileBanners.map((banner, index) => (
              <Slide key={banner.src} index={index}>
                <Image
                  htmlWidth={1920}
                  htmlHeight={768}
                  width="full"
                  height="auto"
                  alt="carousel"
                  loading="lazy"
                  src={banner.src}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </Container>
      <Box>
        <Container
          maxW={"container.xl"}
          display={{ base: "none", lg: "block" }}
        >
          <CarouselProvider
            naturalSlideWidth={1920}
            naturalSlideHeight={450}
            totalSlides={desktopBanners.length}
            isPlaying
            infinite
          >
            <Slider>
              {desktopBanners.map((banner, index) => (
                <Slide index={index} key={index}>
                  <Image
                    htmlWidth={1920}
                    htmlHeight={450}
                    width="full"
                    height="auto"
                    alt="carousel"
                    loading="lazy"
                    src={banner.src}
                  />
                </Slide>
              ))}
            </Slider>
            <Button as={ButtonBack}>Back</Button>
            <Button as={ButtonNext}>Next</Button>
          </CarouselProvider>
        </Container>
      </Box>
    </>
  );
}
