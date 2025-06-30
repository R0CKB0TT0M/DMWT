'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecipeCarouselWithDetail = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  return (
    <div className="h-screen grid grid-rows-2 w-full max-w-4xl mx-auto">
      <div className="bg-gray-100 p-4 w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setSelectedRecipe(recipes[swiper.activeIndex])}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <div className="w-full max-w-sm mx-auto bg-white shadow rounded-lg overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-bold">{recipe.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="p-6 overflow-y-auto bg-white shadow-inner">
        <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>
        <img
          src={selectedRecipe.image}
          alt={selectedRecipe.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-700 text-base">{selectedRecipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCarouselWithDetail;
