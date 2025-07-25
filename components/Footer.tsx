// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-black mt-16 border-t shadow">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* A MARCA */}
        <div>
          <h3 className="font-semibold mb-3">A MARCA</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Sobre a Morana</a></li>
            <li><a href="#">Lojas</a></li>
            <li><a href="#">Seja um franqueado</a></li>
            <li><a href="#">Grupo Ornatus</a></li>
          </ul>
        </div>

        {/* INFORMAÇÕES ÚTEIS */}
        <div>
          <h3 className="font-semibold mb-3">INFORMAÇÕES ÚTEIS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Formas de pagamento</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Termo Cashback Morana</a></li>
            <li><a href="#">Consulte seu cashback</a></li>
          </ul>
        </div>

        {/* FALE CONOSCO */}
        <div>
          <h3 className="font-semibold mb-3">FALE CONOSCO</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Troca Fácil</a></li>
            <li><a href="#">Para atendimento: Clique aqui</a></li>
            <li>(11) 5468-6751</li>
          </ul>
        </div>

        {/* FORMAS DE PAGAMENTO 
        <div>
          <h3 className="font-semibold mb-3">FORMAS DE PAGAMENTO</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <img src="/payments/visa.png" alt="Visa" className="h-6" />
            <img src="/payments/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/payments/elo.png" alt="Elo" className="h-6" />
            <img src="/payments/amex.png" alt="Amex" className="h-6" />
            <img src="/payments/picpay.png" alt="PicPay" className="h-6" />
            <img src="/payments/pix.png" alt="Pix" className="h-6" />
          </div>
          <img src="/reclame-aqui.png" alt="Reclame Aqui" className="h-10" />
        </div>*/}
      </div>

      {/* COPYRIGHT 
      <div className="bg-black text-white text-xs py-4 px-4 text-center">
        <p>
          2025 © Copyright Morana. Todos os direitos reservados<br />
          A loja online Morana é operada Infracommerce Negócios e Soluções em Internet Ltda. CNPJ: 15.427.207/0009-71<br />
          Endereço: Av. Helio Ossamu Daikuara, 1445 - Bloco 200 Unid.: 7, 8, 9 e 10 - Jardim Vista Alegre - Embu das Artes | SP - CEP: 06807-000
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <img src="/lets-encrypt.png" alt="Let's Encrypt" className="h-4" />
          <img src="/vtex.png" alt="VTEX" className="h-4" />
          <img src="/infra.png" alt="Infracommerce" className="h-4" />
        </div>
      </div>*/}
    </footer>
  )
}
