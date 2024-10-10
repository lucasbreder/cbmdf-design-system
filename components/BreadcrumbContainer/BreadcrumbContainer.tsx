import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type BreadcrumbContainerProps = {
    items: BreadcrumbContainerItemProps[]
}

type BreadcrumbContainerItemProps = {
    url: string
    title: string
}


export function BreadcrumbContainer({items}:BreadcrumbContainerProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
      {items.map((item, index) => {
        return (
            <>
        <BreadcrumbItem key={index}>
            <BreadcrumbLink>
                <Link href={item.url}>{item.title}</Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
       {index + 1 !== items.length &&  <BreadcrumbSeparator />}
        </>
        )
      })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
