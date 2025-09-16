import imgImage1 from "figma:asset/b32d390900d8ae35b893bd2bd9eee61492aacca7.png";
import imgImage10 from "figma:asset/847f7ef7d9879d582846f15af1855b9305a98554.png";
import imgImage11 from "figma:asset/10231a0262055f9afbd63d8f575dbcea204522a4.png";
import imgRectangle14 from "figma:asset/bd90f23fcdf21d65b0c531bf68d4caa9dd4fd7c6.png";

function Logo() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[10.415px] place-items-start relative" data-name="logo">
      <div className="[grid-area:1_/_1] [text-shadow:rgba(0,0,0,0.25)_0px_4.665px_4.665px] font-['Italiana:Regular',_sans-serif] h-[32.547px] ml-[36.453px] mt-[2.604px] not-italic relative text-[#026a15] text-[26.824px] w-[130.189px]">
        <p className="leading-[normal]">Amvi Green</p>
      </div>
      <div className="[grid-area:1_/_1] bg-[59.46%_66.07%] bg-no-repeat bg-size-[186.05%_121.21%] h-[37.528px] ml-0 mt-0 rounded-[30.907px] w-[36.675px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
    </div>
  );
}

function MicrogreensLibrary() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[430.924px] mt-[16.274px] place-items-start relative" data-name="Microgreens library">
      <div className="[grid-area:1_/_1] font-['Montserrat:Regular',_sans-serif] font-normal ml-[99px] mt-0 relative text-[20.83px] text-black text-center text-nowrap translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">{`Microgreen Library  `}</p>
      </div>
      <div className="[grid-area:1_/_1] flex h-[9.125px] items-center justify-center ml-[212.528px] mt-[9.764px] relative translate-x-[-50%] w-[18px]">
        <div className="flex-none rotate-[90deg]">
          <div className="font-['Moul:Regular',_sans-serif] leading-[0] not-italic relative text-[#545454] text-[15.623px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">{`>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Right">
      <Logo />
      <div className="[grid-area:1_/_1] flex h-[58.578px] items-center justify-center ml-[188.774px] mt-0 relative w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[58.585px]" data-name="Seperator">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 2">
                <line id="Seperator" stroke="var(--stroke-0, #026A15)" strokeLinecap="round" strokeWidth="1.30189" x1="0.650943" x2="57.934" y1="1.34906" y2="1.34906" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] ml-[251.264px] mt-[16.274px] relative text-[20.83px] text-black text-center translate-x-[-50%] w-[80.717px]">
        <p className="leading-[normal]">{`Home `}</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] ml-[361.274px] mt-[16.274px] relative text-[20.83px] text-black text-center translate-x-[-50%] w-[95.038px]">
        <p className="leading-[normal]">{`About us `}</p>
      </div>
      <MicrogreensLibrary />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[242px] items-center justify-start leading-[0] left-1/2 overflow-clip px-6 py-[5.208px] rounded-[20.83px] shadow-[0px_5.208px_18.617px_0px_rgba(0,0,0,0.25)] top-[65px] translate-x-[-50%] w-[1062px]" data-name="Nav bar">
      <Right />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[20.83px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[745px] left-0 overflow-clip top-0 w-[593.5px]">
      <div className="absolute bg-[#d9d9d9] h-[745px] left-0 top-0 w-[593.5px]" />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[745px] left-0 top-0 w-[593px]" data-name="image 10" style={{ backgroundImage: `url('${imgImage10}')` }} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[745px] left-[46px] overflow-clip shadow-[0px_25px_126.9px_0px_rgba(0,0,0,0.25)] top-[1530px] w-[1187px]">
      <div className="absolute bg-white h-[745px] left-1/2 shadow-[0px_26px_123.9px_0px_rgba(0,0,0,0.25)] top-0 translate-x-[-50%] w-[1187px]" />
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[599px] justify-center leading-[0] left-[613px] text-[0px] text-black top-[400.5px] translate-y-[-50%] w-[543px]">
        <p className="leading-[24px] mb-0 text-[16px]">
          <span>{`Red amaranth microgreens are a visual and nutritional marvel, boasting a striking crimson and magenta hue that instantly enhances any dish. `}</span>
          <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal underline" href="https://microgreensworld.com/amaranth-microgreens-nutrition/">
            <span className="[text-underline-position:from-font] decoration-solid leading-[24px]" href="https://microgreensworld.com/amaranth-microgreens-nutrition/">
              According to Microgreens World
            </span>
          </a>
          , these tender shoots are harvested within 10-14 days after germination. They are a powerhouse of essential vitamins and minerals, including Vitamins A, C, E, and K, as well as vital minerals such as iron, calcium, magnesium, and potassium.
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[24px] mb-0 text-[16px]">Beyond their captivating appearance and nutritional density, red amaranth microgreens contain powerful antioxidants, such as betalains, responsible for their vibrant color and offering anti-inflammatory benefits. They also provide dietary fiber, crucial for healthy digestion and gut health, and a notable amount of plant-based protein, essential for building and repairing tissues. The flavor profile is described as mild and sweet, with an earthy finish, sometimes reminiscent of mustard with a delicate grassy note.</p>
        <p className="leading-[24px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[24px] text-[16px]">
          <span>{`These versatile microgreens are best enjoyed raw, as their delicate nature can be compromised by high heat preparations. They can be easily incorporated into salads for a burst of color and nutrition, blended into smoothies for an added boost, or used as a beautiful and flavorful garnish for soups, sandwiches, and a variety of culinary creations. `}</span>
          <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal underline" href="https://specialtyproduce.com/produce/Micro_Red_Amaranth_3086.php">
            <span className="[text-underline-position:from-font] decoration-solid leading-[24px]" href="https://specialtyproduce.com/produce/Micro_Red_Amaranth_3086.php">
              Specialty Produce suggests
            </span>
          </a>
          <span>{` pairing them with ingredients like green apples, blood oranges, carrots, bell peppers, onions, and seafood.`}</span>
        </p>
      </div>
      <Frame9 />
      <div className="absolute flex flex-col font-['Playfair_Display:Bold',_sans-serif] font-bold justify-center leading-[0] left-[613px] text-[64px] text-black top-[58px] translate-y-[-50%] w-[431px]">
        <p className="leading-none">Red Amaranth</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[1008.39px] left-0 overflow-clip top-0 w-[593.5px]">
      <div className="absolute bg-[#d9d9d9] h-[745px] left-0 top-0 w-[593.5px]" />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[938px] left-0 top-0 w-[593px]" data-name="image 10" style={{ backgroundImage: `url('${imgImage11}')` }} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[1008.39px] left-[46px] overflow-clip shadow-[0px_25px_83.5px_0px_rgba(0,0,0,0.25)] top-[2355px] w-[1187px]">
      <div className="absolute bg-white h-[1008.39px] left-1/2 shadow-[0px_26px_123.9px_0px_rgba(0,0,0,0.25)] top-0 translate-x-[-50%] w-[1187px]" />
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[810.77px] justify-center leading-[24px] left-[613px] text-[0px] text-[16px] text-black top-[542.09px] translate-y-[-50%] w-[543px]">
        <p className="mb-0">{`Kohlrabi microgreens are tiny powerhouses of flavor and nutrition, offering a unique and visually appealing addition to your plate. These tender young greens, harvested just after their first leaves emerge, are derived from the same kohlrabi plant known for its distinctive bulb. Yet, in their microgreen form, they offer a delicate texture and a sweeter, milder version of the mature vegetable's signature taste. According to Area 2 Farms they are captivating additions to the world of microgreens, boasting vibrant colors and exceptional taste.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Montserrat:Bold',_sans-serif] font-bold mb-0">Nutritional benefits</p>
        <p className="mb-0">{`Don't let their small size fool you! Kohlrabi microgreens are packed with essential vitamins and minerals crucial for optimal health. They are an excellent source of vitamins A, C, and K, vital for healthy vision, boosting immunity, and promoting strong bones. These miniature greens also provide a good dose of vital minerals like calcium and iron, contributing to strong bones and healthy blood circulation. Studies suggest that microgreens contain significantly higher levels of nutrients than their mature plant counterparts. Their high antioxidant content, including carotenoids and phenolic compounds, helps fight inflammation and protect cells from damage.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Montserrat:Bold',_sans-serif] font-bold mb-0">Culinary uses</p>
        <p>{`Kohlrabi microgreens' mild, slightly peppery flavor and crisp texture make them incredibly versatile in the kitchen. Sprinkle them over salads for a refreshing crunch, or add a vibrant touch to sandwiches and wraps. They also make a fantastic garnish for soups and stews, and their bright hues can elevate the presentation of any dish. Consider adding them to your morning smoothie for an extra boost of vitamins and antioxidants. Their ease of use and rapid growth make them a perfect choice for home growers, allowing you to enjoy fresh, healthy greens year-round. You can grow them in as little as 7-14 days.`}</p>
      </div>
      <Frame12 />
      <div className="absolute flex flex-col font-['Playfair_Display:Bold',_sans-serif] font-bold h-[86.626px] justify-center leading-[0] left-[613px] text-[64px] text-black top-[78.5px] translate-y-[-50%] w-[431px]">
        <p className="leading-none">Red Amaranth</p>
      </div>
    </div>
  );
}

export default function MacBookAirAboutUs() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - about us">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[1228px] left-0 top-0 w-[1280px]" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
      <NavBar />
      <div className="absolute bg-white h-[392px] top-[1044px] translate-x-[-50%] w-[625px]" style={{ left: "calc(50% + 16.5px)" }}>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none shadow-[0px_28px_54.7px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Playfair_Display:Bold',_sans-serif] font-bold h-[245px] justify-center leading-none text-[104px] text-black top-[1229.5px] translate-y-[-50%] w-[435px]" style={{ left: "calc(50% - 201px)" }}>
        <p className="mb-0">{`Our `}</p>
        <p>Products</p>
      </div>
      <Frame11 />
      <Frame10 />
    </div>
  );
}