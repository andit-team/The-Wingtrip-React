export const HeaderData = [
  {
    menu: "Home",
    link: "/",
  },
  {
    menu: "About",
    link: "/about",
  },
  {
    menu: "Event",
    link: "/#",
    submenu: true,
    subMenuitem: [
      {
        subItem: "Event",
        linkL: "/event",
      },

      {
        subItem: "Events Booking",
        linkL: "/event-booking",
      },
      {
        subItem: "Events Details",
        linkL: "/event-details",
      },
    ],
  },
  {
    menu: "Portfolio",
    link: "/#",
    submenu: true,
    subMenuitem: [
      {
        subItem: "Portfolio",
        linkL: "/portfolio",
      },

      {
        subItem: "Portfolio-detailse",
        linkL: "/portfolio-details",
      },
    ],
  },
  {
    menu: "Pages",
    link: "/#",
    submenu: true,
    subMenuitem: [
      {
        subItem: "Gallery",
        linkL: "/gallery",
      },

      {
        subItem: "Service",
        linkL: "/service",
      },
      {
        subItem: "Service details",
        linkL: "/service-details",
      },
      {
        subItem: "Team",
        linkL: "/team",
      },
      {
        subItem: "Team details",
        linkL: "/team-details",
      },
      {
        subItem: "Faq",
        linkL: "/faqs",
      },
      {
        subItem: "Testimonial",
        linkL: "/testimonial",
      },
      {
        subItem: "Ticket",
        linkL: "/ticket",
      },
      {
        subItem: "Shop",
        linkL: "#!",
        subMenuActive:true,
        subMenuitems: [
          {
            subItem: "Products",
            linkL: "/product",
          },

          {
            subItem: "Products details",
            linkL: "/product-details",
          },
          {
            subItem: "Cart page",
            linkL: "/cart",
          },
          {
            subItem: "Checkout",
            linkL: "/checkout",
          }
        ],
      },
      {
        subItem: "Login & Registration",
        linkL: "/login",
      },
      {
        subItem: "Coming soon",
        linkL: "/coming-soon",
      },
      {
        subItem: "Error",
        linkL: "*",
      },
    ],
  },
  {
    menu: "News",
    link: "/#",
    submenu: true,
    subMenuitem: [
      {
        subItem: "News",
        linkL: "/news",
      },

      {
        subItem: "News Details",
        linkL: "/news-details",
      },
    ],
  },
  {
    menu: "Contact",
    link: "/contact",
  },
];
