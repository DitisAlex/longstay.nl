import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import logo from "../../public/hd/mtb4k.jpg";

import {
  FaWifi,
  FaShower,
  FaUmbrellaBeach,
  FaBed,
  FaSmokingBan,
  FaChair,
  FaToilet,
  FaCoffee,
  FaCalendarWeek,
} from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
import {
  TbToolsKitchen3,
  TbMassage,
  TbAirConditioning,
  TbHanger,
} from "react-icons/tb";
import {
  MdPets,
  MdForest,
  MdTableRestaurant,
  MdCleaningServices,
  MdKingBed,
} from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { BsSafeFill } from "react-icons/bs";

import img1 from "../../public/impressie/mtb/image00001.jpeg";
import img2 from "../../public/impressie/mtb/image00002.jpeg";
import img3 from "../../public/impressie/mtb/image00003.jpeg";
import img5 from "../../public/impressie/mtb/image00005.jpeg";
import img6 from "../../public/impressie/mtb/Longstay Achterhoek-44.jpg";
import img7 from "../../public/impressie/mtb/Longstay Achterhoek-58.jpg";

import plattegrond from "../../public/impressie/mtb/mtb.jpg";

export default function MTBRoute() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const customTheme = {
    button: {
      color: {
        success:
          "w-full border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover]",
      },
    },
  };

  return (
    <div>
      <Head>
        <title>MTB-Route - Longstay Achterhoek</title>
        <meta
          name="description"
          content="MTB-Route suite bij Longstay Achterhoek"
        />
      </Head>
      <NavbarComponent />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={logo}
          alt="airbnb"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white text-2xl md:text-4xl font-semibold">
            Suite MTB-Route
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Prijzen</h2>
            <div className="text-[--color-text]">
              € 199,00 per nacht (exclusief toeristenbelasting).
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beschrijving</h2>
            <div className="text-[--color-text]">
              Kenmerken van dit appartement:
              <ul>
                <li>
                  • <span className="font-semibold">Ruime woonruimte: </span>
                  Door de aanwezige ruimte kunt u genieten van een gezellige
                  woonkamer/keuken met aangrenzend een eigen terras met uitzicht
                  op het Montferlandse bos.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Volledig uitgeruste keuken:
                  </span>{" "}
                  Bereid uw favoriete maaltijden met gemak dankzij onze moderne
                  keukenfaciliteiten met o.a.: vaatwasser, combimagnetron/oven,
                  waterkoker en koffiezetapparaat.
                </li>
                <li>
                  • <span className="font-semibold">Privé badkamer:</span> Uw
                  comfort is onze prioriteit, daarom beschikt ons appartement
                  over een eigen badkamer voor uw gemak. Deze beschikt over een
                  inloopdouche, een dubbele wastafel, designradiator en
                  haarföhn. Met een separaat toilet.
                </li>
                <li>
                  • <span className="font-semibold">Gratis Wi-Fi:</span> Blijf
                  verbonden met uw dierbaren en de rest van de wereld met ons
                  gratis draadloos internet.
                </li>
                <li>
                  • <span className="font-semibold">Centrale locatie:</span> Ons
                  appartement bevindt zich vlakbij belangrijke uitvalswegen. Op
                  loopafstand van het Montferlandse bos, het busstation, een
                  supermarkt en vele eetgelegenheden waaronder een
                  ontbijtgelegenheid op loopafstand welke dagelijks geopend is
                  vanaf 07:00 uur (BROODS).
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Kamer Kenmerken</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <FaHouse className="text-2xl" />
                <span>Suite</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <IoMdResize className="text-2xl" />
                <span>52 m²</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Twee eenpersoonsbedden</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbToolsKitchen3 className="text-2xl" />
                <span>Kitchenette</span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Kamer Voorzieningen</h2>
            <div className="grid grid-cols-2 gap-4 mx-2">
              <ul>
                <li className="flex items-center space-x-2 py-1">
                  <FaWifi className="text-2xl" />
                  <span>Gratis WiFi</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <PiTelevisionDuotone className="text-2xl" />
                  <span>Flatscreen-tv</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <TbAirConditioning className="text-2xl" />
                  <span>Airconditioning</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaUmbrellaBeach className="text-2xl" />
                  <span>Terras</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <MdTableRestaurant className="text-2xl" />
                  <span>Bureau & eettafel</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaChair className="text-2xl" />
                  <span>Zithoek met salontafel</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaShower className="text-2xl" />
                  <span>Badkamer met inloopdouche</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <MdKingBed className="text-2xl" />
                  <span>Slaapbank</span>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-2 py-1">
                  <TbToolsKitchen3 className="text-3xl" />
                  <span>
                    Kitchenette (afwasmachine / combi oven / koelkast & vriezer)
                  </span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaToilet className="text-2xl" />
                  <span>Toilet</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaCoffee className="text-2xl" />
                  <span>Koffie- & theefaciliteiten</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <BsSafeFill className="text-2xl" />
                  <span>Kluisje</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <TbHanger className="text-2xl" />
                  <span>Garderobe</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaCalendarWeek className="text-2xl" />
                  <span>Wekelijkse linnengoed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beleid</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <MdPets className="text-2xl" />
                <span>Huisdieren zijn toegestaan.</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaSmokingBan className="text-2xl" />
                <span>
                  Roken is niet toegestaan binnen de kamers, maar wel op het
                  terras.
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Beddengoed wordt wekelijks vervangen</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdCleaningServices className="text-2xl" />
                <span>Een wekelijkse schoonmaak</span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Nabijgelegen Attracties</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <MdForest className="text-2xl" />
                <span>Diverse wandel- en fietsroutes door het Bergherbos.</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <IoRestaurant className="text-2xl" />
                <span>
                  Authentieke aziatische à la carte gerechten bij Chinees
                  restaurant Sin Chen.
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbMassage className="text-2xl" />
                <span>
                  Ontspanning en recreatie bij park Landal Stroombroek.
                </span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Impressie</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={5000}>
                <Image src={img6} alt="..." className="" />
                <Image src={img1} alt="..." className="" />
                <Image src={img2} alt="..." className="" />
                <Image src={img3} alt="..." className="" />
                <Image src={img7} alt="..." className="" />
                <Image src={img5} alt="..." className="" />
                <Image src={plattegrond} alt="..." className="" />
              </Carousel>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Inspiratie</h2>
            <p className="py-2 text-[--color-text]">
              Een suite geschikt voor de fervente fietser. Deze kamer is een ode
              aan een van de mooiste mountainbike routes van Nederland.
              <br />
              <br />
              Ga erop uit en beleef het prachtige Montferland met de
              mountainbike. Deze 26 kilometer lange mountainbikeroute gaat van
              start in Braamt. Tijdens de route rijdt u door het Bergherbos wat
              maar liefst 2000 hectare groot is. De MTB-route kent veel
              hoogteverschil, waardoor deze route een mooie en sportieve
              uitdaging is.
              <br />
              <br />
              Je kunt de route starten bij: <br />– ’t Peeske, Peeskesweg 12,
              7037 CH in Beek <br />– Parkeerterrein Brinks Pannenkoeken,
              Bovendorpsstraat 7, 7038 CH Zeddam <br />– Parkeerterrein
              Hettenheuvel, Zeddamseweg 5, 7035 DC in Kilder <br />–
              Parkeerterrein het Tolhuis, `s Heerenbergseweg 42, 7038 CD in
              Zeddam <br />– Parkeerplaats Markant Outdoor, Gildeweg 7, 7047 AR
              in Braamt (parkeren alleen mogelijk voor combigroepen die ook één
              of meerdere mountainbikes huren).
              <br />
              <br />
              Tijdens de route komt u langs meerdere verschillende hotspots in
              Montferland. Aan het begin van de route bij de Hettenheuvel is er
              een fantastisch uitzicht op zowel Doetinchem als Kilder. De tweede
              hotspot is de Motte. De Motte is een heuvel in Zeddam die door
              mensen is opgehoogd. Vroeger stond op deze plek een burcht genaamd
              ‘Montferrand’ dat later het Montferland is gaan heten. In Zeddam
              vind je ook de oudste nog bestaande windmolem van Nederland, de
              Grafelijke Korenmolen. Verder op de route is er in Stokkum de
              uitkijktoren Hulzenberg. Vanaf deze 20 meter hoge uitkijktoren
              kunt u genieten van het uitzicht tot ver in de Achterhoek.
              <br />
              <br />
              Om deze MTBroute te mogen rijden heb je een MTB-vignet nodig. Koop
              je MTB-vignet online.
            </p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className="py-4 shadow-md p-4 border border-gray-300 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold pt-2 flex justify-center">
              Check Beschikbaarheid
            </h2>
            <p className="text-[--color-text] py-2">
              Heeft u interesse om particulier hier te verblijven? Neem dan
              contact met ons.
            </p>
            <Flowbite theme={{ theme: customTheme }}>
              <Link href="/contact">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Contactformulier
                </Button>
              </Link>
              <p className="text-[--color-text] py-2 pt-6">
                Wilt u zakelijk verblijven? Klik dan hier.
              </p>
              <Link href="/zakelijk">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Zakelijk Verblijf
                </Button>
              </Link>
            </Flowbite>
          </div>
        </div>
      </div>
    </div>
  );
}
