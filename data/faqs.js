import site_config from "./site_config";
import moment from "moment";

export const faqs_data = [
  {
    question: "What time should I arrive?",
    answer: `Please arrive at ${moment(site_config.eventDate).format("h:mma")}.`,
  },
  {
    question: "Where is the venue?",
    answer: site_config.address,
  },
  {
    question: "How much is K1 Speed?",
    answer:
      'Races start at around $30 for a single race, plus an annual license fee of $7.95. I personally recommend the 3-race package which, with the license fee, comes out to around $75. If we get at least 8 people locked in, we can upgrade to a private party which means we will have longer races against only each other. You can find more information on pricing on the K1 Speed website.',
  },
  {
    question: "How fast are K1 Speed’s go-karts?",
    answer:
      "K1 Speed’s 20-horsepower electric adult go-karts can reach speeds of up to 45 miles per hour – the fastest in the industry. The junior karts can reach speeds of up to 20 miles per hour.",
  },
  {
    question: "How tall do you have to be to race at K1 Speed?",
    answer:
      "All junior racers will need to be at least 48” (4’) tall to race on track. All teen/adult racers will need to be at least 58” (4’10”) to race our larger, faster go-karts. IMPORTANT: Meeting the height requirement is not a guarantee you’ll be able to race our karts. Drivers will be measured at the location and must be able to safely operate all elements of the kart. Final approval will be at management’s discretion.",
  },
  {
    question: "How old do you have to be to race at K1 Speed?",
    answer:
      "There is no age requirement to race at K1 Speed, just a height requirement of at least 48″.",
  },
  {
    question: "Where do I park?",
    answer:
      "There is a big parking lot right in front of the venue! Google Maps will guide you straight to it.",
  },

  // Add more FAQs here
];