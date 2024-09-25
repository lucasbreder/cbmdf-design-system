

import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import Link from "next/link"

type NavItemProps = {
    label: string
    url: string
    icon?:string
}


type NavProps = {
    items: NavItemProps[]
    variant?: 'default' | 'dark'
    size?: 'default' | 'sm'
    seeMoreUrl? : string
}


const Nav = ({items, variant = 'default', size = 'default', seeMoreUrl}:NavProps) => {

  const variantContainerDef = () => {
      switch (variant) {
          case 'dark':
              return `bg-primary  px-2 py-3 `
          default:
            return `bg-slate-100 px-4 py-5 `
      }
  }

  const variantListDef = () => {
    switch (size) {
        case 'sm':
            return `gap-0`
        default:
          return `gap-3`
    }
}

const variantItemDef = () => {
  switch (variant) {
      case 'dark':
          return `text-white hover:text-white`
      default:
        return `hover:text-white`
  }
}


  return (
    <NavigationMenu className={`${variantContainerDef()} px-4 py-5 w-max rounded-2xl`}>
      <NavigationMenuList className={`flex flex-col ${variantListDef()} `}>
        {items.map((item,index) => (
          <NavigationMenuItem  key={index}>
            <NavigationMenuLink className={`${variantItemDef()} flex gap-2 py-1 px-3 items-center font-light text-primary bg-transparent rounded-full hover:bg-primary  transition-all duration-300`} href={item.url}>
              {item.icon && <FontAwesomeIcon icon={['fas', item.icon as IconName ]} />}
              {item.label}
              </NavigationMenuLink>
        </NavigationMenuItem>
        ))}
        {seeMoreUrl && <NavigationMenuItem className={`font-bold text-sm ${variantItemDef()} ml-3`}>
          <NavigationMenuLink href={seeMoreUrl}>ver todos</NavigationMenuLink>
        </NavigationMenuItem>}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav