import svgPaths from "./svg-y8ysphiwh2";
import imgImg from "figma:asset/1b9e26a8eede1d077ca32f7e5f5317e075fd0427.png";
import imgImage1 from "figma:asset/b32d390900d8ae35b893bd2bd9eee61492aacca7.png";
import imgImage9 from "figma:asset/f4325903b603d1b081ce3b29f3b669df39f46250.png";
import imgImage4 from "figma:asset/eff8a0d7eb8566ee7c3a1c6edab364bc74fc2cb5.png";
import imgImage3 from "figma:asset/c0cde0049dc783efa22790cc40d1c13c39f5f496.png";
import imgImage5 from "figma:asset/20f4950453fd670c630b1795bd316e51b8290233.png";
import imgImg1 from "figma:asset/301b966bd506ae4227aa3f4cf53757e9e268d93c.png";

function Img() {
  return (
    <div className="absolute bg-center bg-cover bg-no-repeat h-[960px] left-0 top-[21px] w-[1557px]" data-name="img" style={{ backgroundImage: `url('${imgImg}')` }}>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Playfair_Display:Bold',_sans-serif] font-bold h-[181px] justify-center leading-[100px] left-[26px] text-[104px] text-black top-[519.5px] translate-y-[-50%] w-[602px]">
        <p className="mb-0">Superfood</p>
        <p>{`Starts Small `}</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[58.333px] left-[30px] text-[#1c3608] text-[36px] text-nowrap top-[712px] whitespace-pre">
        <p className="mb-0">{`Nutrient-rich, `}</p>
        <p className="mb-0">{`locally grown greens `}</p>
        <p>for your healthy lifestyle</p>
      </div>
      <div className="absolute bg-[#bebebe] h-[960px] left-[-1905px] top-0 w-[1704px]" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[960px] left-0 overflow-clip shadow-[0px_17px_39.6px_0px_rgba(0,0,0,0.25)] top-0 w-[1280px]" data-name="Hero section">
      <Img />
    </div>
  );
}

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
      <button className="[grid-area:1_/_1] block cursor-pointer font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] ml-[251.264px] mt-[16.274px] relative text-[20.83px] text-black text-center translate-x-[-50%] w-[80.717px]">
        <p className="leading-[normal]">{`Home `}</p>
      </button>
      <div className="[grid-area:1_/_1] font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] ml-[361.274px] mt-[16.274px] relative text-[20.83px] text-black text-center translate-x-[-50%] w-[95.038px]">
        <p className="leading-[normal]">{`About us `}</p>
      </div>
      <MicrogreensLibrary />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[242px] items-center justify-start leading-[0] left-1/2 overflow-clip px-6 py-[5.208px] rounded-[20.83px] shadow-[0px_5.208px_18.617px_0px_rgba(0,0,0,0.25)] top-16 translate-x-[-50%] w-[1062px]" data-name="Nav bar">
      <Right />
      <button className="[white-space-collapse:collapse] block cursor-pointer font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[20.83px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Contact us</p>
      </button>
    </div>
  );
}

