"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight, Wrench, Sparkles, ShieldCheck, Wind, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

import foto1 from '../../../public/ft_1.jpg'
import foto2 from '../../../public/ft_2.jpg'
import fotoIntermediaria from '../../../public/ft_5.jpg'
import foto3 from '../../../public/ft_3.jpg'
import foto4 from '../../../public/antes_depois_001.png'
import foto5 from '../../../public/antes_depois002.png'
import foto6 from '../../../public/ants_dps.png'
import foto7 from '../../../public/ants_dps_2.png'
import foto8 from '../../../public/antesdepois.png'
import foto9 from '../../../public/fotos_novas1.png'
import foto10 from '../../../public/fotos_novas2.png'
import foto11 from '../../../public/ft_4.jpg'
import fotoHigienizacao from '../../../public/higienizacao.png'
import fotoHigienizacao2 from '../../../public/ft_higienizacao.jpg'
import fotoHigienizacao3 from '../../../public/ft_higienizacao_2.jpg'

const reformaImages = [foto1, foto2, fotoIntermediaria, foto3, foto4, foto10, foto5, foto6, foto7, foto9, foto8, foto11]

const higienizacaoSteps = [
  {
    step: '01',
    title: 'Avaliação',
    description: 'Analisamos o estado da cadeira e o tipo de tecido para escolher o melhor método.',
  },
  {
    step: '02',
    title: 'Pré-tratamento',
    description: 'Aplicamos produtos específicos para remover manchas e impurezas antes da higienização.',
  },
  {
    step: '03',
    title: 'Higienização Profunda',
    description: 'Equipamentos profissionais a vapor eliminam ácaros, bactérias e fungos do estofamento.',
  },
  {
    step: '04',
    title: 'Finalização',
    description: 'Secagem adequada e aplicação de protetor de tecido para maior durabilidade.',
  },
]

function ReformaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <button
        className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-transform duration-300 hover:scale-110"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-transform duration-300 hover:scale-110"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reformaImages.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
            >
              <div className="w-full overflow-hidden rounded-xl bg-white border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src={item}
                    alt={`Reforma ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="py-4 text-center">
                  <p className="block text-lg font-bold text-gray-800">Antes e Depois</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-white py-16">

      {/* ── BLOCO 1: REFORMA ── */}
      <div data-aos="fade-right" data-aos-delay="100">
        <div className="container mx-auto px-4">

          {/* Cabeçalho do bloco */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25a3f1]">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-center">Reforma de Cadeiras</h2>
            <p className="text-gray-500 text-center max-w-xl">
              Tapeçaria, reparos estruturais, troca de peças e personalização. Veja alguns dos nossos trabalhos:
            </p>
            <div className="w-16 h-1 rounded-full bg-[#25a3f1] mt-1" />
          </div>

          <ReformaCarousel />

          {/* CTA Reforma */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5511934576629?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20reforma%20de%20cadeiras.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition duration-300 hover:scale-105"
            >
              <WhatsappLogo className="w-5 h-5" />
              Solicitar orçamento de reforma
            </a>
          </div>
        </div>
      </div>

      {/* ── DIVISOR ── */}
      <div className="container mx-auto px-4 my-16">
        <div className="border-t border-gray-200" />
      </div>

      {/* ── BLOCO 2: HIGIENIZAÇÃO ── */}
      <div data-aos="fade-left" data-aos-delay="100">
        <div className="container mx-auto px-4">

          {/* Cabeçalho do bloco */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25a3f1]">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-center">Higienização de Cadeiras</h2>
            <p className="text-gray-500 text-center max-w-xl">
              Serviço profissional que elimina ácaros, bactérias, fungos e odores, devolvendo saúde e frescor ao seu ambiente.
            </p>
            <div className="w-16 h-1 rounded-full bg-[#25a3f1] mt-1" />
          </div>

          {/* Layout: etapas + mosaico de imagens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">

            {/* Etapas */}
            <div className="flex flex-col gap-4">
              {higienizacaoSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow duration-300"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25a3f1] text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: imagem principal em destaque + duas menores abaixo */}
            <div className="flex flex-col gap-3 lg:hidden">
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-square bg-black">
                <Image src={fotoHigienizacao2} alt="Antes e depois da higienização" fill className="object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
                  <Image src={fotoHigienizacao} alt="Higienização de cadeira" fill className="object-cover object-center" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
                  <Image src={fotoHigienizacao3} alt="Processo de higienização" fill className="object-cover object-center" />
                </div>
              </div>
            </div>

            {/* Desktop: mosaico — foto principal grande à esquerda, duas menores à direita */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
              {/* Imagem principal — ocupa as 2 linhas */}
              <div className="relative row-span-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black">
                <Image
                  src={fotoHigienizacao2}
                  alt="Antes e depois da higienização"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Foto superior */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={fotoHigienizacao}
                  alt="Higienização de cadeira"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Foto inferior */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={fotoHigienizacao3}
                  alt="Processo de higienização"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* "Por que higienizar" — cards individuais com ícone */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-6">Por que higienizar sua cadeira?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#25a3f1]/20 bg-[#25a3f1]/5 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#25a3f1] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">Elimina até 99% dos micro-organismos</h4>
                <p className="text-sm text-gray-500">Ácaros, bactérias e fungos são removidos com equipamentos profissionais.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#25a3f1]/20 bg-[#25a3f1]/5 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#25a3f1] flex items-center justify-center">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">Remove odores e mau cheiro</h4>
                <p className="text-sm text-gray-500">Tratamento profundo que neutraliza odores acumulados no estofado.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#25a3f1]/20 bg-[#25a3f1]/5 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#25a3f1] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">Aumenta a vida útil do estofado</h4>
                <p className="text-sm text-gray-500">Limpeza regular preserva o tecido e evita desgastes prematuros.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/5511934576629?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20higieniza%C3%A7%C3%A3o%20de%20cadeiras.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition duration-300 hover:scale-105"
            >
              <WhatsappLogo className="w-5 h-5" />
              Solicitar orçamento de higienização
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}
