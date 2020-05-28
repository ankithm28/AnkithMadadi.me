const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ankith Madadi',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ankith Madadi',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ankith Madadi',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Ankith Madadi',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Ankith MAdadi',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
