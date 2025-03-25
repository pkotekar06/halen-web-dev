import Image from "next/image";
import restaurant from "../../images/restaurant.png";
import groceries from "../../images/grocery.png";
import retail from "../../images/retail.png";
import franchise from "../../images/franchise.png";
import HalenButton from "../components/HalenButton";
import { Typography } from "./Typography";
export default function Partneship() {
  return (
    <div className="px-8 w-full">
      <div className="py-8">

      <div className='cls-topic-title py-8 text-center'><strong>Partnership</strong></div>
            <div className="cls-topic-text  text-[1.425rem] pt-4 px-24 text-center"> Let us create something great together! Connect with us at Halen to
            explore collaboration opportunities. </div>

      </div>
      <div className="flex">
        <div className="w-1/2 pl-32 py-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="box-content w-54  h-full flex grow flex-col border-1 p-4 m-2 justify-center items-center">
              <div className="w-38 h-38 rounded-full object-cover bg-gray-100 flex flex-col justify-center items-center">
                <Image src={restaurant} alt="baby with headphones" />
              </div>
              <Typography className="py-2" variant="small">
                RESTAURANT
              </Typography>
            </div>
            <div className="box-content  h-full w-54  flex grow flex-col border-1 p-4 m-2 justify-center items-center">
              <div className="w-38 h-38 rounded-full object-cover bg-gray-100 flex flex-col justify-center items-center">
                <Image src={groceries} alt="baby with headphones" />
              </div>
              <Typography className="py-2" variant="small">
                GROCERY STORE
              </Typography>
            </div>
            <div className="row-start-2">
              <div className="box-content  h-full w-54  flex grow flex-col border-1 p-4 m-2 justify-center items-center">
                <div className="w-38 h-38 rounded-full object-cover bg-gray-100 flex flex-col justify-center items-center">
                  <Image src={retail} alt="baby with headphones" />
                </div>
                <Typography className="py-2" variant="small">
                  RETAIL STORE
                </Typography>
              </div>
            </div>
            <div className="row-start-2">
              <div className="box-content  h-full  w-54  flex grow flex-col border-1 p-4 m-2 justify-center items-center">
                <div className="w-38 h-38 rounded-full object-cover bg-gray-100 flex flex-col justify-center items-center">
                  <Image src={franchise} alt="baby with headphones" />
                </div>
                <Typography className="py-2" variant="small">
                  FRANCHISE
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="max-w-sm mx-auto  text-left pb-4 cls-sub-heading font-bold"><strong>Partner as a Restaurant</strong></div>
          <form className="max-w-sm mx-auto">
            <div className="flex ">
              <fieldset className=" px-1 w-1/2 cls-halen-input rounded-sm">
                <legend>First Name</legend>
                <input></input>
              </fieldset>
              <fieldset className="w-1/2 px-1 ml-2 cls-halen-input rounded-sm">
                <legend>Last Name</legend>
                <input></input>
              </fieldset>
            </div>
            <fieldset className=" px-3 cls-halen-input rounded-sm">
              <legend>Phone Number</legend>
              <input></input>
            </fieldset>
            <fieldset className=" px-3 cls-halen-input rounded-sm">
              <legend>Restaurant Name</legend>
              <input></input>
            </fieldset>
            <fieldset className=" px-3 cls-halen-input rounded-sm">
              <legend>Restaurant Address</legend>
              <input></input>
            </fieldset>
            <fieldset className=" px-3 cls-halen-input rounded-sm">
              <legend>Email Address</legend>
              <input></input>
            </fieldset>
            <fieldset className=" px-3 cls-halen-input rounded-sm">
              <legend>Message</legend>
              <textarea></textarea>
            </fieldset>
            <div className="py-4">
              <button
                type="button"
                className="w-full halen-btn px-3 py-2 text-xs font-medium text-center text-white rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
