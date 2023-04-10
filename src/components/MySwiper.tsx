import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, EffectCards, Autoplay,Zoom } from 'swiper';

const MobileSwiper=(props:any)=><MySwiper imgSrc={props.imgSrc} effect='slide' pv={1}/>
const PCSwiper=(props:any)=><MySwiper imgSrc={props.imgSrc} effect='cards' pv={2}/>

export default function MySwiper(props: any) {

  return (
    <Swiper
      modules={[Autoplay, Pagination,EffectCards,Zoom]}
      zoom={{
        maxRatio:5
      }}
      loop
      autoplay
      effect={props.effect}
      slidesPerView={props.pv}
      cardsEffect={{
        perSlideRotate:11,
        
        rotate:true,
        perSlideOffset:55,
      }}
      grabCursor
      centeredSlides
      style={{

      
        // flex:2,
        width: "68vw",
        // height: '60vh',

        display: "flex",
        flexDirection: "row",
      }}
    // onSlideChange={() => console.log("slide change")}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        props.imgSrc.map((e: any) => (
          <SwiperSlide
            style={{
              // backgroundColor: "blue", 
            }}
          >
            <img
              key={e}
              className=" rounded-lg w-4/5 border-solid border-2 border-sky-300"
              src={e}
              alt="Avatar image"
              loading="lazy"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export {PCSwiper,MobileSwiper}
