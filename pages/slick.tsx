import {
  Button,
  IconButton,
  Container,
  Image,
  Center,
  Box,
} from "@chakra-ui/react";
import SlickCarousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from "../src/banners";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Slick() {
  const mobileBanners = banners.filter((banner) => banner.size === "mobile");
  const desktopBanners = banners.filter((banner) => banner.size === "desktop");

  return (
    <>
      <Container maxW={"container.xl"} display={{ base: "block", lg: "none" }}>
        <SlickCarousel
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {mobileBanners.map((banner) => (
            <Image
              key={banner.src}
              htmlWidth={1920}
              htmlHeight={768}
              width="full"
              height="auto"
              alt="carousel"
              loading="lazy"
              src={banner.src}
            />
          ))}
        </SlickCarousel>
      </Container>
      <Box>
        <Container
          maxW={"container.xl"}
          display={{ base: "none", lg: "block" }}
        >
          <SlickCarousel
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
          >
            {desktopBanners.map((banner) => (
              <Image
                key={banner.src}
                htmlWidth={1920}
                htmlHeight={450}
                width="full"
                height="auto"
                alt="carousel"
                loading="lazy"
                src={banner.src}
              />
            ))}
          </SlickCarousel>
          <IconButton
            aria-label=""
            position="absolute"
            right="0px"
            top="50%"
            transform="translateY(-50%)"
          >
            <ChevronRightIcon />
          </IconButton>
        </Container>
      </Box>
    </>
  );
}
