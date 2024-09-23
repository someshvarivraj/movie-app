import Chance from "chance";
import { loremIpsum } from "lorem-ipsum";

export const generateText = () => {
  const randomText = loremIpsum({
    count: 3, // Number of "sentences"
    units: "sentences", // Can be "words", "sentences", or "paragraphs"
  });

  return randomText;
};

export const generateBoxOffice = () => {
  const chance = new Chance();
  const boxOfficeEstimate = chance.integer({ min: 1000000, max: 1000000000 });
  console.log(boxOfficeEstimate);
  return boxOfficeEstimate;
};
