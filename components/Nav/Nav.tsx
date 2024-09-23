

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
}


const Nav = ({items}:NavProps) => {
  return (
    <NavigationMenu className="bg-slate-100 px-4 py-5 w-min rounded-2xl">
      <NavigationMenuList className="flex flex-col gap-3">
        {items.map((item,index) => (
          <NavigationMenuItem  key={index}>
            <NavigationMenuLink className="flex gap-2 py-1 px-3 items-center font-light text-primary bg-transparent rounded-full hover:bg-primary hover:text-white transition-all duration-300" href={item.url}>
              {item.icon && <FontAwesomeIcon icon={['fas', item.icon as IconName ]} />}
              {item.label}
              </NavigationMenuLink>
        </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav