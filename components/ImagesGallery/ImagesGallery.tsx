import Image from "next/image"

type ImagesGallery = {
    images: GalleryItem[]
    hasFeaturedImage?: boolean
}

export type GalleryItem = {
    title?:string, 
    src:string
}

const ImagesGallery = ({ images, hasFeaturedImage }: ImagesGallery) => {
    return (
        <div className="grid grid-cols-2 gap-4 max-w-md">
            {
                images.map((item, index) => {
                    return (
                        <div key={index} className={`${hasFeaturedImage && index === 0 ? 'col-span-2 h-60' : 'col-span-1 h-40'} rounded-md overflow-hidden relative w-full`}>
                            <Image className="object-cover" src={item.src} alt={item.title ?? ''} fill />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImagesGallery