import { CatalogItem } from "@/models/catalogItem"
import { Label } from "recharts"

export const nav = [
  {
      label: 'Dashboard',
      url: '/',
      icon: 'border-all'
  }, {
      label: 'Catálogo',
      url: '/catalogo',
      icon: 'book'
  }, {
      label: 'Inventário',
      url: '/inventario',
      icon: 'boxes-stacked'
  }, {
      label: 'Conferência',
      url: '/conferencia',
      icon: 'check'
  }, {
      label: 'Transferências',
      url: '/transferencia',
      icon: 'right-left'
  }, {
      label: 'Organização',
      url: '/organizacao',
      icon: 'sitemap'
  }, {
      label: 'Cautelas',
      url: '/cautelas',
      icon: 'arrow-up-from-bracket'
  }
]

export const localsNav = [
  {
      label: 'Depósito',
      url: '/deposito'
  }, {
      label: 'ABT-100',
      url: '/abt100'
  }, {
      label: 'ASE-100',
      url: '/ase100'
  }, {
      label: 'ABTF-100',
      url: '/abtf100'
  }
]

export const tablegrid = `[
{
  "image": "/materials/1.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/2.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Incêndio"
    },
    {
      "title": "EPI"
    },
    {
      "title": "Salvamento"
    }
  ]
},
{
  "image": "/materials/3.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/4.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "EPI"
    },
    {
      "title": "Salvamento"
    }
  ]
},
{
  "image": "/materials/5.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/6.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/7.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/8.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/9.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/10.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/11.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
},
{
  "image": "/materials/12.jpg",
  "id": 123,
  "title": "Capa de Aproximação",
  "categories": [
    {
      "title": "Teste"
    },
    {
      "title": "Teste 1"
    }
  ]
}
]

`

export const materialCards:CatalogItem[] = [
    {
      id: 123,
      name: 'Corta Vergalhão',
      slug: 'corta-vergalhao',
      lifeCicle: 12,
      sigmanetCode: '12223',
      barCode: '1213125',
      owner: 'GBS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum hendrerit mollis. In ac sem eros. Nulla dictum pretium magna, nec bibendum massa sollicitudin sed. ',
      obs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum hendrerit mollis. In ac sem eros. Nulla dictum pretium magna, nec bibendum massa sollicitudin sed. ',
      nicknames: ['capa', 'epi'],
      thumbnail: "/materials/1.jpg",
      gallery: [
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" },
        { title: '', src: "/materials/1.jpg" }
      ],
      variants: [
        { title: 'Marca', value: "Drager" },
        { title: 'Modelo', value: "X123" },
        { title: 'Cor', value: "Amarelo" },
        { title: 'Cor', value: "Branco" },
      ],
      minStock: 100,
      maxStock: 550,
      loanedItems: 10,
      stockedItems: 230,
      orderAverageTime: 2,
      lastBuyPrice: 2000,
      categories: ['capa'],
      features: ['transferencia-facilitada', 'fracionavel'],
      featureUnique: 'material-permanente',
      orderTime: 1,
      documents: []
    },
]