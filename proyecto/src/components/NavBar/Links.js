import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Links = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Mouse',
    path: '/category/Mouse',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Mousepads',
    path: '/category/Mousepads',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Keyboards',
    path: '/category/Keyboards',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Headphones',
    path: '/category/Headphones',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'LED Ilumination',
    path: '/category/Ilumination',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
  }
];