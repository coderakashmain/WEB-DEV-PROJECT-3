import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const Home = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to("#yellow1", {
      top: "-100%",
      delay: 0.4,
      duration: 0.6,
      ease: "expo.out",
    });
    tl.from(
      "#yellow2",
      {
        top: "100%",
        delay: 0.3,
        duration: 0.7,
        ease: "expo.out",
      },
      "anim"
    );
    tl.to(
      "#loader h1",
      {
        delay: 0.2,
        color: "black",
      },
      "anim"
    );
    tl.to("#loader", {
        display: "none",
      opacity: 0,
    });
  });

  useEffect(()=>{
    let moving =  document.querySelectorAll('.moving');
    let page2 = document.querySelector('.page2');
    moving.forEach((ele)=> {
      ele.addEventListener('mouseover',()=>{
     let backimage = ele.getAttribute('data-image');
     page2.style.background=`url(${backimage})`;
     
    })

    document.querySelector('#footer h2').addEventListener('click',()=>{
      window.scrollTo({top : 0, behavior : 'smooth'});
    })
  });
  //   moving.forEach((ele)=> {
  //     ele.addEventListener('mouseover',()=>{
  //    let backimage = ele.getAttribute('data-image');
    
  //   setTimeout(() => {
  //     if(ele<ele.length){
  //       page2.style.background=`url(${backimage})`;
  //       ele = ele+1;
  //     }
  //     else{
  //       ele = 0;
  //     }
  //   }, 1000);
  //   setTimeout();
     
  //   })
  // });
  },[])
  return (
    <div id="main"  style = {{backgroundColor :'black'}}data-scroll>
      <div id="loader">
        <div id="yellow1"></div>
        <div id="yellow2"></div>
        <video
          autoPlay
          loop
          muted
          src="https://works.studio/uploads/videos/5_version2_200911_024123.mp4"
        ></video>
        <h1  data-scroll data-scroll-speed="-0.11">
          <em>We</em>
          <em> are a </em>CREATIVE
          <em>
            {" "}
            studio
            <br />
          </em>
          DEDICATED <em>to </em>CULTURAL
          <br />
          ADVANCEMENT <em>through</em> <br />
          STRATEGY <em>and </em>DESIGN.
        </h1>
      </div>
      <div id="nav">
        <svg
          className="core-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="21"
          viewBox="0 0 94 21"
        >
          <path
            fill="#FFFFFF"
            d="M4.96428634,19.7404847 L10.4624983,19.7404847 L12.1914385,11.2806923 C12.4686274,9.85458509 12.6977527,8.3843647 12.6977527,8.3843647 L12.7491378,8.3843647 L12.9574838,9.64510669 C13.074954,10.3278051 13.2302092,11.1866277 13.3914523,11.9556332 L15.0357774,19.7404847 L20.4569116,19.7404847 L25.2871165,1.37029056 L19.7889045,1.37029056 L18.3797115,7.96519502 C17.9633834,10.004821 17.5279576,12.7777957 17.5279576,12.7777957 L17.4765724,12.7777957 L17.1875309,11.1238359 C17.0243075,10.2200617 16.8098767,9.08016463 16.5924337,8.06025341 L15.1385477,1.37029056 L10.2826502,1.37029056 L8.74689371,8.49225078 C8.3247468,10.492423 7.91893294,12.7777957 7.91893294,12.7777957 L7.86754779,12.7777957 L7.62424522,11.2313056 C7.45009058,10.1663391 7.20541332,8.75286968 6.9683075,7.66497245 L5.63229341,1.37029056 L0.262544342,1.37029056 L4.96428634,19.7404847 Z M25.7848396,20.9737285 L27.9687088,18.5072409 C29.4588784,19.5606366 31.3344366,20.1772586 33.5439984,20.1772586 C39.247751,20.1772586 42.8960974,16.117831 42.8960974,10.6196191 C42.8960974,8.10174633 42.1253199,5.86649191 40.7379208,4.19647426 L42.9474826,1.70429409 L41.3545427,0.265509652 L39.1449809,2.73199726 C37.6548111,1.65290893 35.7535602,1.03628703 33.5439984,1.03628703 C27.8402459,1.03628703 24.2432849,5.12140712 24.2432849,10.6196191 C24.2432849,13.1631844 25.0140622,15.3984388 26.4014615,17.0684564 L24.1918997,19.5349441 L25.7848396,20.9737285 Z M29.6901116,10.6196191 C29.6901116,7.61358731 31.0004332,5.32694777 33.569691,5.32694777 C34.5717016,5.32694777 35.3681717,5.68664386 35.9847936,6.27757318 L29.9984226,13.0090289 C29.792882,12.2896367 29.6901116,11.4931668 29.6901116,10.6196191 Z M33.569691,15.8865978 C32.5676806,15.8865978 31.7712105,15.5525943 31.1545887,14.961665 L37.115267,8.2559018 C37.3465001,8.94960144 37.4492705,9.77176397 37.4492705,10.6196191 C37.4492705,13.6256508 36.1389489,15.8865978 33.569691,15.8865978 Z M44.3701386,19.7404847 L49.7398876,19.7404847 L49.7398876,13.3430325 L52.2320678,13.3430325 C53.7993151,13.3430325 54.415937,14.0624247 54.7499406,15.4755166 C55.1353293,17.1198416 54.9297885,19.3807886 55.4436403,19.7404847 L60.7363115,19.7404847 L60.7363115,19.4578663 C60.0683044,19.2780183 60.4793858,16.6316826 59.9912266,14.4221208 C59.6829156,12.9833364 58.9121384,11.9556332 57.4219686,11.3903964 L57.4219686,11.3133187 C59.3489121,10.439771 60.4280006,8.94960144 60.4280006,6.84280992 C60.4280006,3.09169337 57.2421207,1.37029056 53.4910042,1.37029056 L44.3701386,1.37029056 L44.3701386,19.7404847 Z M49.7398876,5.58387354 L52.6945341,5.58387354 C54.2360888,5.58387354 55.0068663,6.35465093 55.0068663,7.56220216 C55.0068663,8.84683111 54.1590113,9.51483818 52.6174566,9.51483818 L49.7398876,9.51483818 L49.7398876,5.58387354 Z M62.1075823,19.7404847 L67.4773313,19.7404847 L67.4773313,13.8054989 L68.6591899,12.4694848 L73.3352392,19.7404847 L79.5785362,19.7404847 L72.3332289,8.76975336 L79.1931475,1.37029056 L73.0269283,1.37029056 L67.4773313,7.38235408 L67.4773313,1.37029056 L62.1075823,1.37029056 L62.1075823,19.7404847 Z M86.0369377,20.1772586 C81.2581179,20.1772586 77.6354641,18.1218522 77.5583863,13.8825766 L83.0565984,13.8825766 C83.2364463,15.3470537 84.36692,16.0407533 86.1397078,16.0407533 C87.1931037,16.0407533 88.4777327,15.629672 88.4777327,14.5248911 C88.4777327,13.5724938 87.5612317,13.2310971 85.8599107,12.7929148 L84.6320012,12.4836519 C81.6245733,11.7179151 78.1750085,10.6007132 78.1750085,6.84280992 C78.1750085,2.62922694 81.6178141,1.03628703 85.7543191,1.03628703 C89.5568208,1.03628703 93.0510116,2.62922694 93.1280894,6.6372693 L87.8097256,6.6372693 C87.6555699,5.63525871 86.9361779,4.99294422 85.4717007,4.99294422 C84.2898422,4.99294422 83.4676797,5.53248839 83.4676797,6.27757318 C83.4676797,7.32396188 84.9413815,7.50062488 87.5373807,8.11947167 L88.1465657,8.26874954 C91.1042135,9.02276748 93.9502521,10.284608 93.9502521,14.0367321 C93.9502521,18.0447745 90.3789835,20.1772586 86.0369377,20.1772586 Z"
          ></path>
        </svg>
      </div>
      <div className="page1" data-scroll data-scroll-speed="-0.4">
        <h1 data-scroll data-scroll-speed ="0.2">
          <em>We</em>
          <em> are a </em>CREATIVE
          <em>
            {" "}
            studio
            <br />
          </em>
          DEDICATED <em>to </em>CULTURAL
          <br />
          ADVANCEMENT <em>through</em> <br />
          STRATEGY <em>and </em>DESIGN.
        </h1>
      </div>
      <div className="page2" data-scroll data-scroll-speed ="-0.2" >
        <div className="contain" data-scroll  data-scroll-speed="0.15" style={{width : '100%'}}>
        <div className="moving" data-image = "https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg">
                <h1>MINERAL</h1>
            <div className="moving-list">
              <div className="blur"></div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
            </div>
        </div>
        <div className="moving" data-image = "https://works.studio/assets/imager/images/erthos-brand-identity/43075/Home-Featured-Image_1a58980f77ae6d8c6a1e26c40e92a05d.jpg">
                <h1>ERTHOS</h1>
            <div className="moving-list">
            <div className="blur"></div>
                <div className="moving-list-in">
                    <p>print disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>creative disign</p>
                    <p>branding & identity</p>
                    <p>photography</p>
                    <p>digital disign</p>
                    <p>stratigy</p>
                </div>
                <div className="moving-list-in">
                    <p>photography</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>stratigy</p>
                    <p>creative disign</p>
                    <p>branding & identity</p>
                    <p>digital disign</p>
                </div>
                <div className="moving-list-in">
                    <p>photography</p>
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>stratigy</p>
                    <p>print disign</p>
                    <p>creative disign</p>
                    <p>branding & identity</p>
                </div>
            </div>
        </div>
        <div className="moving" data-image = "https://works.studio/assets/imager/images/converse-global-fa23/43403/converse-21_240523_143223_1a58980f77ae6d8c6a1e26c40e92a05d.jpg">
                <h1>CONVERSE</h1>
            <div className="moving-list">
            <div className="blur"></div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
            </div>
        </div>
        <div className="moving" data-image = "https://works.studio/assets/imager/images/skky-partners/37986/skky-25_1a58980f77ae6d8c6a1e26c40e92a05d.jpg">
                <h1>SKKY</h1>
            <div className="moving-list">
            <div className="blur"></div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
            </div>
        </div>
        <div className="moving" data-image = 'https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg'>
                <h1>BOLDLY</h1>
            <div className="moving-list">
            <div className="blur"></div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>stratigy</p>
                    <p>devlopment</p>
                    <p>creative disign</p>
                    <p>branding & identity</p>
                    <p>print disign</p>
                    <p>photography</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
                <div className="moving-list-in">
                    <p>digital disign</p>
                    <p>motion&animation</p>
                    <p>devlopment</p>
                    <p>print disign</p>
                    <p>photography</p>
                    <p>stratigy</p>
                    <p>branding & identity</p>
                    <p>creative disign</p>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div className="page3"  data-scroll data-scroll-speed ="-0.1" >
        <div className="line">
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>converse<br /><em>nextstudio</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/public/37839/public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>public.com <br /><em>campaign</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/between-places/40495/W%C3%98RKS_BetweenPlaces_Cover_240219_231911_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>between places<br /><em>visual identity</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/converse-basketball-ho19/1766/Converse-Basketball-Identity-Shoe-Photgraphy_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>converse<br /><em>basketball ho19</em></p></div>
            
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/nike-air-max-day-21-nyc-identity/38233/amd-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>nike air max 21<br /><em>film identity</em></p></div>
            
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/john-elliott-nepal/37810/john-elliott-nepal-cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>john elliott<br /><em>scenes from nepal</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/calvin-klein-retail/42031/Thumbnail_240320_185435_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>Calvin Klein <em>Retail Concept Design</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/reebok/10721/Reebok-Split-From-Packaging-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>REEBOK<em> SPLIT FROM ZINE</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/nars-x-susanne-bartsch/38394/nars-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>NARS X SUSANNE BARTSCH<em> <br/>ZINE</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/guns-n-roses-pop-up/2544/Guns-N-Roses-Pop-Up-Police-Car-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>GUNS N' ROSES<br/><em>POP UP</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/john-elliott-shows/10017/John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>JOHN ELLIOTT<em> SHOWS</em></p></div>
          </div>
        </div>
        <div className="line">
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/nike-studio-45/3184/Nike-Studio-45-Desk_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>nike<br /><em>studio 45</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/nike-nfl-2022/37789/nike-nfl-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>NIKE NFL<em> <br/>2022 CAMPAIGN</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>'jeen-yuhs'<em> <br/>FILM IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/Fear-of-God-Nike/38013/fog-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>NIKE <br/>AIR FEAR OF GOD<em> <br/>IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/essentials-fear-of-god/42214/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>ESSENTIALS <br/>FEAR OF GOD<em> <br/></em><em>IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>L.E.D. Studio<br/><em>Website</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>CDL <br/><em>CHAMPIONSHIP <br/>KIT 2021</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/heron-preston-website/39620/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>HERON PRESTON<em> WEBSITE</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/fear-of-god-house-of-god/38170/fog-pop-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>FEAR OF GOD<em> <br/></em><em>POP UP</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/call-of-duty-league-championship-kit/39632/WorksCoD_Shoes-sRGB-02_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>CDL<em> <br/>CHAMPIONSHIP <br/>KIT 2020</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/kith-sport-ss18/9940/JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>KITH<em> <br/>SPORT SS18</em></p></div>
          </div>
        </div>
        <div className="line">
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/futurevvorld/38020/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>FUTUREVVORLD <em>Identity &amp; Website</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/converse/38120/v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>Converse <em>Basketball Identity</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>U.S. SOCCER <br/><em>CAMPAIGN IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>VERSACE TRIGRECA<em> IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/the-north-face-climb-festival/41520/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>The North Face Climb Festival <em>Visual Identity</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/the-xi/38084/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>THE XI <br/><em>BRAND DESIGN</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/de-cara-al-sol-book-design/39377/W%C3%98RKS_DeCaraAlSol_Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>De Cara Al Sol <em>Book Design</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/the-lion-king-the-gift/8572/Beyonce-Lion-King-The-Gift-Deluxe-Album-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>Beyonce: <em>The Gift Album</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/converse-basketball-explorations/38446/freetoflow-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>CONVERSE<em> BASKETBALL EXPLORATIONS</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/peloton/38163/peloton-tread-1.5-b_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>PELOTON<em> TREAD FILM</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/dreamhaus/42170/dreamhaus-1.5_240320_221305_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>DREAMHAUS<em> IDENTITY</em></p></div>
          </div>
          <div className="line-img">
            <img src="https://works.studio/assets/imager/images/reshape-identity/2769/Reshape-Identity-Logo-Blue_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg" alt="" />
            <div className="cover"><p>RESHAPE<em> <br/>IDENTITY</em></p></div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="back"><h2>back to top</h2></div>

        <div className="footer-text">
            <p>HELLO@WORKS.STUDIO</p>
            <div className="f-t-r">
                <p>NEWSLETTER</p>
                <p>INSTAGRAM</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
