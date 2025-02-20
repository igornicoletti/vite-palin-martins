import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CircleDollarSign, Clock, LineChart, Mail, Map, Phone, Receipt, Scale, ShieldCheck } from 'lucide-react'
import { ComponentPropsWithoutRef, RefAttributes, useState } from 'react'
import { NavigationMenuDemo } from './components/NavigationMenuDemo'
import { Button } from './components/ui/button'

export const App = () => {
  const [activeTab, setActiveTab] = useState("servicos")
  return (
    <>
      <div className="relative flex min-h-svh flex-col bg-background">

        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto w-full min-w-0 max-w-7xl flex h-20 items-center px-6 md:px-8">

            <div className="w-full flex items-center justify-between gap-2">
              <a href="/">
                <img className='h-full max-h-14 w-auto' src="/palin-martins-black.png" alt="" />
              </a>
              <NavigationMenuDemo />
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col">

          {/* About us */}
          <section className="border-grid border-b">
            <div className="mx-auto w-full min-w-0 max-w-7xl">
              <div className="py-10 px-6 md:py-24 md:px-8 space-y-16">
                <div className="mr-auto max-w-2xl space-y-4">
                  <h2 className="mb-2 text-sm font-medium text-gold md:text-left">Sobre nós</h2>
                  <h1 className="max-w-md scroll-m-20 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-left">
                    Excelência em Consultoria Tributária
                  </h1>
                  <div className='max-w-xl space-y-4'>
                    <p className="text-lg text-muted-foreground">Com mais de 20 anos de experiência, a Palin & Martins é uma consultoria tributária de referência, sediada em São José do Rio Preto, São Paulo.</p>
                    <p className="text-lg text-muted-foreground">Nossa equipe, altamente qualificada, atende pessoas físicas e jurídicas, destacando-se na recuperação de créditos de ICMS, por alcançar resultados expressivos para nossos clientes, além de atuar em Compliance Tributário, recuperação de tributos federais e serviços jurídicos. Sempre embasados na legislação, garantimos segurança e sustentabilidade para seu negócio.</p>
                    <p className="text-lg text-muted-foreground">Nosso compromisso é identificar as necessidades de cada cliente, proporcionando soluções personalizadas e eficazes que fortalecem seus negócios e garantem plena satisfação.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Expertise Tributária */}
          <div className="mx-auto w-full min-w-0 max-w-6xl">
            <div className="py-10 px-6 md:py-24 md:px-8 space-y-16">
              <div className="mx-auto max-w-2xl space-y-4">
                <h2 className="mb-2 text-sm font-medium text-gold md:text-center">Nossas especialidades</h2>
                <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-center">Expertise Tributária</h1>
                <p className="max-w-2xl text-center text-lg text-muted-foreground">Cada segmento tem desafios e necessidades específicas. Por isso, oferecemos consultoria especializada e soluções tributárias personalizadas para otimizar sua gestão fiscal e impulsionar o crescimento do seu negócio.</p>
              </div>
              <div className='px-6 md:px-20 lg:px-0'>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-1">
                    {expertiseData.map((expertise, i) => (
                      <CarouselItem key={i} className="pl-1 md:basis-1/2 xl:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardHeader className='items-center text-center'>
                              <expertise.icon size={32} strokeWidth={1} className='mx-auto mb-6 text-gold' />
                              <CardTitle className='text-lg'>{expertise.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className='space-y-2'>
                                {expertise.contents.map((content, i) => (
                                  <p key={i}>{content}</p>
                                ))}
                              </CardDescription>
                            </CardContent>
                            <CardFooter>
                              <Button className="w-full">{expertise.footer}</Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className='pt-12'>
                <div className="flex justify-around gap-16 border-b">
                  <button className={`pb-1 text-lg uppercase ${activeTab === "servicos" ? " border-b-2 border-gold text-gold font-medium" : ""}`} onClick={() => setActiveTab("servicos")}>
                    Serviços
                  </button>
                  <button className={`pb-1 text-lg uppercase ${activeTab === "segmentos" ? " border-b-2 border-gold text-gold font-medium" : ""}`} onClick={() => setActiveTab("segmentos")}>
                    Segmentos
                  </button>
                </div>
                {/* Conteúdo */}
                <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                  {activeTab === "servicos" && (
                    <>
                      <div>
                        <ul className="mt-4 space-y-2">
                          {['Recuperação Créditos ICMS Crédito Acumulado', 'Comercialização de Créditos dos ICMS', 'Recebimento e transformação de crédito ICMS', 'Recuperação Créditos ICMS', 'Produtor Rural', 'Teses Tributárias', 'Recuperação e Compensação', 'de Tributos Federais', 'Recuperação de Ativos', 'Análise de Auto de infração Estadual', 'Compliance Tributário'].map((item, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-gold mr-2">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <img src="/laptop-preview.png" alt="Image" className="max-w-xs md:max-w-sm" />
                      </div>
                    </>
                  )}
                  {activeTab === "segmentos" && (
                    <>
                      <div>
                        <ul className="mt-4 space-y-2">
                          {['Produtor Rural', 'Revendas', 'Agropecuária', 'Fábricas e Indústrias', 'Distribuidoras', 'Frigoríficos', 'Granja', 'Bebidas'].map((item, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-gold mr-2">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <img src="/laptop-preview.png" alt="Image" className="max-w-xs md:max-w-sm" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact us */}
          <div className="bg-foreground">
            <div className="mx-auto w-full min-w-0 max-w-7xl">
              <div className="py-10 px-6 md:py-24 md:px-8 space-y-16">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-sm font-medium text-gold">Fale conosco</h2>
                  <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-popover">Entre em Contato</h1>
                  <p className="max-w-xl text-left text-lg text-muted-foreground">Precisa de soluções para otimizar a gestão e potencializar os resultados do seu negócio? Fale conosco e descubra como nossa expertise pode impulsionar o seu crescimento com segurança e eficiência.!</p>
                </div>
                <div className=''>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mx-auto w-full min-w-0 max-w-6xl">
            <div className="py-16 px-6 md:py-32 md:px-8 space-y-10">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-sm font-medium text-gold">Precisa de ajuda? Estamos aqui para você!</h2>
                <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tighter">Perguntas frequentes</h1>
              </div>
              <div className='md:px-20 lg:px-0'>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, i) => (
                    <AccordionItem key={i} value={`'item-'${+i}`}>
                      <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                      <AccordionContent>{faq.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-foreground">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-5 xl:gap-28">
              <div className="space-y-4 xl:col-span-2 -mt-4">
                <img className="h-12 w-auto sm:h-20" alt="Palin e Martins" src="./palin-martins-white.png" />
                <div className="space-y-2">
                  <p className="flex items-center space-x-4 text-sm/6 text-balance text-muted-foreground">
                    <Map size={14} color="#c5b358" />
                    <span>Rua Bernardino de Campos, 3522 - São José do Rio Preto - SP</span>
                  </p>
                  <p className="flex items-center space-x-4 text-sm/6 text-balance text-muted-foreground">
                    <Phone size={14} color="#c5b358" />
                    <span>(17) 3301-2564</span>
                  </p>
                  <p className="flex items-center space-x-4 text-sm/6 text-balance text-muted-foreground">
                    <Mail size={14} color="#c5b358" />
                    <a href="mailto:greici.burik@palinemartins.com.br" className="text-muted-foreground">
                      {'contato@palinemartins.com.br'}
                    </a>
                  </p>
                  <p className="flex items-center space-x-4 text-sm/6 text-balance text-muted-foreground">
                    <Clock size={14} color="#c5b358" />
                    <span>De segunda à sexta das 07h30 às 18h00</span>
                  </p>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-6 xl:col-span-3 xl:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm/6 font-medium text-white">Empresa</h3>
                    <ul role="list" className="mt-6 space-y-2">
                      {navigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-muted-foreground hover:text-white">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm/6 font-medium text-white">Siga-nos</h3>
                    <ul role="list" className="mt-6 space-y-2">
                      {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-muted-foreground hover:text-white">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm/6 font-medium text-white">Recursos</h3>
                    <ul role="list" className="mt-6 space-y-2">
                      {navigation.legal.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-muted-foreground hover:text-white">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between gap-2">
                <p className="text-center text-sm/6 text-muted-foreground font-light">© 2025 Palin e Martins. Todos os direitos reservados.</p>
                <div className="flex gap-x-6">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-muted-foreground hover:text-golden">
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


const navigation = {
  main: [
    { name: 'Sobre', href: '#' },
    { name: 'Serviços e Segmentos', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  solutions: [
    { name: 'Sobre', href: '#' },
    { name: 'Serviços e Segmentos', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  company: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Linkedin', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Whatsapp', href: '#' },
  ],
  legal: [
    { name: 'Termos de serviço ', href: '#' },
    { name: 'Política de privacidade ', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://web.facebook.com/PalineMartins?locale=pt_BR',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/palin.martins/',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/palinemartins/',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@PalineMartins',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]
}

export interface IconProps extends ComponentPropsWithoutRef<'svg'>, RefAttributes<SVGSVGElement> {
  alt?: string
  color?: string
  size?: string | number
  mirrored?: boolean
}
export type Icon = React.ForwardRefExoticComponent<IconProps>


const expertiseData = [
  {
    title: 'Consultoria Tributária',
    contents: [
      'Conte com nossa expertise para uma gestão tributária eficiente e segura.',
      'Identificamos oportunidades para reduzir encargos fiscais e garantir a conformidade da sua empresa com a legislação vigente.',
    ],
    footer: 'Saiba mais',
    icon: LineChart
  },
  {
    title: 'Recuperação de tributos federais',
    contents: [
      'Recupere impostos pagos a mais e aumente sua lucratividade.',
      'Identificamos tributos federais pagos indevidamente e auxiliamos na recuperação desses valores, garantindo que sua empresa aproveite todos os benefícios fiscais disponíveis.',
    ],
    footer: 'Saiba mais',
    icon: Receipt
  },
  {
    title: 'Recuperação de créditos de ICMS',
    contents: [
      'Recupere valores pagos indevidamente e reduza custos.',
      'Realizamos uma análise detalhada das operações fiscais da sua empresa para identificar e recuperar créditos de ICMS, assegurando o correto aproveitamento de benefícios fiscais e melhorando a saúde financeira do seu negócio.',
    ],
    footer: 'Saiba mais',
    icon: CircleDollarSign
  },
  {
    title: 'Compliance tributário',
    contents: [
      'Segurança e conformidade na gestão fiscal.',
      'Implementamos processos para garantir que sua empresa esteja sempre alinhada às exigências fiscais, evitando riscos, multas e penalidades.',
      'Reduza incertezas e atue com tranquilidade no mercado.',
    ],
    footer: 'Saiba mais',
    icon: ShieldCheck
  },
  {
    title: 'Serviços jurídicos',
    contents: [
      'Suporte jurídico estratégico para empresas.',
      'Nossa equipe especializada oferece assessoria jurídica em questões tributárias, societárias e empresariais, proporcionando segurança e soluções eficientes para sua empresa.',
    ],
    footer: 'Fale conosco',
    icon: Scale
  },
]


const faqData = [
  {
    trigger: "O que é consultoria tributária e como ela pode beneficiar minha empresa?",
    content: "A consultoria tributária ajuda a otimizar o pagamento de tributos, oferecendo soluções estratégicas para minimizar custos e garantir a conformidade com a legislação vigente.",
  },
  {
    trigger: "Como posso recuperar créditos de ICMS?",
    content: "A recuperação de créditos de ICMS envolve a identificação de valores pagos a mais em compras de produtos e serviços. Com a assessoria adequada, é possível solicitar a devolução desses valores junto aos órgãos competentes.",
  },
  {
    trigger: "Quais tributos federais podem ser recuperados?",
    content: "É possível recuperar tributos federais como PIS, COFINS, IPI, IRPJ, entre outros, por meio de revisão de pagamentos e contestação de valores indevidos.",
  },
  {
    trigger: "O que é Compliance Tributário e por que é importante?",
    content: "Compliance Tributário é o conjunto de práticas e procedimentos que garantem que a empresa cumpra as obrigações fiscais corretamente, evitando multas e sanções legais.",
  },
  {
    trigger: "Minha empresa está em risco de ser autuada pelo fisco?",
    content: "Se a empresa não está em conformidade com a legislação fiscal, pode estar sujeita a autuações e multas. A consultoria tributária ajuda a identificar e corrigir possíveis falhas antes que isso aconteça.",
  },
  {
    trigger: "Como posso garantir que minha empresa esteja em conformidade tributária?",
    content: "A melhor maneira de garantir conformidade tributária é contar com uma revisão periódica das obrigações fiscais, garantindo que os impostos sejam pagos corretamente e dentro do prazo.",
  },
  {
    trigger: "Quais são as vantagens de uma consultoria tributária especializada?",
    content: "Uma consultoria especializada oferece conhecimento aprofundado das leis tributárias, ajudando a evitar erros no pagamento de tributos, reduzir custos e identificar oportunidades de recuperação de créditos.",
  },
  {
    trigger: "Quais são os custos para contratar uma consultoria tributária?",
    content: "O custo depende da complexidade dos serviços necessários e do porte da empresa. É possível obter um orçamento personalizado que atenda às suas necessidades específicas.",
  },
  {
    trigger: "Como as informações da minha empresa serão protegidas?",
    content: "As informações são tratadas com total confidencialidade e segurança, seguindo as melhores práticas de proteção de dados e normas éticas do setor.",
  },
  {
    trigger: "É possível contar com a consultoria tributária de forma contínua?",
    content: "Sim, muitas empresas optam por uma assessoria contínua para garantir que as obrigações fiscais sejam cumpridas sem erros e para manter a empresa sempre em conformidade com as mudanças na legislação tributária.",
  },
]
