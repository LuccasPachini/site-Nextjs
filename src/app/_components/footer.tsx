import { InstagramLogo } from '@phosphor-icons/react/dist/ssr'
//ver o que vai ser preciso mudar

export function Footer() {
  return (
    <footer className="bg-[#25a3f1] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="pb-8 md:pb-0 md:pr-8">
            <h3 className="text-2xl font-semibold mb-3">Save Cadeiras</h3>
            <p className="mb-5 text-white/80 leading-relaxed">O cuidado que sua cadeira merece, com a qualidade que você espera.</p>
            <a
              href="https://wa.me/5511934576629?text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20pelo%20site%20para%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-5 py-2.5 rounded-md inline-block font-medium hover:bg-green-600 transition duration-300 hover:scale-105 shadow-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div className="pt-8 md:pt-0 md:px-8">
            <h3 className="text-2xl font-semibold mb-3">Contatos</h3>
            <div className="space-y-1 text-white/80">
              <p>Email: savecadeiras@gmail.com</p>
              <p>Telefone: (11) 93457-6629</p>
              <p>Endereço: Osasco, SP</p>
            </div>
          </div>

          <div className="pt-8 md:pt-0 md:pl-8">
            <h3 className="text-2xl font-semibold mb-3">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/savecadeiras/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                <InstagramLogo className="w-8 h-8" weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4">
        © {new Date().getFullYear()} Save Cadeiras. Todos os direitos reservados.
      </div>
    </footer>
  );
}
