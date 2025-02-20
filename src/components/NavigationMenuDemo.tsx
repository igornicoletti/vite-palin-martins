"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import * as React from "react"
import { Button } from './ui/button'

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className='space-x-12'>
        <NavigationMenuItem>
          <NavigationMenuLink>Sobre</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Serviços</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Carreiras</NavigationMenuLink>
        </NavigationMenuItem>
        {/*   <NavigationMenuItem>
          <NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-4 md:w-[400px] lg:w-md">
              <ListItem href="/docs" title="Sobre">Saiba mais sobre a trajetória, os valores e a essência que definem a nossa história</ListItem>
              <ListItem href="/docs" title="Ecossistema">Com respeito e inovação como pilares, entregamos soluções que impulsionam o sucesso dos nossos clientes</ListItem>
              <ListItem href="/docs" title="Serviços & Segmentos">Com presença em múltiplos segmentos, adaptamos soluções para maximizar resultados em cada mercado</ListItem>
              <ListItem href="/docs" title="Soluções Personalizadas">Comprometidos em oferecer soluções que protejam e potencializem o sucesso do seu negócio</ListItem>
              <ListItem href="/docs" title="Contato">Dúvida? Tornamos tudo mais simples e eficiente</ListItem>
              <ListItem href="/docs" title="FAQ">Dúvida? Tornamos tudo mais simples e eficiente</ListItem>
              <ListItem href="/docs" title="Carreiras">Junte-se ao nosso time e faça parte de um ambiente colaborativo e em constante crescimento</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Button className="w-full" variant="secondary">Entre em contato conosco</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
