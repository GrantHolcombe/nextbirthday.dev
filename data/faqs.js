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
      '3 adult races will be pre-paid as part of the party package. Child sessions or additonal adults beyond our group buy will be at the venues current rate shown HERE:',
  },
  {
    question: "How fast are K1 Speed’s go karts?",
    answer:
      "K1 Speed’s 20-horsepower electric adult go karts can reach speeds of up to 45 miles per hour – the fastest in the industry. The Junior karts can reach speeds of up to 20 miles per hour.",
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
      "There is a big parking lot right in front of the venue! Google maps will guide you straight to it.",
  },
  {
    question: "Will there be a block of hotels?",
    answer:
      "We want to give our out of town guests the choice to stay where they please, and thus there will not be a block of hotels, however we have listed some good options in the area on our Travel page.",
  },
  {
    question: "Will your wedding be indoors or outdoors?",
    answer:
      "The ceremony will be hosted outdoors, but the reception will be indoors.",
  },
  {
    question:
      "Will there be meal options for guests with dietary restrictions or allergies?",
    answer:
      "If you have any food allergies, please contact one of our wedding planners (Alice or Bob) to get further information.",
  },

  // Add more FAQs here
];
