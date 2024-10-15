
import { GalleryItem } from "@/components/ImagesGallery/ImagesGallery"
import { VariantItem } from "./variantItem"
import { DocumentItem } from "./documentItem"

export type CatalogItem = {
    id:number
    name: string
    slug: string
    lifeCicle: number
    nicknames: string[]
    sigmanetCode: string
    barCode: string
    owner: string
    categories: string[]
    description: string
    obs: string
    features: string[]
    featureUnique: string
    variants: VariantItem[]
    maxStock: number
    minStock: number
    orderTime: number
    thumbnail: string
    gallery: GalleryItem[]
    documents: DocumentItem[]
    loanedItems: number
    stockedItems: number
    orderAverageTime: number
    lastBuyPrice: number
}