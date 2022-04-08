const initialState = {
  products: [
    {
      id: 1,
      title: "YAMAHA F310 Acoustic Guitar Rosewood Rosewood  (Brown)",
      description:
        "The Yamaha F310 acoustic folk guitar represents everything that you have come to expect from the world leader in musical instrument manufacturing. A spruce top, mahogany back and sides, and rosewood fingerboard come standard on this outstanding guitar. If you are looking for an amazing first guitar to fuel your creative fire then the F310 is the one for you.",
      price: " 10900",
      image: "../images/1.jpg",
      amount: 50,
    },
    {
      id: 2,
      title: "Fender CD-140SCE Semi Acoustic Guitar - Natural3",
      description:
        "The CD-140SCE expands on its siblings' features with upgraded Fishman® CD electronics, walnut back and sides and the addition of a hardshell case. The single-cutaway dreadnought body and solid spruce top provide robust tone, and the easy-to-play neck is comfortable for all playing styles. Topped off with a tortoiseshell pick guard and walnut headcap, the CD-140SCE is ready for whatever you throw at it, at home or on the stage.",
      price: " 36500",
      image: "../images/2.jpg",
      amount: 50,
    },
    {
      id: 3,
      title: "Revolt 39c Acoustic Guitar - Blue",
      description:
        "Introducing a budget friendly Guitar that is great in sound and in great finishes. Made of select tone wood Revolt Guitars is perfect for a Budget Beginner Guitar.",
      price: " 5000.00",
      image: "../images/3.jpg",
      amount: 10,
    },
    {
      id: 4,
      title: 'Yamaha APX600 Acoustic-Electric Guitar Oriental Blue Burst',
      description:
        'The Yamaha APX600 thinline cutaway acoustic-electric combines incredible comfort, easy, top-fret access and an incredible sound ready for all stages in your life. It features a distinct oval soundhole for thicker lower-mid response and a more attention-getting low end, with a sweet abalone rosette to perfectly complement it. Constructed from a combination of spruce top and nato body with a gloss finish and a locally sourced tropical tonewood for the neck with rosewood fingerboard and bridge',
      price: " 20099.99",
      image: "../images/4.png",
      amount: 5,
    },
  ],
};
const productReducer = (state = initialState, action) => {
  return state;
};
export default productReducer;
