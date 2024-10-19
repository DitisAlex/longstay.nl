import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/logo.jpg";

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
} from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { BsSafeFill } from "react-icons/bs";

import img1 from "../../public/impressie/bergherbos/image00001.jpeg";
import img2 from "../../public/impressie/bergherbos/image00002.jpeg";
import img3 from "../../public/impressie/bergherbos/image00003.jpeg";
import img4 from "../../public/impressie/bergherbos/image00004.jpeg";
import img5 from "../../public/impressie/bergherbos/image00005.jpeg";

export default function Bergherbos() {
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
      <NavbarComponent />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={logo}
          alt="airbnb"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white text-2xl md:text-4xl font-semibold">
            Bergherbos
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beschrijving</h2>
            <div className="text-[--color-text]">
              Kenmerken van dit appartement:
              <ul>
                <li>
                  • <span className="font-semibold">Ruime woonruimte: </span>
                  Door de aanwezige ruimte kunt u genieten van een gezellige
                  woonkamer/keuken met aangrenzend een eigen terras met uitzet
                  op het Montferlandse bos.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Volledig uitgeruste keuken:
                  </span>{" "}
                  Bereid uw favoriete maaltijden met gemak dankzij onze moderne
                  keukenfaciliteiten met o.a. vaatwasser, combimagnetron/oven,
                  waterkoker en koffiezetapparaat.
                </li>
                <li>
                  • <span className="font-semibold">Privé badkamer:</span> Uw
                  comfort is onze prioriteit, daarom beschikt ons appartement
                  over een eigen badkamer voor uw gemak. Deze beschikt over een
                  inloopdouche, een dubbele wastafel, design radiator en
                  haarfohn. Met een separaat toilet.
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
                  supermarkt en vele eetgelegenheden (inclusief dagelijks
                  ontbijt vanaf 07:00 bij BROODS).
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
                <span>50 m²</span>
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
                  Authentieke aziatische A La Carte gerechten bij Chinees
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
                <Image src={img1} alt="..." className="" />
                <Image src={img2} alt="..." className="" />
                <Image src={img3} alt="..." className="" />
                <Image src={img4} alt="..." className="" />
                <Image src={img5} alt="..." className="" />
              </Carousel>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Inspiratie</h2>
            <p className="py-2 text-[--color-text]">
              Dit appartement ademt de sfeer van het prachtige bergherbos. Het
              Bergherbos in Gelderland strekt zich uit over de hellingen van de
              stuwwal van Montferland. Dat levert soms pittige routes op, maar
              ook prachtige vergezichten en verrassende doorkijkjes. Zo kijk je
              vanaf uitkijktoren Hulzenberg helemaal tot aan de Veluwezoom en
              het Reichswald bij Kleef (Dld). De wandelroutes, in lengte
              variërend van 2 tot 7 kilometer, brengen je langs de mooiste
              plekjes van het gebied.
              <br />
              <br />
              De stuwwal waar het Bergherbos op ligt ontstond toen zo&#39;n
              200.000 jaar geleden gigantische ijsmassa&#39;s vanuit het noorden
              bergen van grond en stenen voor zich uit stuwden. Het ijs smolt
              later weg en de stuwwallen bleven achter. Ze dragen vele sporen
              uit het verleden. Er is duizenden jaren gewoond en geploegd, er is
              ijzererts gewonnen en gevochten, er zijn bomen gekapt en weer
              nieuwe geplant.
              <br />
              <br />
              Wandelen, fietsen, mountainbiken, paardrijden, spelen of vakantie
              vieren, het kan allemaal in het Bergherbos. In het gebied liggen
              gemarkeerde wandelroutes langs de mooiste bosranden, heideveldjes
              en akkers. De lengte varieert van 2 tot 7 kilometer. Combineer je
              de routes dan kun je nog langer wandelen. Voor mountainbikers ligt
              er een speciale route met veel hoogteverschillen
              (vergunningverplicht). Ruiters en menners kunnen hier hun eigen
              route uitstippelen. Ook voor hen is een vergunning verplicht.
            </p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className="py-4 shadow-md p-4 border border-gray-300 rounded-xl">
            <h2 className="text-2xl font-semibold pt-2 flex justify-center">
              Boek Direct
            </h2>
            <p className="text-[--color-text] py-2">
              Heeft u interesse om particulier te verblijven in Huis Bergh?
              Controleer dan de beschikbaarheid.
            </p>
            <Flowbite theme={{ theme: customTheme }}>
              <Link href="https://www.booking.com/">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Check Beschikbaarheid
                </Button>
              </Link>
              <p className="text-[--color-text] py-2 pt-6">
                Wilt u echter zakelijk verblijven? Klik dan hier.
              </p>
              <Link href="http://localhost:3000/#zakelijk">
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
