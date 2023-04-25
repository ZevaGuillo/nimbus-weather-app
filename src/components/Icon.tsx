import { FC, ReactNode } from "react";
import {
  BsCloudLightningRainFill,
  BsCloudRainFill,
  BsCloudSnowFill,
  BsCloudsFill,
  BsFillCloudFill,
  BsFillCloudHaze2Fill,
  BsFillCloudMoonFill,
  BsFillCloudSunFill,
  BsFillMoonFill,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { FaCloudSunRain, FaCloudMoonRain } from "react-icons/fa";

interface IconProps {
  weatherId: string;
}

interface WeatherIconMap {
  [weatherId: string]: ReactNode;
}

const weatherIcons: WeatherIconMap = {
  "01d": <BsSunFill />,
  "02d": <BsFillCloudSunFill />,
  "03d": <BsFillCloudFill />,
  "04d": <BsCloudsFill />,
  "09d": <BsCloudRainFill />,
  "10d": <FaCloudSunRain />,
  "11d": <BsCloudLightningRainFill />,
  "13d": <BsCloudSnowFill />,
  "50d": <BsFillCloudHaze2Fill />,
  "01n": <BsFillMoonFill />,
  "02n": <BsFillCloudMoonFill />,
  "03n": <BsFillCloudFill />,
  "04n": <BsCloudsFill />,
  "09n": <BsCloudRainFill />,
  "10n": <FaCloudMoonRain />,
  "11n": <BsCloudLightningRainFill />,
  "13n": <BsCloudSnowFill />,
  "50n": <BsCloudsFill />,
};

const Icon: FC<IconProps> = ({ weatherId }) => {
  return <>{weatherIcons[weatherId] || <BsSunFill />}</>;
};

export default Icon;
