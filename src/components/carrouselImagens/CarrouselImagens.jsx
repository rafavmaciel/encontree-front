import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function CarrouselImagens(props) {
    return (
        <Carousel width={500}   showThumbs={false} >
            {props.imgs.map((img) => (
                <div>
                    <img src={img} style={{ height: "385px" }} />
                </div>
            ))}
        </Carousel>
    );
}