function NutrientDense() {
  return (
    <div className="absolute bg-white h-56 left-[363px] rounded-[11.845px] top-[229px] w-60" data-name="Nutrient Dense">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[11.845px]" />
      <div className="absolute bottom-[63.82%] top-[9.87%] translate-x-[-50%] w-[56.11px]" style={{ left: "calc(50% - 0.144px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 59">
          <ellipse cx="28.0548" cy="29.4737" fill="var(--fill-0, #F9F3D9)" id="Ellipse 9" rx="28.0548" ry="29.4737" />
        </svg>
      </div>
      <div className="absolute bottom-[72.37%] top-[18.63%] translate-x-[-50%] w-[22.444px]" data-name="Vector" style={{ left: "calc(50% - 0.689px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 21">
          <path d={svgPaths.p3f8eb840} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[29.613px] leading-[0] text-[20.729px] text-black text-center top-[96.24px] translate-x-[-50%] w-[170.277px]" style={{ left: "calc(50% + 0.674px)" }}>
        <p className="leading-[normal]">Nutrient Dense</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[87.359px] leading-[0] text-[17.768px] text-center text-gray-600 top-[130.3px] translate-x-[-50%] w-[214.697px]" style={{ left: "calc(50% + 0.674px)" }}>
        <p className="leading-[normal]">Packed with concentrated nutrients, more than regular veggies</p>
      </div>
    </div>
  );
}

function FreshDelevary() {
  return (
    <div className="absolute bg-white h-56 left-[987px] rounded-[12px] top-[229px] w-60" data-name="Fresh Delevary">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute inset-[9.87%_38.01%_63.82%_38.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 59">
          <ellipse cx="28.0702" cy="29.4737" fill="var(--fill-0, #F9F3D9)" id="Ellipse 10" rx="28.0702" ry="29.4737" />
        </svg>
      </div>
      <div className="absolute h-6 left-1/2 top-[40.5px] translate-x-[-50%] w-[30px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
          <path d={svgPaths.p16402200} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] text-[21px] text-black text-center top-[97.5px] translate-x-[-50%] w-[159px]" style={{ left: "calc(50% + 0.5px)" }}>
        <p className="leading-[normal]">Fresh Delivery</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[43.5px] leading-[normal] text-[18px] text-center text-gray-600 top-[133.5px] translate-x-[-50%] w-[208.5px]" style={{ left: "calc(50% - 0.25px)" }}>
        <p className="mb-0">{`Harvested & delivered`}</p>
        <p>fresh</p>
      </div>
    </div>
  );
}

function LocallyGrown() {
  return (
    <div className="absolute bg-white h-56 left-[51px] rounded-[13.221px] top-[230px] w-60" data-name="Locally Grown">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[13.221px]" />
      <div className="absolute inset-[11.03%_38.01%_59.56%_38.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 66">
          <ellipse cx="28.0702" cy="32.9412" fill="var(--fill-0, #F9F3D9)" id="Ellipse 10" rx="28.0702" ry="32.9412" />
        </svg>
      </div>
      <div className="absolute size-[26.442px] top-[44.62px] translate-x-[-50%]" data-name="Vector" style={{ left: "calc(50% + 0.221px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path d={svgPaths.p3aa7a300} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[33.052px] leading-[0] text-[23.136px] text-black text-center top-[107.42px] translate-x-[-50%] w-[233.016px]" style={{ left: "calc(50% + 0.687px)" }}>
        <p className="leading-[normal]">{`Responsibly Grown `}</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[47.925px] leading-[0] text-[19.831px] text-center text-gray-600 top-[147.08px] translate-x-[-50%] w-[191.701px]" style={{ left: "calc(50% - 0.14px)" }}>
        <p className="leading-[normal]">{`No chemicals or pesticides used `}</p>
      </div>
    </div>
  );
}

function Component100Organic() {
  return (
    <div className="absolute bg-white h-56 left-[675px] rounded-[19.853px] top-[228px] w-60" data-name="100% Organic">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19.853px]" />
      <div className="absolute bottom-[59.56%] top-[11.03%] translate-x-[-50%] w-[62.306px]" style={{ left: "calc(50% + 0.727px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 66">
          <ellipse cx="31.1532" cy="32.9412" fill="var(--fill-0, #F9F3D9)" id="Ellipse 11" rx="31.1532" ry="32.9412" />
        </svg>
      </div>
      <div className="absolute h-[23.166px] top-[46.32px] translate-x-[-50%] w-[26.471px]" data-name="Vector" style={{ left: "calc(50% + 0.235px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
          <path d={svgPaths.p1c590000} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] text-[23.162px] text-black text-center top-[107.54px] translate-x-[-50%] w-[168.75px]" style={{ left: "calc(50% + 1.007px)" }}>
        <p className="leading-[normal]">Non-GMO</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[47.978px] leading-[0] text-[19.853px] text-center text-gray-600 top-[145.59px] translate-x-[-50%] w-[170.404px]" style={{ left: "calc(50% + 0.18px)" }}>
        <p className="leading-[normal]">{` We use only non GMO seeds`}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[51px] top-[228px]">
      <NutrientDense />
      <FreshDelevary />
      <LocallyGrown />
      <Component100Organic />
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="absolute bg-white h-[580px] left-0.5 rounded-[10px] top-[1033px] w-[1278px]" data-name="Why Choose Us">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="absolute font-['Playfair_Display:SemiBold',_sans-serif] font-semibold h-[174px] leading-[0] left-1/2 text-[65px] text-center text-gray-800 top-2.5 translate-x-[-50%] w-[512px]">
        <p className="leading-[normal]">Why Choose Our Microgreens</p>
      </div>
      <Group1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[837.463px] relative rounded-[50px] w-[592px]">
      <div className="h-[837.463px] overflow-clip relative w-[592px]">
        <div className="absolute bg-center bg-cover bg-no-repeat h-[836.89px] left-0 top-0 w-[592.406px]" data-name="image 9" style={{ backgroundImage: `url('${imgImage9}')` }} />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 pointer-events-none rounded-[50px] shadow-[0px_7px_24.5px_0px_rgba(0,0,0,0.68)]" />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[#2e7d32] h-12 left-[482px] rounded-[19164.8px] top-[502px] w-40" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-1/2 text-[24px] text-center text-white translate-x-[-50%] w-[152px]" style={{ top: "calc(50% - 16px)" }}>
        <p className="leading-[normal]">Learn more</p>
      </div>
    </div>
  );
}

function OurMicrogreens() {
  return (
    <div className="absolute bg-[#abdc9d] h-[580px] left-0 rounded-[10px] top-[1686px] w-[1278px]" data-name="Our Microgreens">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="absolute font-['Playfair_Display:SemiBold',_sans-serif] font-semibold h-[87px] leading-[0] text-[65px] text-center text-gray-800 top-[37px] translate-x-[-50%] w-[524px]" style={{ left: "calc(50% - 363px)" }}>
        <p className="leading-[normal]">Our Microgreens</p>
      </div>
      <div className="absolute flex h-[898.896px] items-center justify-center left-[639px] top-[-115px] w-[682.703px]">
        <div className="flex-none rotate-[6.478deg]">
          <Frame2 />
        </div>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[26px] text-[32px] text-gray-600 top-[217px] w-[639px]">
        <p className="leading-[normal]">Grown with care and packed with nutrients, our microgreens bring fresh flavor and vibrant color to your meals. Harvested at peak freshness, they offer a delicious, healthy boost to your everyday dishes</p>
      </div>
      <Span />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[#f9f3d9] h-[46px] left-[157.18px] rounded-[19164.8px] top-[17.25px] w-[145.158px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[30.667px] leading-[0] left-[15.33px] text-[#2e7d32] text-[23px] top-[7.67px] w-[124.583px]">
        <p className="leading-[normal]">Bestseller</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[#3d8107] h-12 left-[154px] rounded-[19164.8px] top-[394px] w-40" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-1/2 text-[24px] text-center text-white translate-x-[-50%] w-[152px]" style={{ top: "calc(50% - 16px)" }}>
        <p className="leading-[normal]">Learn more</p>
      </div>
    </div>
  );
}

function RedAmaranthus() {
  return (
    <div className="absolute bg-white h-[460px] left-6 rounded-[15.333px] top-[158px] w-[324px]" data-name="Red Amaranthus">
      <div className="h-[460px] overflow-clip relative w-[324px]">
        <div className="absolute bg-center bg-cover bg-no-repeat h-[277.917px] left-[3.83px] top-0 w-[329.667px]" data-name="image 4" style={{ backgroundImage: `url('${imgImage4}')` }} />
        <Span1 />
        <Span2 />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[76px] leading-[0] left-[22px] text-[26.959px] text-black top-[302px] w-[206px]">
          <p className="leading-[38.512px]">Red Amaranths</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.917px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[15.333px] shadow-[4px_4px_14.3px_0px_rgba(61,61,61,0.55)]" />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[#f9f3d9] h-[46.215px] left-[214.93px] rounded-[19254.3px] top-[21.18px] w-[84.276px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19254.3px]" />
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[30.81px] leading-[0] left-[15.4px] text-[#2e7d32] text-[23.107px] top-[7.7px] w-[63.545px]">
        <p className="leading-[normal]">New</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[277.289px] left-[1.93px] top-[1.93px] w-[329.281px]" data-name="div">
      <div className="h-[277.289px] overflow-clip relative w-[329.281px]">
        <div className="absolute bg-center bg-cover bg-no-repeat h-[277.289px] left-0 top-0 w-[329.281px]" data-name="image 3" style={{ backgroundImage: `url('${imgImage3}')` }} />
        <Span3 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[#2e7d32] h-12 left-[152px] rounded-[19164.8px] top-[394px] w-40" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-1/2 text-[24px] text-center text-white translate-x-[-50%] w-[152px]" style={{ top: "calc(50% - 16px)" }}>
        <p className="leading-[normal]">Learn more</p>
      </div>
    </div>
  );
}

function Arugula() {
  return (
    <div className="absolute bg-white h-[460px] left-[380px] rounded-[15.405px] top-[158px] w-[322px]" data-name="Arugula">
      <div className="h-[460px] overflow-clip relative w-[322px]">
        <Div />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[38.512px] leading-[0] left-[21.03px] text-[26.959px] text-black top-[302.32px] w-[206.041px]">
          <p className="leading-[38.512px]">YXxxxxx xxx</p>
        </div>
        <Span4 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.926px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[15.405px] shadow-[4px_4px_14.3px_0px_rgba(61,61,61,0.55)]" />
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[#2e7d32] h-12 left-[154px] rounded-[19164.8px] top-[392px] w-40" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-1/2 text-[24px] text-center text-white translate-x-[-50%] w-[152px]" style={{ top: "calc(50% - 16px)" }}>
        <p className="leading-[normal]">Learn more</p>
      </div>
    </div>
  );
}

function Kohlrabi() {
  return (
    <div className="absolute bg-white h-[460px] left-[734px] rounded-[15.333px] top-[158px] w-[324px]" data-name="Kohlrabi">
      <div className="h-[460px] overflow-clip relative w-[324px]">
        <div className="absolute bg-center bg-cover bg-no-repeat h-[272.362px] left-[1.89px] top-[1.89px] w-[323.43px]" data-name="image 5" style={{ backgroundImage: `url('${imgImage5}')` }} />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[37.828px] leading-[0] left-[24.59px] text-[26.48px] text-black top-[296.95px] w-[276.145px]">
          <p className="leading-[37.828px]">Kohlrabi</p>
        </div>
        <Span5 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.917px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[15.333px] shadow-[4px_4px_14.3px_0px_rgba(61,61,61,0.55)]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute bg-center bg-cover bg-no-repeat h-[272px] left-0.5 top-0.5 w-80" data-name="img" style={{ backgroundImage: `url('${imgImg1}')` }}>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[#2e7d32] h-12 left-[152px] rounded-[19164.8px] top-[394px] w-40" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[19164.8px]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[30px] leading-[0] left-1/2 text-[24px] text-center text-white translate-x-[-50%] w-[152px]" style={{ top: "calc(50% - 16px)" }}>
        <p className="leading-[normal]">Learn more</p>
      </div>
    </div>
  );
}

function Kit() {
  return (
    <div className="absolute bg-white h-[460px] left-[1090px] rounded-[16px] top-40 w-[322px]" data-name="Kit">
      <div aria-hidden="true" className="absolute border-2 border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_14.3px_0px_rgba(61,61,61,0.55)]" />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-10 leading-[0] left-[26px] text-[0px] text-black top-[314px] w-[284px]">
        <p className="leading-[40px] text-[28px]">
          <span className="font-['Montserrat:Medium',_sans-serif] font-medium">Starter</span>
          <span>{` Growing Kit`}</span>
        </p>
      </div>
      <Img1 />
      <Span6 />
    </div>
  );
}

function NavigationCarasole() {
  return (
    <div className="absolute h-2 left-[619px] top-[674px] w-11" data-name="Navigation carasole">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 8">
        <g id="Navigation carasole ">
          <circle cx="4" cy="4" fill="var(--fill-0, #505050)" id="Ellipse 2" r="4" />
          <circle cx="22" cy="4" fill="var(--fill-0, #A0A0A0)" id="Ellipse 3" r="4" />
          <circle cx="40" cy="4" fill="var(--fill-0, #A0A0A0)" id="Ellipse 4" r="4" />
        </g>
      </svg>
    </div>
  );
}

function OurProducts() {
  return (
    <div className="absolute h-[709px] left-[-1px] overflow-clip top-[2459px] w-[1279px]" data-name="Our products">
      <div className="absolute bg-[#abdc9d] h-[709px] left-1/2 top-0 translate-x-[-50%] w-[1279px]" />
      <RedAmaranthus />
      <Arugula />
      <Kohlrabi />
      <Kit />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-10 leading-[0] left-[1155px] text-[#2e7d32] text-[28px] top-[105px] w-24">
        <p className="leading-[40px]">See All</p>
      </div>
      <div className="absolute font-['Playfair_Display:SemiBold',_sans-serif] font-semibold h-[71px] leading-[0] left-[215px] text-[65px] text-center text-gray-800 top-[13px] translate-x-[-50%] w-[388px]">
        <p className="leading-[normal]">Our Produce</p>
      </div>
      <NavigationCarasole />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[26px] top-[271px]">
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] left-[438.25px] text-[#0000ee] text-[30px] text-center text-nowrap top-[274.75px] translate-x-[-50%]">
        <p className="leading-[15px] whitespace-pre">+91 7338711601</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[172.5px] text-[#090909] text-[36px] text-center text-nowrap top-[271px] translate-x-[-50%]">
        <p className="leading-[18px] whitespace-pre">{`Phone number : `}</p>
      </div>
      <div className="absolute h-0 left-[319.25px] top-[296.5px] w-[250.5px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 3">
            <line id="Line 2" stroke="var(--stroke-0, #0000EE)" strokeWidth="2.25" x2="250.5" y1="1.875" y2="1.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[858px] top-[275px]">
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] left-[1122px] text-[#0000ee] text-[30px] text-center text-nowrap top-[275px] translate-x-[-50%]">
        <p className="leading-[15px] whitespace-pre">Sid@gmail.com</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[924.5px] text-[36px] text-black text-center text-nowrap top-[275px] translate-x-[-50%]">
        <p className="leading-[18px] whitespace-pre">E-mail :</p>
      </div>
      <div className="absolute h-0 left-[1002px] top-[296.75px] w-[250.5px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 3">
            <line id="Line 2" stroke="var(--stroke-0, #0000EE)" strokeWidth="2.25" x2="250.5" y1="1.875" y2="1.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents leading-[0] left-[225px] top-28">
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[43.824px] left-[225px] text-[30.677px] text-black top-28 w-[212.677px]">
        <p className="leading-[43.824px]">Shop</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[225px] text-[26.294px] text-gray-600 top-[169.09px] w-[374.716px]">
        <p className="leading-[35.059px]">All Products</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.28px] left-[225px] text-[26.294px] text-gray-600 top-[221.69px] w-[388.378px]">
        <p className="leading-[35.059px]">Subscription</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[225px] text-[26.294px] text-gray-600 top-[274.29px] w-[400.035px]">
        <p className="leading-[35.059px]">Growing Kits</p>
      </div>
      <button className="absolute block cursor-pointer font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[225px] text-[26.294px] text-gray-600 top-[326.89px] w-[303.824px]">
        <p className="leading-[35.059px]">Home</p>
      </button>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents leading-[0] left-[784.22px] top-28">
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[43.824px] left-[784.22px] text-[30.677px] text-black top-28 w-[194.73px]">
        <p className="leading-[43.824px]">Company</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[784.22px] text-[26.294px] text-gray-600 top-[169.09px] w-[149.995px]">
        <p className="leading-[35.059px]">About Us</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[784.22px] text-[26.294px] text-gray-600 top-[221.69px] w-[155.258px]">
        <p className="leading-[35.059px]">Our Farm</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[784.22px] text-[26.294px] text-gray-600 top-[274.29px] w-[215.782px]">
        <p className="leading-[35.059px]">Sustainability</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] left-[784.22px] text-[26.294px] text-gray-600 top-[326.89px] w-[176.31px]">
        <p className="leading-[35.059px]">Contact Us</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[225px] top-28">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[413px] text-[26.294px] text-center text-gray-500 top-[464px]">
      <div className="absolute h-[35.059px] left-[454.63px] top-[464px] translate-x-[-50%] w-[83.265px]">
        <p className="leading-[35.059px]">Terms</p>
      </div>
      <div className="absolute h-[35.059px] left-[593.21px] top-[464px] translate-x-[-50%] w-[96.413px]">
        <p className="leading-[35.059px]">Privacy</p>
      </div>
      <div className="absolute h-[35.059px] left-[751.35px] top-[464px] translate-x-[-50%] w-[122.707px]">
        <p className="leading-[35.059px]">Shipping</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-gray-50 h-[558px] rounded-[32.073px] top-[381px] translate-x-[-50%] w-[1226px]" data-name="footer" style={{ left: "calc(50% - 0.5px)" }}>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[32.073px]" />
      <div className="absolute left-8 size-[59.162px] top-32">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="29.5811" cy="29.5811" fill="var(--fill-0, #F9F3D9)" id="Ellipse 13" r="29.5811" />
        </svg>
      </div>
      <div className="absolute left-8 size-[59.162px] top-[237px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="29.5811" cy="29.5811" fill="var(--fill-0, #F9F3D9)" id="Ellipse 13" r="29.5811" />
        </svg>
      </div>
      <div className="absolute left-8 size-[59.162px] top-[346px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="29.5811" cy="29.5811" fill="var(--fill-0, #F9F3D9)" id="Ellipse 13" r="29.5811" />
        </svg>
      </div>
      <div className="absolute left-8 size-[59.162px] top-[456px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="29.5811" cy="29.5811" fill="var(--fill-0, #F9F3D9)" id="Ellipse 13" r="29.5811" />
        </svg>
      </div>
      <div className="absolute inset-[25.63%_93.56%_69.14%_3.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 30">
          <path d={svgPaths.p24778690} fill="var(--fill-0, #2E7D32)" id="Vector" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute inset-[45.7%_94.13%_50.18%_4.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p1581a100} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[63.98%_93.39%_29.31%_3.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <path d={svgPaths.p3d952d00} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[84.95%_93.31%_10.8%_3.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 24">
          <path d={svgPaths.p35b1ed00} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
      <Group8 />
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[35.059px] leading-[0] text-[26.294px] text-center text-gray-500 top-[405px] translate-x-[-50%] w-[541.225px]" style={{ left: "calc(50% - 0.387px)" }}>
        <p className="leading-[35.059px]">© 2025 Amvi Greens. All rights reserved.</p>
      </div>
      <Group7 />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_11.97px_11.97px] absolute font-['Italiana:Regular',_sans-serif] h-[83.51px] leading-[0] left-[120.53px] not-italic text-[#026a15] text-[68.826px] top-[22.68px] w-[334.039px]">
        <p className="leading-[normal]">Amvi Green</p>
      </div>
      <div className="absolute bg-[59.46%_66.07%] bg-no-repeat bg-size-[186.05%_121.21%] h-[96.288px] left-[27px] rounded-[79.302px] top-4 w-[94.1px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
    </div>
  );
}

function ContactUsCard() {
  return (
    <div className="absolute bg-white h-[1039px] left-[-1px] overflow-clip shadow-[0px_12px_39px_0px_rgba(0,0,0,0.5)] top-[3241px] w-[1279px]" data-name="Contact us card">
      <div className="absolute bg-[#99dc86] h-[1529px] left-0 rounded-[36px] shadow-[0px_12px_39px_0px_rgba(0,0,0,0.5)] top-0 w-[1279px]" />
      <div className="absolute font-['Playfair_Display:SemiBold',_sans-serif] font-semibold h-[84px] leading-[0] text-[60px] text-center text-white top-[72px] translate-x-[-50%] w-[744px]" style={{ left: "calc(50% + 0.5px)" }}>
        <p className="leading-[normal]">Get in touch to place an order</p>
      </div>
      <Group6 />
      <Group5 />
      <Footer />
    </div>
  );
}

export default function MacBookAir4() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 4">
      <HeroSection />
      <NavBar />
      <WhyChooseUs />
      <OurMicrogreens />
      <OurProducts />
      <ContactUsCard />
    </div>
  );
}