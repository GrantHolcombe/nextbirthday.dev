import Image from "@/components/Image";
import moment from "moment";
import site_config from "@/data/site_config";

export default function Schedule() {
  return (
    <>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-4 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center marcellus-regs text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Schedule
          </h1>
          <p className="marcellus-regs text-lg text-center leading-7 text-gray-700 dark:text-gray-300">
            Glad you are considering joining me for my birthday party. The main activity will be racing, but there will be arcade games and food for those who do not wish to drive karts.
          </p>
        </div>
        <div className="space-y-4 pb-8 pt-6 md:space-y-5">
          <p className="marcellus-bold text-center text-2xl dark:text-gray-300">
            Arrival Time
            <br></br>
            <span className="marcellus-regs non-bold text-xl">
              {moment(site_config.eventDate).format("dddd MMMM Do, YYYY [at] h:mma")}
            </span>
          </p>
          <p className="text-center marcellus-regs text-gray-700 dark:text-gray-300 text-md leading-7">
            {site_config.address}
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <div className="marcellus-regs md max-w-[544px] p-4 md:w-1/2">
              <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                <Image
                  alt="Ceremony"
                  src="/static/images/pits.jpg"
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
                <div className="p-6">
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    Racing
                  </h2>
                  <p className="prose mb-3 max-w-none text-gray-700 dark:text-gray-300">
                    Arrive: {moment(site_config.eventDate).format("h:mma")} first session: {moment(site_config.eventDate).add(45, "minutes").format("h:mma")} <br /><br /> 
                    The amount of racing you would like to do is up to each person. I will be running 3 races, and if we get 7 more people to commit to 3 races we can upgrade to a private party. Its totally fine to come and not race or if just your kids want to try once, the goal is to have fun. 
                    <br /><br />
                    Additionally if there are enough children over 48{`"`} tall that can responsibly listen to instructions, there is the possibility of having a kids race on the smaller and slower junior karts. <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="marcellus-regs md max-w-[544px] p-4 md:w-1/2">
              <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                <Image
                  alt="reception"
                  src="/static/images/arcade.jpg"
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
                <div className="p-6">
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    Food & Arcade
                  </h2>
                  <p className="prose max-w-none text-gray-700 dark:text-gray-300">
                    {moment(site_config.eventDate).format("h:mma")} until {moment(site_config.eventDate).add(2, 'hours').format("h:mma")} <br /><br />
                    For those that do not wish to race karts or in between sessions for those that are racing, there will be arcade games and food available.
                    Depending again on headcount we may have a private room. However even if this is not the case there will be plenty of room and activities for partiers of all ages.
                    <br /><br />
                    K1 offers beer and wine for those 21 and older who would like to enjoy responsibly.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
