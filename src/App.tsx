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
import { LineChart } from 'lucide-react'

export const App = () => {
  return (
    <>

      {/* expertises */}
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="py-12 px-6 md:py-24 md:px-8 space-y-10">
          <div className="mx-auto max-w-2xl space-y-4">
            <h1 className="scroll-m-20 text-center text-3xl md:text-4xl font-bold tracking-tight">Expertise Tributária</h1>
            <p className="text-center text-lg text-muted-foreground tracking-tight">
              Cada segmento tem desafios e necessidades específicas. Por isso, oferecemos consultoria especializada e soluções tributárias personalizadas para otimizar sua gestão fiscal e impulsionar o crescimento do seu negócio.
            </p>
          </div>
          <div className='px-6 md:px-20 lg:px-0'>
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {expertiseData.map((expertise, i) => (
                  <CarouselItem key={i} className="pl-1 md:basis-1/2 xl:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardHeader>
                          <CardTitle>{expertise.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            {expertise.description}
                            <LineChart size={28} className='text-gold' />
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          {expertise.content}
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
        </div>
      </div>

      {/* Contact */}
      <div className="bg-foreground">
        <div className="mx-auto w-full min-w-0 max-w-7xl">
          <div className="py-12 px-6 md:py-24 md:px-8 space-y-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-popover">Entre em contato</h1>
              <p className="text-left text-lg text-muted-foreground tracking-tight">Precisa de soluções para otimizar a gestão e potencializar os resultados do seu negócio? Fale conosco e descubra como nossa expertise pode impulsionar o seu crescimento com segurança e eficiência.!</p>
            </div>
            <div className='px-10 md:px-20 lg:px-0'>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="py-12 px-6 md:py-24 md:px-8 space-y-10">
          <div className="max-w-2xl space-y-4">
            <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight">Perguntas frequentes</h1>
            <p className="text-left text-lg text-muted-foreground tracking-tight">Precisa de ajuda? Estamos aqui para você!</p>
          </div>

          <div className='px-10 md:px-20 lg:px-0'>
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

    </>
  )
}

const expertiseData = [
  {
    title: 'Consultoria Tributária',
    description: 'Estratégias inteligentes para otimizar sua carga tributária.',
    content: ' Identificamos oportunidades para reduzir encargos fiscais e garantir a conformidade da sua empresa com a legislação vigente. Conte com nossa expertise para uma gestão tributária eficiente e segura.',
    footer: 'Fale conosco',
    icon: LineChart
  },
  {
    title: 'Recuperação de créditos de ICMS',
    description: 'Recupere valores pagos indevidamente e reduza custos.',
    content: 'Realizamos uma análise detalhada das operações fiscais da sua empresa para identificar e recuperar créditos de ICMS, assegurando o correto aproveitamento de benefícios fiscais e melhorando a saúde financeira do seu negócio.',
    footer: 'Fale conosco',
  },
  {
    title: 'Compliance tributário',
    description: 'Segurança e conformidade na gestão fiscal.',
    content: 'Implementamos processos para garantir que sua empresa esteja sempre alinhada às exigências fiscais, evitando riscos, multas e penalidades. Reduza incertezas e atue com tranquilidade no mercado.',
    footer: 'Fale conosco',
  },
  {
    title: 'Recuperação de tributos federais',
    description: 'Recupere impostos pagos a mais e aumente sua lucratividade.',
    content: 'Identificamos tributos federais pagos indevidamente e auxiliamos na recuperação desses valores, garantindo que sua empresa aproveite todos os benefícios fiscais disponíveis.',
    footer: 'Fale conosco',
  },
  {
    title: 'Serviços jurídicos',
    description: 'Suporte jurídico estratégico para empresas.',
    content: 'Nossa equipe especializada oferece assessoria jurídica em questões tributárias, societárias e empresariais, proporcionando segurança e soluções eficientes para sua empresa.',
    footer: 'Fale conosco',
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
