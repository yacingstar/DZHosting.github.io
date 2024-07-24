import benefit1 from "../../assets/benefit1.svg";

const Benefits = () => {
  return (
    <>
      <div className="flex flex-col ">
        {/* Brand image */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap flex-col w-1/2">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8">
              Enhance Your Brand Image
            </h1>
            <p className="font-roboto-sans text-body text-primary w-2/3">
              Boost your online presence with our reliable web hosting, keeping
              your website accessible to reach and engage more clients. Enjoy
              fast loading times and seamless performance to attract new
              customers and enhance your credibility.
            </p>
          </div>
          <div className="">
            <img src={benefit1} alt="Web Desssign" />
          </div>
        </div>
        {/* Web Design */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap flex-col w-1/2">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8">
              Showcase Your Services with Elegant Web Design
            </h1>
            <p className="font-roboto-sans text-body text-primary w-2/3">
              Transform your business with our professional web design services.
              Stand out from competitors with a visually appealing design that
              reflects your brand's identity and values.
            </p>
          </div>
          <div className="">
            <img src={benefit1} alt="Web Desssign" />
          </div>
        </div>
        {/* Email and domain */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap flex-col w-1/2">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8">
              Strengthen Trust with Branded Email
            </h1>
            <p className="font-roboto-sans text-body text-primary w-2/3">
              Transform your business with our professional web design services.
              Stand out from competitors with a visually appealing design that
              reflects your brand's identity and values.
            </p>
          </div>
          <div className="">
            <img src={benefit1} alt="Web Desssign" />
          </div>
        </div>
        {/* Ecommerce*/}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap flex-col w-1/2">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8">
              Sell Anytime, Anywhere
            </h1>
            <p className="font-roboto-sans text-body text-primary w-2/3">
              Transform your business with our professional web design services.
              Stand out from competitors with a visually appealing design that
              reflects your brand's identity and values.
            </p>
          </div>
          <div className="">
            <img src={benefit1} alt="Web Desssign" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
