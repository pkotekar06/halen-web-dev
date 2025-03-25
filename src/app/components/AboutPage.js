import ServiceBox from "./ServiceBox"
import HalenButton from "./HalenButton"
import RideShare from "../../images/rideshare.svg"
import FlightBooking from "../../images/flightBooking.svg"
import PackageDelivery from "../../images/packageDelivery.svg"
import GroceryDelivery from "../../images/groceryDelivery.svg"
import FoodDelivery from "../../images/foodDelivery.svg"
import CommunityEvents from "../../images/communityEvents.svg"
import RetailShopping from "../../images/retailShopping.svg"
import VacationRental from "../../images/vacationRental.svg"


const AboutPage = () => {
    const services = [
        {name: 'Rideshare', id: 1, imageName: RideShare},
        {name: 'Flight Booking', id: 2, imageName: FlightBooking},
        {name: 'Package Delivery', id: 3, imageName: PackageDelivery},
        {name: 'Grocery Delivery', id: 4, imageName: GroceryDelivery},
        {name: 'Retail Shopping', id: 5, imageName: RetailShopping},
        {name: 'Vacation Rental', id: 6, imageName: VacationRental},
        {name: 'Food Delivery', id: 7, imageName: FoodDelivery},
        {name: 'Community Events', id: 8, imageName: CommunityEvents},
      
    ]
    return (
        <div className='bg-gray-100 w-full h-auto shadow-xln py-16'>
            <div >
                <div className='cls-topic-title  py-8 text-center'><strong>About Halen</strong></div>
                <div className='content-text font-lato about-context-text'>Halen: Creating a better future for rideshare and delivery.</div>
                <div className="cls-list-items items-center text-center px-48"><strong>We are building a more equitable ecosystem by putting driver well-being and community engagement first. Experience the convenience of a single platform with a positive impact.</strong></div>

            </div>
            <div className='grid grid-cols-4 grid-rows-2 h-96 px-48 gap-2 py-8 justify-items-center content-center'>
                {
                    services.map((service) => (
                        <ServiceBox 
                            key={service.id} 
                            imageName={service.imageName}
                            name={service.name}
                        /> ))
                }
            </div>
                <div className="cls-halen-btn"><HalenButton label="Learn More" /></div>
        </div>
        )
}

export default AboutPage