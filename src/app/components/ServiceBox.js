import Image from "next/image"

const ServiceBox = (props) => {
    return <div>
            <Image src={props.imageName} alt={props.name}/>
            <span className="text-[0.725rem] py-2"><strong>{props.name}</strong></span>
    </div>
}

export default ServiceBox