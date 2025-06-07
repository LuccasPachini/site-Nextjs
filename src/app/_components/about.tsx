import Image from "next/image";
import logo from "../../../public/logoRedimensionado.png";
import { Check } from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

export function About() {
  return (
    <section id="about" className="bg-white py-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden ">
              <Image
                src={logo}
                alt="Logo Save Cadeiras"
                fill
                quality={100}
                priority
                className="object-contain"
                data-aos="fade-up-right"
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              Quem Somos
            </h2>

            <p className="lg:text-lg text-gray-800 leading-relaxed">
              A Save Cadeiras é especializada em reforma e manutenção de cadeiras de escritório.
              Atuamos com tapeçaria, reparos estruturais e mecânicos, troca de peças, revisões periódicas
              e projetos personalizados para empresas e clientes particulares.
              Estamos localizados em Osasco-SP e atendemos toda a Grande São Paulo, Capital e interior.
              Também oferecemos serviços a domicílio, além de retirada e entrega, conforme a necessidade.
            </p>

            <p className="lg:text-lg text-gray-800 leading-relaxed">
              Com anos de experiência no setor, prezamos pela qualidade, agilidade e profissionalismo,
              utilizando equipamentos de ponta para garantir resultados duradouros e a total satisfação
              de nossos clientes.
            </p>

            <p className="lg:text-lg text-gray-800 leading-relaxed">
              <strong>Entre em contato e solicite seu orçamento!</strong>
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-blue-400" />
                Fundada em 2018
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-400" />
                Qualidade é a nossa prioridade
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-400" />
                Reconhecimento no mercado
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="https://wa.me/5511934576629?text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20pelo%20site%20para%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md transition duration-300 hover:scale-105"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Faça o seu orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
