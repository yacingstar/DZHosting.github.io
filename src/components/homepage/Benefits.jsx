import benefit1 from "../../assets/benefit1.svg";
import benefit2 from "../../assets/benefit2.svg";
import benefit3 from "../../assets/benefit3.svg";
import benefit4 from "../../assets/benefit4.svg";
const Benefits = () => {
  return (
    <>
      <div className="flex flex-col ">
        {/* Brand image */}
        <div className="flex flex-row justify-between items-center pb-20">
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
        <div className="flex flex-row justify-between items-center pb-20">
          <div className="">
            <img src={benefit2} alt="Web Desssign" />
          </div>
          <div className="w-1/2 flex flex-col items-end">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8 w-3/4">
              Showcase Your Services with Elegant Web Design
            </h1>
            <p className="font-roboto-sans text-body text-primary w-3/4">
              Transform your business with our professional web design services.
              Stand out from competitors with a visually appealing design that
              reflects your brand's identity and values.
            </p>
          </div>
        </div>
        {/* Email and domain */}
        <div className="flex flex-row justify-between items-center pb-20">
          <div className="flex flex-wrap flex-col w-1/2">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8">
              Strengthen Trust with <br />
              Branded Email
            </h1>
            <p className="font-roboto-sans text-body text-primary w-2/3">
              Enhance your business's credibility and professionalism, making
              clients more likely to trust your communications.
            </p>
          </div>
          <div className="">
            <img src={benefit3} alt="Web Desssign" />
          </div>
        </div>
        {/* Ecommerce*/}
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <img src={benefit4} alt="Web Desssign" />
          </div>
          <div className="w-1/2 flex flex-col items-end">
            <h1 className="font-bold font-roboto-sans text-h2 text-primary pb-8 w-3/4">
              Sell Anytime, Anywhere
            </h1>
            <p className="font-roboto-sans text-body text-primary w-3/4">
              Picture this: Your online store, open 24/7, ready to serve
              customers from every corner of the globe. Crafted with care, it
              breaks down barriers—sleek designs, secure payment gateways, and
              all. Your business can thrive—anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
