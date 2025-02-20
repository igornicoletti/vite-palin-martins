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
import { CircleDollarSign, LineChart, Receipt, Scale, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { NavigationMenuDemo } from './components/NavigationMenuDemo'
import { Button } from './components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"

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
                <div className="mr-auto space-y-4 grid grid-cols-2 items-center justify-between gap-48">
                  <div>
                    <h2 className="mb-2 text-sm font-medium text-gold md:text-left">Sobre nós</h2>
                    <h1 className="max-w-md scroll-m-20 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-left">
                      Excelência em Consultoria Tributária
                    </h1>
                  </div>
                  <div className='max-w-xl space-y-4'>
                    <p className="text-lg text-muted-foreground">Com mais de 20 anos de experiência, a Palin & Martins é uma consultoria tributária de referência, sediada em São José do Rio Preto, São Paulo.</p>
                    <p className="text-lg text-muted-foreground">Com mais de 20 anos de experiência, a Palin & Martins é uma consultoria tributária de referência, sediada em São José do Rio Preto, São Paulo.</p>
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

      </div>
    </>
  )
}

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
