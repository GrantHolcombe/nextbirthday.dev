import Image from "next/image";

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
          <a className="address m-5 flex flex-col-reverse md:flex-row" type="http://schema.org/PostalAddress" target="_blank" href="https://www.google.com/maps/search/k1+chula+vista/@32.6582231,-117.0059939,12.91z?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"><br />
            <div className="w-full md:w-1/2">
              <Image src={"/static/images/map.png"} alt="map of chula vista" width={544} height={306} className="rounded-md" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center my-5 md:mx-5">
              <span className="addressLocality">K1 Speed</span>
              <span className="streetAddress">881 DISTRICT PL.</span>
              <span className="addressLocality">CHULA VISTA, CA 91914</span>
              <span className="addressPhone">+1 (619)-600-3200</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
