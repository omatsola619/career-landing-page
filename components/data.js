import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { FaGraduationCap, FaAward, FaUserGraduate, FaUserMd, FaUserTie, FaLaptopCode } from 'react-icons/fa';

import benefitOneImg from "../public/img/teach.svg";
import benefitTwoImg from "../public/img/side.png";

const benefitOne = {
  title: "Career Lab benefits",
  desc: "With career lab you get the following",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Programs",
  desc: "Personalized, expert services & support for all stakeholders in the career guidance process",
  image: benefitTwoImg,
  bullets: [
    {
      title: "For College Students",
      desc: "5-dimensional assessment & superior guidance to help you discover your perfect career and choose the best next step.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Career Psychometric assessment.",
      desc: "Advanced assessment & personalised guidance to help you select the perfect stream and subjects that align you to the right careers",
      icon: <FaUserGraduate />,
    },
    {
      title: "In-house Career seminars for Schools",
      desc: "Expert guidance & 5-dimensional assessment to help you discover your perfect career and choose the right course and college.",
      icon: <FaAward />,
    },
  ],
};


export {benefitOne, benefitTwo};
