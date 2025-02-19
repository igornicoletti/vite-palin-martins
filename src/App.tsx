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

export const App = () => {
  return (
    <>

      {/* Sectors */}
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="pt-12 mb:pt-32 text-center space-y-2">
          <h1 className="scroll-m-20 text-3xl md:text-5xl font-semibold tracking-tight">Nossas expertizes</h1>
          <p className="text-base text-muted-foreground">Compreendemos que cada setor possui suas particularidades e desafios únicos. Por isso, nos especializamos em oferecer soluções personalizadas para cada parceiro.</p>
        </div>
        <div className='pb-12 md:pb-32 pt-8'>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {sectorData.map((sector, i) => (
                <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className='py-2'>
                      <CardHeader>
                        <CardTitle>{sector.title}</CardTitle>
                        <CardDescription>{sector.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{sector.content}</p>
                      </CardContent>
                      <CardFooter>
                        <p className='text-gold uppercase text-sm font-medium'>{sector.footer}</p>
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

      {/* Contact */}
      <div className="bg-black py-20">
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="pt-12 mb:pt-32 text-left space-y-2">
              <h1 className="scroll-m-20 text-3xl md:text-5xl font-semibold tracking-tight text-white">Entre em contato</h1>
              <p className="text-base text-muted-foreground">Pronto para explorar o que podemos fazer juntos? Nossa equipe está a apenas um bate-papo de distância!</p>
            </div>
            <div className='pb-12 md:pb-32 pt-8'>

            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="pt-12 md:pt-32 text-left space-y-2">
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-semibold tracking-tight">Perguntas frequentes</h1>
          <p className="text-base text-muted-foreground">Precisa de ajuda? Estamos aqui para você!</p>
        </div>
        <div className='pb-12 md:pb-32 pt-8'>
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

    </>
  )
}

const sectorData = [
  {
    title: 'Consultoria Tributária',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat veniam occaecat.',
    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. ',
    footer: 'Fale conosco',
  },
  {
    title: 'Recuperação de créditos de ICMS',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat',
    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. ',
    footer: 'Fale conosco',
  },
  {
    title: 'Compliance tributário',
    description: 'Anim aute id magna aliqua ad ad non deserunt su id magna aliqua ad ad non deserunt sunt commodo.',
    content: 'Anim aute id magna aliqua aliqua ad ad non deserunt ad ad non deserunt sunt. ',
    footer: 'Fale conosco',
  },
  {
    title: 'Recuperação de tributos federais',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. commodo. Elit sunt amet fugiat veniam occaecat.',
    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. ',
    footer: 'Fale conosco',
  },
  {
    title: 'Serviços jurídicos',
    description: 'Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
    content: 'Anim aute id magna aliqua ad ad non deserunt aliqua ad ad non deserunt sunt. ',
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
