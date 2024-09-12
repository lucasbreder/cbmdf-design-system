import Image from "next/image"
import Moment from "react-moment"

type History = {
    title: string
    description: string
    author: string
    date: Date
}


const ImagesGallery = ({ title, description, author, date }: History) => {
    return (
        <div className="flex flex-col gap-3 text-primary">
            <div className="text-xl font-semibold">{title}</div>
            <div>{description}</div>
            <div className="flex text-xs">
                <div className="after:content-['•'] after:mx-2">{author}</div>
                <div><Moment format="DD/MM/YYYY" date={date} /></div>
            </div>
        </div>
    )
}

export default ImagesGallery