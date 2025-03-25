import Image from "next/image";
import logo from "../../images/halen-large-green.svg";
export default function Footer() {
  return (
    <div className="cls-footer-menu w-full h-auto px-36 py-8">
      <div className="flex -stretch py-8">
        <div className="w-full px-8">
          <Image className="w-" src={logo} alt="girl" />
        </div>
        <div className="w-full">
          <div className="text-left pb-4 cls-sub-heading">
            <strong>Company</strong>
          </div>
          <div className="text-left text-lg font-lato py-2">About Us</div>
          <hr />
          <div className="text-left text-lg font-lato py-2">Careers</div>
          <hr />
          <div className="text-left text-lg font-lato py-2">Newsroom</div>
        </div>
        <div className="w-full px-8">
          <div className="text-left pb-4 cls-sub-heading">
            <strong>Partnership</strong>
          </div>
          <div className="text-left text-lg font-lato py-2">
            Partner as a Retailer
          </div>
          <hr />
          <div className="text-left text-lg font-lato py-2">
            Partner as a Grocery
          </div>
          <hr />
          <div className="text-left text-lg font-lato py-2">
            Partner as a Restaurant
          </div>
          <hr />
          <div className="text-left text-lg font-lato py-2">
            Become a Franchise
          </div>
        </div>
      </div>
    </div>
  );
}
