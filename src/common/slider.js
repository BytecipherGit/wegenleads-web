import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsiveCenterModer = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 100
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 767, min: 320 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};


const responsivePartiallyVisible = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 2,
        paritialVisibilityGutter: 70
    },
    tablet: {
        breakpoint: { max: 1280, min: 768 },
        items: 2,
        paritialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0
    }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const SimpleSliderView = ({ deviceType, children, partialVisible, centerMode }) => {
    return (
        <Carousel
            ssr
            partialVisible={partialVisible ? true : false}
            deviceType={deviceType}
            itemclass="image-item"
            responsive={centerMode ? responsiveCenterModer : responsivePartiallyVisible}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            transitionDuration={500}
            arrows={false}
            centerMode={centerMode ? true : false}
            pauseOnHover={false}
        >
            {children}
        </Carousel>
    );
};
