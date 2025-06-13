const webDevVideos = [
  {
    id: "w1",
    title:
      "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    category: "Web Development",
    img: "https://i.ytimg.com/vi/7EKgIC5I_48/hq720.jpg",
    url: "https://www.youtube.com/embed/tVzUXW6siu0?si=0QF7UOTYmVke7oOw",
    time: "31:20",
  },
  {
    id: "w2",
    title:
      "Your First HTML Website | Sigma Web Development Course - Tutorial # 2",
    category: "Web Development",
    img: "https://example.com/next.jpg",
    url: "https://www.youtube.com/embed/kJEsTjH5mVg?si=oCao3LWhKXiz1loY",
    time: "28:31",
  },
  {
    id: "w3",
    title:
      "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
    category: "Web Development",
    img: "https://example.com/next.jpg",
    url: "https://www.youtube.com/embed/BGeDBfCIqas?si=zct8R_7k0YbajuKT",
    time: "11:12"
  },
  {
    id: "w4",
    title:
      "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
    category: "Web Development",
    img: "https://example.com/next.jpg",
    url: "https://www.youtube.com/embed/nXba2-mgn1k?si=zsvlVqL4HmVC4PeP",
    time: "19:34"
  },
  {
    id: "w5",
    title:
      "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
    category: "Web Development",
    img: "https://example.com/next.jpg",
    url: "https://www.youtube.com/embed/1BsVhumGlNc?si=Gj6276WIujQu8Unk",
    time: "18:20"
  },
  {
    id: "w6",
    title:
      "SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6",
    category: "Web Development",
    img: "https://example.com/next.jpg",
    url: "https://www.youtube.com/embed/CyRlWlaJnTY?si=XpmTx6oC9mNFspIE",
    time: "13:15"
  },
  {
    id: "w7",
    title: "Forms and Inputs in HTML | Sigma Web Development Course - Tutorial #7",
    category: "Web Development",
    img: "https://example.com/image7.jpg",
    url: "https://www.youtube.com/embed/tLBlhp0SA_0?si=M2M-wXM71wKAT1tA",
    time: "14:53"
  },
  {
    id: "w8",
    title: "Inline & Block Elements in HTML | Sigma Web Development Course - Tutorial #8",
    category: "Web Development",
    img: "https://example.com/image8.jpg",
    url: "https://www.youtube.com/embed/vnnlUCLfn6I?si=NWfnZIM766sJjvwu",
    time: "10:52"
  },
  {
    id: "w9",
    title: "Id & Classes in HTML | Sigma Web Development Course - Tutorial #9",
    category: "Web Development",
    img: "https://example.com/image9.jpg",
    url: "https://www.youtube.com/embed/vlAWzsGd-Yk?si=PcKatyl0jEDRcw24",
    time: "10:57"
  },
  {
    id: "w10",
    title:"Video,Audio & Media in HTML | Sigma Web Development Course - Tutorial #10",
    category: "Web Development",
    img: "https://example.com/image10.jpg",
    url: "https://www.youtube.com/embed/XZwBNDGuWGU",
    time: "14:48"
  },
  {
    id: "w11",
    title: " Semantic Tags in HTML | Sigma Web Development Course - Tutorial #11",
    category: "Web Development",
    img: "https://example.com/image11.jpg",
    url: "https://www.youtube.com/embed/fhoDRB53DwY",
    time: "10:42"
  },
  {
    id: "w12",
    title: "Exercise 1 - Pure HTML Media Player | Sigma Web Development Course - Tutorial #12",
    category: "Web Development",
    img: "https://example.com/image12.jpg",
    url: "https://www.youtube.com/embed/5xFRg_TzlAg",
    time: "3:41"
  },
  {
    id: "w13",
    title: "Entities, Code tage and more on HTML | Sigma Web Development Course - Tutorial #13",
    category: "Web Development",
    img: "https://example.com/image13.jpg",
    url: "https://www.youtube.com/embed/cvsbHZcDx8w",
    time: "9:21"
  },
  {
    id: "w14",
    title: "Introduction to CSS | Sigma Web Development Course - Tutorial #14",
    category: "Web Development",
    img: "https://example.com/image14.jpg",
    url: "https://www.youtube.com/embed/1dkfuga2_Ps",
    time: "9:14"
  },
  {
    id: "w15",
    title: "Inline, Internal & External CSS | Sigma Web Development Course - Tutorial #15",
    category: "Web Development",
    img: "https://example.com/image15.jpg",
    url: "https://www.youtube.com/embed/-XwZpYIyCEA",
    time: "11:04"
  },
  {
    id:"w16",
    title: "Exercise 1 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #16",
    category: "Web Development",
    img: "https://example.com/image16.jpg",
    url: "https://www.youtube.com/embed/anGMeDGvZhw",
    time: "7:18"
  },
  {
    id: "w17",
    title: "CSS Selectors MasterClass | Sigma Web Development Course - Tutorial #17",
    time: "14:00",
    category: "Web Development",
    img: "https://example.com/image17.jpg",
    url: "https://www.youtube.com/embed/1cEG1T8beO4",
  },
  {
    id: "w18",
    title: "ICSS Box Model - Margin, Padding & Borders | Sigma Web Development Course - Tutorial #18",
    time: "17:41",
    category: "Web Development",
    img: "https://example.com/image18.jpg",
    url: "https://www.youtube.com/embed/Xrxd6cEajhM",
  },
  {
    id: "w19",
    title: "CSS Fonts, Text & Color Properties | Sigma Web Development Course - Tutorial #19",
    time: "32:08",
    category: "Web Development",
    img: "https://example.com/image19.jpg",
    url: "https://www.youtube.com/embed/aFicd4-YTfo",
  },
  {
    id: "w20",
    title: "Exercise 2 - CSS Challenge | Sigma Web Development Course - Tutorial #20",
    time: "4:19",
    category: "Web Development",
    img: "https://example.com/image20.jpg",
    url: "https://www.youtube.com/embed/4aBolpJoutw",
  },
  {
    id: "w21",
    title: "CSS Specificity & Cascade | Sigma Web Development Course - Tutorial #21",
    time: "20:07",
    category: "Web Development",
    img: "https://example.com/image21.jpg",
    url: "https://www.youtube.com/embed/uTcpbPMZlFE",
  },
  {
    id: "w22",
    title: "CSS Sizing Units - px, rem, em, vh, vw, % & more | Sigma Web Development Course - Tutorial #22",
    category: "Web Development",
    time: "26:30",
    img: "https://example.com/image22.jpg",
    url: "https://www.youtube.com/embed/nkaAJYfRDVk",
  },
  {
    id: "w23",
    title: "CSS Display Property | Sigma Web Development Course - Tutorial #23",
    category: "Web Development",
    time: "12:08",
    img: "https://example.com/image23.jpg",
    url: "https://www.youtube.com/embed/hRHV5cjEB1w",
  },
  {
    id: "w24",
    title: "CSS Shadows and Outlines | Sigma Web Development Course - Tutorial #24",
    category: "Web Development",
    img: "https://example.com/image24.jpg",
    url: "https://www.youtube.com/embed/BZJcNU648Tc",
    time: "13:10"
  },
  {
    id: "w25",
    title: "Styling Lists using CSS | Sigma Web Development Course - Tutorial #25",
    category: "Web Development",
    img: "https://example.com/image25.jpg",
    url: "https://www.youtube.com/embed/ZIofkptpXO8",
    time: "09:52"
  },
  {
    id: "w26",
    title: "CSS Overflow Property | Sigma Web Development Course - Tutorial #26",
    category: "Web Development",
    img: "https://example.com/image26.jpg",
    url: "https://www.youtube.com/embed/ntlawluDB-c",
    time: "08:21"
  },
  {
    id: "w27",
    title: "Exercise 2 - Solutions and Shoutouts | Sigma Web Development Course - Tutorial #27",
    category: "Web Development",
    img: "https://example.com/image27.jpg",
    url: "https://www.youtube.com/embed/g1HJ65p5YdI",
    time: "10:16"
  },
  {
    id: "w28",
    title: "CSS Position Property | Sigma Web Development Course - Tutorial #28",
    category: "Web Development",
    img: "https://example.com/image28.jpg",
    url: "https://www.youtube.com/embed/cOw6tgH6P20",
    time: "24:05"
  },
  {
    id: "w29",
    title: "Exercise 3 - Design this Card | Sigma Web Development Course - Tutorial #29",
    category: "Web Development",
    img: "https://example.com/image29.jpg",
    url: "https://www.youtube.com/embed/nm3HrrUuz50",
    time: "06:18"
  },
  {
    id: "w30",
    title: "CSS Variables | Sigma Web Development Course - Tutorial #30",
    category: "Web Development",
    img: "https://example.com/image30.jpg",
    url: "https://www.youtube.com/embed/ovRU9xHfly4",
    time: "13:20"
  },
  {
    id: "w31",
    title: "CSS Media Queries | Sigma Web Development Course - Tutorial #31",
    category: "Web Development",
    img: "https://example.com/image31.jpg",
    url: "https://www.youtube.com/embed/eHye3PxH4jU",
    time: "11:37"
  },
  {
    id: "w32",
    title: "Exercise 3 - Solution | Sigma Web Development Course - Tutorial #32",
    category: "Web Development",
    img: "https://example.com/image32.jpg",
    url: "https://www.youtube.com/embed/2PWgbyL3ex8",
    time: "19:48"
  },
  {
    id: "w33",
    title: "Exercise 4 - Multi Color Website | Sigma Web Development Course - Tutorial #33",
    category: "Web Development",
    img: "https://example.com/image33.jpg",
    url: "https://www.youtube.com/embed/-WN74rN9OPI",
    time: "02:33"
  },
  {
    id: "w34",
    title: "CSS Float & Clear | Sigma Web Development Course - Tutorial #34",
    category: "Web Development",
    img: "https://example.com/image34.jpg",
    time: "10:42",
    url: "https://www.youtube.com/embed/6_UoTF7njLM",
  },
  {
    id: "w35",
    title: "More on CSS Selectors | Sigma Web Development Course - Tutorial #35",
    category: "Web Development",
    img: "https://example.com/image35.jpg",
    url: "https://www.youtube.com/embed/L8NfSewTfxY",
    time: "13:24"
  },
  {
    id: "w36",
    title: "Exercise 4 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #36",
    category: "Web Development",
    img: "https://example.com/image36.jpg",
    url: "https://www.youtube.com/embed/n1T6Ve00j24",
    time: "13:45"
  },
  {
    id: "w37",
    title: "CSS Exercise 5 - Design this Layout | Sigma Web Development Course - Tutorial #37",
    category: "Web Development",
    img: "https://example.com/image37.jpg",
    url: "https://www.youtube.com/embed/8Hk4MmO9ZeQ",
    time: "07:16"
  },
  {
    id: "w38",
    title: "CSS Flexbox - Ultimate MasterClass | Sigma Web Development Course - Tutorial #38",
    category: "Web Development",
    img: "https://example.com/image38.jpg",
    url: "https://www.youtube.com/embed/DWk2mndNTHY",
    time: "27:58"
  },
  {
    id: "w39",
    title: "CSS Grid - Ultimate MasterClass | Sigma Web Development Course - Tutorial #39",
    category: "Web Development",
    img: "https://example.com/image39.jpg",
    url: "https://www.youtube.com/embed/7AgEjgUtho4",
    time: "32:12"
  },
  {
    id: "w40",
    title: "Exercise 5 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #40",
    category: "Web Development",
    img: "https://example.com/image40.jpg",
    url: "https://www.youtube.com/embed/-uVJlSHueYQ",
    time: "15:50"
  },
  {
    id: "w41",
    title: "Exercise 6 - Navbar using Flexbox | Sigma Web Development Course - Tutorial #41",
    category: "Web Development",
    img: "https://example.com/image41.jpg",
    url: "https://www.youtube.com/embed/A5fK2Y8-if8",
    time: "03:21"
  },
  {
    id: "w42",
    title: "CSS Transforms MasterClass | Sigma Web Development Course - Tutorial #42",
    category: "Web Development",
    img: "https://example.com/image42.jpg",
    url: "https://www.youtube.com/embed/GGlzzLTLzxs",
    time: "11:22"
  },
  {
    id: "w43",
    title: "Exercise 6 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #43",
    category: "Web Development",
    img: "https://example.com/image43.jpg",
    url: "https://www.youtube.com/embed/SC7GCk1OiVo",
    time: "20:27"
  },
  {
    id: "w44",
    title: "Exercise 7 - Design the Grid | Sigma Web Development Course - Tutorial #44",
    category: "Web Development",
    img: "https://example.com/image44.jpg",
    url: "https://www.youtube.com/embed/zJaiTrw-hu8",
    time: "05:41"
  },
  {
    id: "w45",
    title: "CSS Transition Property | Sigma Web Development Course - Tutorial #45",
    category: "Web Development",
    img: "https://example.com/image45.jpg",
    url: "https://www.youtube.com/embed/pHI4PBFM0wY",
    time: "13:33"
  },
  {
    id: "w46",
    title: "CSS Animations | Sigma Web Development Course - Tutorial #46",
    category: "Web Development",
    img: "https://example.com/image46.jpg",
    url: "https://www.youtube.com/embed/cDLVIoXW-OQ",
    time: "17:57"
  },
  {
    id: "w47",
    title: "Exercise 7 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #47",
    category: "Web Development",
    img: "https://example.com/image47.jpg",
    url: "https://www.youtube.com/embed/yktqxOHOeR4",
    time: "38:39"
  },
  {
    id: "w48",
    title: "Exercise 8 - Bounce Animation | Sigma Web Development Course - Tutorial #48",
    category: "Web Development",
    img: "https://example.com/image48.jpg",
    url: "https://www.youtube.com/embed/PIC0Ps_Ci-s",
    time: "04:44"
  },
  {
    id: "w49",
    title: "CSS Object-fit and Object-cover | Sigma Web Development Course - Tutorial #49",
    category: "Web Development",
    img: "https://example.com/image49.jpg",
    url: "https://www.youtube.com/embed/ognrhoi0C-w",
    time: "15:25"
  },
  {
    id: "w50",
    title: "CSS Filters | Sigma Web Development Course - Tutorial #50",
    category: "Web Development",
    img: "https://example.com/image50.jpg",
    url: "https://www.youtube.com/embed/tSzDHVWG1hI",
    time: "09:06"
  },
  {
    id: "w51",
    title: "Exercise 8: Solution & Shoutouts | Sigma Web Development Course - Tutorial #51",
    category: "Web Development",
    img: "https://example.com/image51.jpg",
    url: "https://www.youtube.com/embed/chYx6vVzWVw",
    time: "07:20"
  },
  {
    id: "w52",
    title: "Figma Basics in One Video | Sigma Web Development Course - Tutorial #52",
    category: "Web Development",
    img: "https://example.com/image52.jpg",
    url: "https://www.youtube.com/embed/mpJb9GNxdYI",
    time: "27:20"
  },
  {
    id: "w53",
    title: "Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53",
    category: "Web Development",
    img: "https://example.com/image53.jpg",
    url: "https://www.youtube.com/embed/ovKVqo-L2EM",
    time: "01:57:23"
  },
  {
    id: "w54",
    title: "Introduction to JavaScript & Installing Node.js | Sigma Web Development Course - Tutorial #54",
    category: "Web Development",
    img: "https://example.com/image54.jpg",
    url: "https://www.youtube.com/embed/NrhP53Divco",
    time: "20:23"
  },
  {
    id: "w55",
    title: "JavaScript Variables, Data Types & Objects | Sigma Web Development Course - Tutorial #55",
    category: "Web Development",
    img: "https://example.com/image55.jpg",
    url: "https://www.youtube.com/embed/HGCDMJXS1cc",
    time: "20:20"
  },
  {
    id: "w56",
    title: "JavaScript Conditionals: if, else if, else ladder | Sigma Web Development Course - Tutorial #56",
    category: "Web Development",
    img: "https://example.com/image56.jpg",
    url: "https://www.youtube.com/embed/1R4NGtsj7hw",
    time: "24:24"
  },
  {
    id: "w57",
    title: "JavaScript Loops | Sigma Web Development Course - Tutorial #57",
    category: "Web Development",
    img: "https://example.com/image57.jpg",
    url: "https://www.youtube.com/embed/y32sWmu-RI4",
    time: "16:01"
  },
  {
    id: "w58",
    title: "JavaScript Functions | Sigma Web Development Course - Tutorial #58",
    category: "Web Development",
    img: "https://example.com/image58.jpg",
    url: "https://www.youtube.com/embed/Jtc3j4ZNZEQ",
    time: "12:26"
  },
  {
    id: "w59",
    title: "Exercise 9 - Faulty Calculator | Sigma Web Development Course - Tutorial #59",
    category: "Web Development",
    img: "https://example.com/image59.jpg",
    url: "https://www.youtube.com/embed/OrWmrQ2wrKU",
    time: "05:31"
  },
  {
    id: "w60",
    title: "JavaScript Strings | Sigma Web Development Course - Tutorial #60",
    category: "Web Development",
    img: "https://example.com/image60.jpg",
    url: "https://www.youtube.com/embed/uJbYqm7W_mA",
    time: "18:02"
  },
  {
    id: "w61",
    title: "JavaScript Exercise 9 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #61",
    category: "Web Development",
    img: "https://example.com/image61.jpg",
    url: "https://www.youtube.com/embed/nQAUGxt2qoU",
    time: "10:54"
  },
  {
    id: "w62",
    title: "CJavaScript Exercise 10 - Business Name Generator | Sigma Web Development Course - Tutorial #62",
    category: "Web Development",
    img: "https://example.com/image62.jpg",
    url: "https://www.youtube.com/embed/FkEbEfHQAZw",
    time: "03:58"
  },
  {
    id: "w63",
    title: "JavaScript Arrays | Sigma Web Development Course - Tutorial #63",
    category: "Web Development",
    img: "https://example.com/image63.jpg",
    url: "https://www.youtube.com/embed/IFZZAaiatcQ",
    time: "30:52"
  },
  {
    id: "w64",
    title: "JavaScript Exercise 10 - Solution | Sigma Web Development Course - Tutorial #64",
    category: "Web Development",
    img: "https://example.com/image64.jpg",
    url: "https://www.youtube.com/embed/wPWZqewZ4LA",
    time: "11:28"
  },
  {
    id: "w65",
    title: "JavaScript Exercise 11 - Calculate the Factorial | Sigma Web Development Course - Tutorial #65",
    category: "Web Development",
    img: "https://example.com/image65.jpg",
    url: "https://www.youtube.com/embed/ccfq9yW-dYU",
    time: "03:23"
  },
  {
    id: "w66",
    title: "Document Object Model in JavaScript | Sigma Web Development Course - Tutorial #66",
    category: "Web Development",
    img: "https://example.com/image66.jpg",
    url: "https://www.youtube.com/embed/oxO1Z5L5S4c",
    time: "08:51"
  },
  {
    id: "w67",
    title: "JavaScript DOM - Children, Parent & Sibling Nodes | Sigma Web Development Course - Tutorial #67",
    category: "Web Development",
    img: "https://example.com/image67.jpg",
    url: "https://www.youtube.com/embed/_8o_BiLAgQM",
    time: "18:56"
  },
  {
    id: "w68",
    title: "JavaScript - Selecting by Ids, Classes, and More | Sigma Web Development Course - Tutorial #68",
    category: "Web Development",
    img: "https://example.com/image68.jpg",
    url: "https://www.youtube.com/embed/uFbCTidM-xw",
    time: "18:15"
  },
  {
    id: "w69",
    title: "JavaScript Exercise 11 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #69",
    category: "Web Development",
    img: "https://example.com/image69.jpg",
    url: "https://www.youtube.com/embed/Xoz_KYfaSkk",
    time: "11:52"
  },
  {
    id: "w70",
    title: "JavaScript Exercise 12 - Color the Boxes | Sigma Web Development Course - Tutorial #70",
    category: "Web Development",
    img: "https://example.com/image70.jpg",
    url: "https://www.youtube.com/embed/V4ohRrvu4Ok",
    time: "03:45"
  },
  {
    id: "w71",
    title: "Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71",
    category: "Web Development",
    img: "https://example.com/image71.jpg",
    url: "https://www.youtube.com/embed/KB7GzBv5p4Q",
    time: "23:48"
  },
  {
    id: "w72",
    title: "JavaScript Exercise 12 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #72",
    category: "Web Development",
    img: "https://example.com/image72.jpg",
    url: "https://www.youtube.com/embed/mCx5aSEK8YE",
    time: "17:27"
  },
  {
    id: "w73",
    title: "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
    category: "Web Development",
    img: "https://example.com/image73.jpg",
    url: "https://www.youtube.com/embed/KtL-SQ20Q0s",
    time: "06:41"
  },
  {
    id: "w74",
    title: "Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74",
    category: "Web Development",
    img: "https://example.com/image74.jpg",
    url: "https://www.youtube.com/embed/CO_DAXswOrc",
    time: "27:51"
  },
  {
    id: "w75",
    title: "JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75",
    category: "Web Development",
    img: "https://example.com/image75.jpg",
    url: "https://www.youtube.com/embed/9JaDBYPmiJ0",
    time: "32:24"
  },
  {
    id: "w76",
    title: "Async/Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76",
    category: "Web Development",
    img: "https://example.com/image76.jpg",
    url: "https://www.youtube.com/embed/gRLdHSabW3o",
    time: "23:41"
  },
  {
    id: "w77",
    title: "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
    category: "Web Development",
    img: "https://example.com/image77.jpg",
    url: "https://www.youtube.com/embed/UzYRQURh_pY",
    time: "24:13"
  },
  {
    id: "w78",
    title: "JavaScript Exercise 14 - Hacker's Terminal | Sigma Web Development Course - Tutorial #78",
    category: "Web Development",
    img: "https://example.com/image78.jpg",
    url: "https://www.youtube.com/embed/WYazkpCQNQw",
    time: "03:58"
  },
  {
    id: "w79",
    title: "JavaScript try catch & Error Handling | Sigma Web Development Course - Tutorial #79",
    category: "Web Development",
    img: "https://example.com/image79.jpg",
    url: "https://www.youtube.com/embed/aQn7ssqHYp4",
    time: "15:59"
  },
  {
    id: "w80",
    title: "Classes & Objects - Object Oriented Programming in Js | Sigma Web Development Course - Tutorial #80",
    category: "Web Development",
    img: "https://example.com/image80.jpg",
    url: "https://www.youtube.com/embed/FeBbjzVOeRU",
    time: "20:43"
  },
  {
    id: "w81",
    title: "JavaScript Exercise 14 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #81",
    category: "Web Development",
    img: "https://example.com/image81.jpg",
    url: "https://www.youtube.com/embed/9H-Ieq6zjIY",
    time: "18:41"
  },
  {
    id: "w82",
    title: "Advanced JavaScript | Sigma Web Development Course - Tutorial #82",
    category: "Web Development",
    img: "https://example.com/image82.jpg",
    url: "https://www.youtube.com/embed/tcQDnqRakxk",
    time: "14:23"
  },
  {
    id: "w83",
    title: "JavaScript Interview Questions | Sigma Web Development Course - Tutorial #83",
    category: "Web Development",
    img: "https://example.com/image83.jpg",
    url: "https://www.youtube.com/embed/Vwxs9YJWsx4",
    time: "21:08"
  },
  {
    id: "w84",
    title: "Spotify Clone using HTML, CSS & JavaScript | Sigma Web Development Course - Tutorial #84",
    category: "Web Development",
    img: "https://example.com/image84.jpg",
    url: "https://www.youtube.com/embed/CYwEq1GdU4E",
    time: "05:35:39"
  },
  {
    id: "w85",
    title: "Backend, Node.js & npm | Sigma Web Development Course - Tutorial #85",
    category: "Web Development",
    img: "https://example.com/image85.jpg",
    url: "https://www.youtube.com/embed/NoWRBo3Uf8E",
    time: "17:20"
  },
  {
    id: "w86",
    title: "CommonJs Vs EcmaScript Modules | Sigma Web Development Course - Tutorial #86",
    category: "Web Development",
    img: "https://example.com/image86.jpg",
    url: "https://www.youtube.com/embed/bU69doALJGU",
    time: "17:46"
  },
  {
    id: "w87",
    title: "Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial #87",
    category: "Web Development",
    img: "https://example.com/image87.jpg",
    url: "https://www.youtube.com/embed/BTcmvrCTyNg",
    time: "17:32"
  },
  {
    id: "w88",
    title: "UIntroduction to Express Js | Sigma Web Development Course - Tutorial #88",
    category: "Web Development",
    img: "https://example.com/image88.jpg",
    url: "https://www.youtube.com/embed/R11tvGM3nDY",
    time: "20:39"
  },
  {
    id: "w89",
    title: "Response, Request and Routers in Express | Sigma Web Development Course - Tutorial #89",
    category: "Web Development",
    img: "https://example.com/image89.jpg",
    url: "https://www.youtube.com/embed/SksvlZM-5Sk",
    time: "27:55"
  },
  {
    id: "w90",
    title: "Middlewares in Express Js | Sigma Web Development Course - Tutorial #90",
    category: "Web Development",
    img: "https://example.com/image90.jpg",
    url: "https://www.youtube.com/embed/VELNPK0dK84",
    time: "19:05"
  },
  {
    id: "w91",
    title: "Exercise 15 - Clear the Clutter | Sigma Web Development Course - Tutorial #91",
    category: "Web Development",
    img: "https://example.com/image91.jpg",
    url: "https://www.youtube.com/embed/1YSVEW3i8OQ",
    time: "04:53"
  },
  {
    id: "w92",
    title: "ejs Template Engine in Express | Sigma Web Development Course - Tutorial #92",
    category: "Web Development",
    img: "https://example.com/image92.jpg",
    url: "https://www.youtube.com/embed/Kah88N8W5rs",
    time: "21:28"
  },
  {
    id: "w93",
    title: "Exercise 15 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #93",
    category: "Web Development",
    img: "https://example.com/image93.jpg",
    url: "https://www.youtube.com/embed/bM7bmh955Gs",
    time: "17:33"
  },
  {
    id: "w94",
    title: "Installing MongoDB & MongoDB Compass | Sigma Web Development Course - Tutorial #94",
    category: "Web Development",
    img: "https://example.com/image94.jpg",
    url: "https://www.youtube.com/embed/oMrKVEedpHg",
    time: "24:33"
  },
  {
    id: "w95",
    title: "CRUD Operations in MongoDB | Sigma Web Development Course - Tutorial #95",
    category: "Web Development",
    img: "https://example.com/image95.jpg",
    url: "https://www.youtube.com/embed/9Om0FMBz1yU",
    time: "17:21"
  },
  {
    id: "w96",
    title: "Installing Mongoose & Using it with Express | Sigma Web Development Course - Tutorial #96",
    category: "Web Development",
    img: "https://example.com/image96.jpg",
    url: "https://www.youtube.com/embed/wgwo5hbY7SY",
    time: "23:19"
  },
  {
    id: "w97",
    title: "Exercise 16 - Dummy Data Generator | Sigma Web Development Course - Tutorial #97",
    category: "Web Development",
    img: "https://example.com/image97.jpg",
    url: "https://www.youtube.com/embed/yDnxgIRcnso",
    time: "5:42"
  },
  {
    id: "w98",
    title: "Tailwind CSS in one Video | Sigma Web Development Course - Tutorial #98",
    category: "Web Development",
    img: "https://example.com/image98.jpg",
    url: "https://www.youtube.com/embed/-g969furGik",
    time: "33:58"
  },
  {
    id: "w99",
    title: "Exercise 16 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #99",
    category: "Web Development",
    img: "https://example.com/image99.jpg",
    url: "https://www.youtube.com/embed/15jN-KKoSCA",
    time: "22:44"
  },
  {
    id: "w100",
    title: "Exercise 17 - Design This Layout | Sigma Web Development Course - Tutorial #100",
    category: "Web Development",
    img: "https://example.com/image100.jpg",
    url: "https://www.youtube.com/embed/eGc35Qj0y4Q",
    time: "3:14"
  },
  {
    id: "w101",
    title: "X.com (Twitter) Clone using Tailwind CSS | Sigma Web Development Course - Tutorial #101",
    category: "Web Development",
    img: "https://example.com/image101.jpg",
    url: "https://www.youtube.com/embed/iegMqFnVocA",
    time: "02:27:49"
  },
  {
    id: "w102",
    title: "Exercise 17 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #102",
    category: "Web Development",
    img: "https://example.com/image102.jpg",
    url: "https://www.youtube.com/embed/KAIGrGEDm78",
    time: "11:49"
  },
  {
    id: "w103",
    title: "What is Hosting? Where to Host? Which Hosting? | Sigma Web Development Course - Tutorial #103",
    category: "Web Development",
    img: "https://example.com/image103.jpg",
    url: "https://www.youtube.com/embed/c2A5XJidIDA",
    time: "38:08"
  },
  {
    id: "w104",
    title: "Hosting an Express App on Ubuntu VPS using Hostinger | Sigma Web Development Course - Tutorial #104",
    category: "Web Development",
    img: "https://example.com/image104.jpg",
    url: "https://www.youtube.com/embed/AgjdDXofJZ8",
    time: "24:06"
  },
  {
    id: "w105",
    title: "Introduction to React & Why use React? | Sigma Web Development Course - Tutorial #105",
    category: "Web Development",
    img: "https://example.com/image105.jpg",
    url: "https://www.youtube.com/embed/nhSZ4LhIii8",
    time: "40:38"
  },
  {
    id: "w106",
    title: "Components, Props and JSX in React | Sigma Web Development Course - Tutorial #106",
    category: "Web Development",
    img: "https://example.com/image106.jpg",
    url: "https://www.youtube.com/embed/S4VH8hddg8c",
    time: "26:53"
  },
  {
    id: "w107",
    title: "Hooks & State in React | Sigma Web Development Course - Tutorial #107",
    category: "Web Development",
    img: "https://example.com/image107.jpg",
    url: "https://www.youtube.com/embed/zHoWgJD0jw4",
    time: "11:19"
  },
  {
    id: "w108",
    title: "The useEffect Hook in React | Sigma Web Development Course - Tutorial #108",
    category: "Web Development",
    img: "https://example.com/image108.jpg",
    url: "https://www.youtube.com/embed/bio2eP5YXyw",
    time: "26:06"
  },
  {
    id: "w109",
    title: "The useRef Hook in React | Sigma Web Development Course - Tutorial #109",
    category: "Web Development",
    img: "https://example.com/image109.jpg",
    url: "https://www.youtube.com/embed/VlSNiL_x4mo",
    time: "14:44"
  },
  {
    id: "w110",
    title: "Conditional Rendering & Rendering Lists in React | Sigma Web Development Course - Tutorial #110",
    category: "Web Development",
    img: "https://example.com/image110.jpg",
    url: "https://www.youtube.com/embed/96DGjqlAIxs",
    time: "19:06"
  },
  {
    id: "w111",
    title: "Exercise 18 - Display the Cards | Sigma Web Development Course - Tutorial #111",
    category: "Web Development",
    img: "https://example.com/image111.jpg",
    url: "https://www.youtube.com/embed/KDpm8h8XzC4",
    time: "6:11"
  },
  {
    id: "w112",
    title: "Handling Events in React | Sigma Web Development Course - Tutorial #112",
    category: "Web Development",
    img: "https://example.com/image112.jpg",
    url: "https://www.youtube.com/embed/cXkwFjBrWfk",
    time: "16:35"
  },
  {
    id: "w113",
    title: "Exercise 18 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #113",
    category: "Web Development",
    img: "https://example.com/image113.jpg",
    url: "https://www.youtube.com/embed/iZdOrqJuPrg",
    time: "13:19"
  },
  {
    id: "w114",
    title: "TodoList App using React, Tailwind & React Icons | Sigma Web Development Course - Tutorial #114",
    category: "Web Development",
    img: "https://example.com/image114.jpg",
    url: "https://www.youtube.com/embed/SBuZSalHLe0",
    time: "01:21:55"
  },
  {
    id: "w115",
    title: "React Router: Routing in React | Sigma Web Development Course - Tutorial #115",
    category: "Web Development",
    img: "https://example.com/image115.jpg",
    url: "https://www.youtube.com/embed/ZP8QyCIUeIA",
    time: "17:00"
  },
  {
    id: "w116",
    title: "The useContext hook in React | Sigma Web Development Course - Tutorial #116",
    category: "Web Development",
    img: "https://example.com/image116.jpg",
    url: "https://www.youtube.com/embed/jIbXtgL0qrg",
    time: "16:17"
  },
  {
    id: "w117",
    title: "The useMemo hook in React | Sigma Web Development Course - Tutorial #117",
    category: "Web Development",
    img: "https://example.com/image117.jpg",
    url: "https://www.youtube.com/embed/rRiBpNhFgoM",
    time: "14:49"
  },
  {
    id: "w118",
    title: "The useCallback hook in React | Sigma Web Development Course - Tutorial #118",
    category: "Web Development",
    img: "https://example.com/image118.jpg",
    url: "https://www.youtube.com/embed/M1ELG5Wgtdo",
    time: "14:00"
  },
  {
    id: "w119",
    title: "Handling Forms + Connecting React to Express Backend | Sigma Web Development Course - Tutorial #119",
    category: "Web Development",
    img: "https://example.com/image119.jpg",
    url: "https://www.youtube.com/embed/SdzMBWT2CDQ",
    time: "31:29"
  },
  {
    id: "w120",
    title: "Learn Redux in One video | Sigma Web Development Course - Tutorial #120",
    category: "Web Development",
    img: "https://example.com/image120.jpg",
    url: "https://www.youtube.com/embed/J5By-Q4ZhZs",
    time: "19:37"
  },
  {
    id: "w121",
    title: "Introduction to Next.js & File based routing | Sigma Web Development Course - Tutorial #121",
    category: "Web Development",
    img: "https://example.com/image121.jpg",
    url: "https://www.youtube.com/embed/6XVaVITFOgY",
    time: "12:25"
  },
  {
    id: "w122",
    title: "Server Components in Next.js | Sigma Web Development Course - Tutorial #122",
    category: "Web Development",
    img: "https://example.com/image122.jpg",
    url: "https://www.youtube.com/embed/YuX_R4RGdZw",
    time: "11:12"
  },
  {
    id: "w123",
    title: "Script, Link & Image components in Next.js | Sigma Web Development Course - Tutorial #123",
    category: "Web Development",
    img: "https://example.com/image123.jpg",
    url: "https://www.youtube.com/embed/tHTtOJl7ZlI",
    time: "20:37"
  },
  {
    id: "w124",
    title: "Creating APIs in Next.js | Sigma Web Development Course - Tutorial #124",
    category: "Web Development",
    img: "https://example.com/image124.jpg",
    url: "https://www.youtube.com/embed/0rC-3PyhNnI",
    time: "07:48"
  },
  {
    id: "w125",
    title: "Server Actions in Next.js | Sigma Web Development Course - Tutorial #125",
    category: "Web Development",
    img: "https://example.com/image125.jpg",
    url: "https://www.youtube.com/embed/lvU8fMNVivY",
    time: "13:16"
  },
  {
    id: "w126",
    title: "Middleware in Next.js | Sigma Web Development Course - Tutorial #126",
    category: "Web Development",
    img: "https://example.com/image126.jpg",
    url: "https://www.youtube.com/embed/nZ2heJVkawQ",
    time: "10:18"
  },
  {
    id: "w127",
    title: "Auth.js - Authentication in Next.js | Sigma Web Development Course - Tutorial #127",
    category: "Web Development",
    img: "https://example.com/image127.jpg",
    url: "https://www.youtube.com/embed/2JnEq3ZmLH0",
    time: "14:04"
  },
  {
    id: "w128",
    title: "Dynamic Routes in Next.js | Sigma Web Development Course - Tutorial #128",
    category: "Web Development",
    img: "https://example.com/image128.jpg",
    url: "https://www.youtube.com/embed/D7YuI6vOzdY",
    time: "09:51"
  },
  {
    id: "w129",
    title: "Layouts in Next.js | Sigma Web Development Course - Tutorial #129",
    category: "Web Development",
    img: "https://example.com/image129.jpg",
    url: "https://www.youtube.com/embed/jWi8d3SJYN0",
    time: "12:34"
  },
  {
    id: "w130",
    title: "React Project: Password Manager using React, Tailwind, MongoDB & Express | Sigma WebD Tutorial #130",
    category: "Web Development",
    img: "https://example.com/image130.jpg",
    url: "https://www.youtube.com/embed/QtaorVNAwbI",
    time: "02:28:15"
  },
  {
    id: "w131",
    title: "Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131",
    category: "Web Development",
    img: "https://example.com/image131.jpg",
    url: "https://www.youtube.com/embed/sgNZcK8QIyc",
    time: "04:49:02"
  },
  {
    id: "w132",
    title: "Understanding next/navigation module in Next.js | Sigma Web Development Course - Tutorial #132",
    category: "Web Development",
    img: "https://example.com/image132.jpg",
    url: "https://www.youtube.com/embed/K052tdPqa5U",
    time: "12:50"
  },
  {
    id: "w133",
    title: "SSR, SSG & ISR in Next.js | Sigma Web Development Course - Tutorial #133",
    category: "Web Development",
    img: "https://example.com/image133.jpg",
    url: "https://www.youtube.com/embed/O0UGlA1YVUI",
    time: "14:18"
  },
  {
    id: "w134",
    title: "Environment Variables in Next.js | Sigma Web Development Course - Tutorial #134",
    category: "Web Development",
    img: "https://example.com/image134.jpg",
    url: "https://www.youtube.com/embed/DbVI7QnDnjY",
    time: "11:15"
  },
  {
    id: "w135",
    title: "Styled JSX and other ways to Style in Next.js | Sigma Web Development Course - Tutorial #135",
    category: "Web Development",
    img: "https://example.com/image135.jpg",
    url: "https://www.youtube.com/embed/M6aXSV2HAHo",
    time: "08:34"
  },
  {
    id: "w136",
    title: "[Project] Let's Build a Url Shortener in Next.js 15 | Sigma Web Development Course - Tutorial #136",
    category: "Web Development",
    img: "https://example.com/image136.jpg",
    url: "https://www.youtube.com/embed/Ojo_lo0djbQ",
    time: "56:16"
  },
  {
    id: "w137",
    title: "[Project] Let's Build a LinkTree Clone in Next.js 15 | Sigma Web Development Course - Tutorial #137",
    category: "Web Development",
    img: "https://example.com/image136.jpg",
    url: "https://www.youtube.com/embed/izwkombjECA",
    time: "01:53:49"
  },
  {
    id: "w138",
    title: "Deploying our Next.js App to Vercel | Sigma Web Development Course - Tutorial #138",
    category: "Web Development",
    img: "https://example.com/image136.jpg",
    url: "https://www.youtube.com/embed/IW1hcRXK2yQ",
    time: '18:58'
  },
  {
    id: "w139",
    title: "My Last Video | Sigma Web Development Course - Tutorial #139",
    category: "Web Development",
    img: "https://example.com/image136.jpg",
    url: "https://www.youtube.com/embed/iZb0NsF3Xwg",
    time:"8:27"
  },
];

export default webDevVideos;
