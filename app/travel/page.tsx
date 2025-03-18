import { hotel_data } from "@/data/travel_hotel_info";
export default function Travel() {
  return (
    <>
      <div className="marcellus-regs divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center marcellus-regs text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Travel
          </h1>
          <p className="text-center marcellus-regs text-lg leading-7 text-gray-700 dark:text-gray-300">
            Below is the location of the K1 Speed venue and their contact info should you have any questions for them.
          </p>
        </div>
        <div>
          <a className="address m-5" type="http://schema.org/PostalAddress" target="_blank" href="https://www.google.com/maps/place/881+District+Pl,+Chula+Vista,+CA+91914/data=!4m2!3m1!1s0x80d945110c7b1657:0xccabb353ec955ded?sa=X&amp;ved=2ahUKEwjkr53428aBAxUOFjQIHWwsAIMQ8gF6BAgcEAA&amp;ved=2ahUKEwjkr53428aBAxUOFjQIHWwsAIMQ8gF6BAgdEAI"><br />
            <span className="addressLocality">K1 Speed</span><br />
            <span className="streetAddress">881 DISTRICT PL.</span><br />
            <span className="addressLocality">CHULA VISTA</span>, <span className="addressRegion">CA</span><span className="postalCode"> 91914</span>
          </a>
        </div>
      </div>
    </>
  );
}
