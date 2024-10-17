import { CatalogItem } from "@/models/catalogItem";

export const catalogItemFactory = (json:any):CatalogItem => {

    const dataCoverted:any = json


    const catalogItem:CatalogItem = {
        id: dataCoverted['id'],
        name: dataCoverted['name'],
        slug: dataCoverted['slug'],
        lifeCicle: dataCoverted['lifeCicle'],
        nicknames: dataCoverted['nicknames'],
        sigmanetCode: dataCoverted['sigmanetCode'],
        barCode: dataCoverted['barCode'],
        owner: dataCoverted['owner'],
        categories: dataCoverted['categories'],
        description: dataCoverted['description'],
        obs: dataCoverted['obs'],
        features: dataCoverted['features'],
        featureUnique: dataCoverted['featureUnique'],
        variants: dataCoverted['variants'],
        maxStock: dataCoverted['maxStock'],
        minStock: dataCoverted['minStock'],
        orderTime: dataCoverted['orderTime'],
        thumbnail: dataCoverted['thumbnail'],
        gallery: dataCoverted['gallery'],
        documents: dataCoverted['documents'],
        loanedItems: dataCoverted['loanedItems'],
        stockedItems: dataCoverted['stockedItems'],
        orderAverageTime: dataCoverted['orderAverageTime'],
        lastBuyPrice: dataCoverted['lastBuyPrice']
    }

    
    return catalogItem
}