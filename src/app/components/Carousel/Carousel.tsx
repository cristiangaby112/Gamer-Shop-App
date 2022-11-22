import { Box } from "@mui/material";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  img: string;
  // config: ResponsiveType;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const banners = [
  {
    image: require("../../../assets/gamerTourBanner.jpg"),
    id: 1,
  },
  {
    image: require("../../../assets/gerforceBanner.jpg"),
    id: 2,
  },
  {
    image: require("../../../assets/intelBanner.jpg"),
    id: 3,
  },
  {
    image: require("../../../assets/matherBanner.jpg"),
    id: 4,
  },
  {
    image: require("../../../assets/ramOrionBanner.jpg"),
    id: 5,
  },
  {
    image: require("../../../assets/ssdBanner.jpg"),
    id: 6,
  },
  {
    image: require("../../../assets/tforceBanner.jpg"),
    id: 7,
  },
];

const CardCarousel = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      
      {banners?.map((banner) => {
        return (
          <Box key={banner.id}>
            <img src={banner.image} alt="img not found" width="100%" />
          </Box>
        );
      })}
      
      
    </Carousel>
  );
};

export default CardCarousel;
