import React from "react";
import HeroSection from "./HeroSection";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <HeroSection />
      <LeftImage
        imageURL="Media\Images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        linkname1="Try demo"
        learnMore="#"
        linkname2="Learn More"
        googlePlay="https://play.google.com/store/search?q=zerodha&c=apps&hl=en"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightImage 
       imageURL="Media\Images\console.png"
       productName="Console"
       productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       tryDemo="#"
       linkname1="Learn More"
       googlePlay="https://play.google.com/store/search?q=zerodha&c=apps&hl=en"
       appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <LeftImage
        imageURL="Media\Images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        linkname1="Coin"
        googlePlay="https://play.google.com/store/search?q=zerodha&c=apps&hl=en"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightImage
        imageURL="Media\Images\kiteconnect.png"
        productName="kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="#"
        linkname1="Kite connect"
        googlePlay="https://play.google.com/store/search?q=zerodha&c=apps&hl=en"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <LeftImage
        imageURL="Media\Images\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/search?q=zerodha&c=apps&hl=en"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
