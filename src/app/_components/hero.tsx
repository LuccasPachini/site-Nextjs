import { WhatsappLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import cadeiraImage from '../../../public/fotoCanvaCadeira.png'
import Image from 'next/image'

export function Hero() {
    return(
        <section className="bg-[#25a3f1] text-white relative overflow-hidden">
            <div className="container mx-auto pt-16 pb-8 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                        data-aos="fade-down" data-aos-delay="100">
                            Reformas e manutenção para Cadeiras de Escritório, atendemos São Paulo capital, grande SP, Interior e Região.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right" data-aos-delay="100"><strong>Faça um orçamento pelo WhatsApp (11) 93457-6629</strong></p>
                        <p className="lg:text-lg" data-aos="fade-right" data-aos-delay="100">
                             Na Save Cadeiras, somos especialistas em reforma, manutenção e personalização de cadeiras. Atuamos com tapeçaria, ajustes estruturais, troca de peças e soluções sob medida, tudo com alto padrão de qualidade para empresas e clientes particulares.
                        </p>
                        <div className="md:mb-10 flex flex-wrap gap-4 justify-center md:justify-start">
                            <a 
                                href="https://wa.me/5511934576629?text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20pelo%20site%20para%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Podemos%20conversar%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md transition duration-300 hover:scale-105"
                            >
                                <WhatsappLogo className='w-5 h-5'/>
                                Faça o seu orçamento aqui
                            </a>

                            <a 
                                href="https://www.instagram.com/savecadeiras"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#ee4b81] hover:bg-pink-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md transition duration-300 hover:scale-105"
                            >
                                <InstagramLogo className='w-5 h-5'/>
                                Siga no Instagram
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image 
                            src={cadeiraImage}
                            alt='foto cadeira'
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            quality={100}
                            priority
                            data-aos="fade-left"
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}