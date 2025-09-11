'use client'
import Btn from "../Btn/Btn";
import "../Cards/Cards.css";
import { cards } from "../../model/data/cardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Card() {
    return (
        <section className="container-card">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                style={{ width: "100%" }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={card.imgSrc} alt={card.alt} />
                            <div className="card-content">
                                <div className="info">
                                    <h3>{card.title}</h3>
                                    <span>{card.location}</span>
                                </div>
                                <Btn name={card.btnText} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
