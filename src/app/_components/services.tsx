"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import foto1 from '../../../public/antes_depois_1.png'
import foto2 from '../../../public/teste2.png'
import foto3 from '../../../public/teste3.png'
import foto4 from '../../../public/antes_depois_001.png'
import foto5 from '../../../public/antes_depois002.png'
import foto6 from '../../../public/antes_depois_03.png'

const images = [foto1, foto2, foto3, foto4, foto5]

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 760px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 }
    }
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="services" className="bg-white py-10" data-aos="fade-right" data-aos-delay="100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>

        <div className="relative">
          {/* Botão Prev */}
          <button
            className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-transform duration-300 hover:scale-110"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Botão Next */}
          <button
            className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-transform duration-300 hover:scale-110"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
                >
                  <div className="w-full overflow-hidden rounded-xl bg-white border border-gray-200">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                      <Image
                        src={item}
                        alt={`Serviço ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="py-4 text-center">
                      <p className="block text-lg font-bold text-gray-800">
                        Antes e Depois
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}