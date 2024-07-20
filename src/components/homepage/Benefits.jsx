const Benefits = () => {
  return (
    <>
      <div className="flex flex-col border border-black">
        {/* Web Hosting */}
        <div className="flex flex-row justify-around border border-black">
          <div className="border border-black">
            <h1 className="font-bold">Enhance Your Brand Image</h1>
            <p>
              Boost your online presence with our reliable web hosting, keeping
              your website accessible to reach and engage more clients. Enjoy
              fast loading times and seamless performance to attract new
              customers and enhance your credibility.
            </p>
          </div>
          <div className="">
            <img src="path/to/your/image.jpg" alt="Web Design" />
          </div>
        </div>
        {/* Web Design */}
        <div className="flex flex-row justify-around border border-black">
          <div className="border border-black">
            <h1 className="font-bold">
              Showcase Your Services with Elegant Web Design
            </h1>
            <p>
              Transform your business with our professional web design services.
              Stand out from competitors with a visually appealing design that
              reflects your brand's identity and values.
            </p>
          </div>
          <div className="">
            <img src="path/to/your/image.jpg" alt="Web Design" />
          </div>
        </div>
        {/* Email and domain */}
        <div className="flex flex-row justify-around border border-black">
          <div className="border border-black">
            <h1 className="font-bold">Strengthen Trust with Branded Email</h1>
            <p>A little text about Email and domain.</p>
          </div>
          <div className="">
            <img src="path/to/your/image.jpg" alt="Web Design" />
          </div>
        </div>
        {/* E-Commerce */}
        <div className="flex flex-row justify-around border border-black">
          <div className="border border-black">
            <h1 className="font-bold">Sell Anytime, Anywhere</h1>
            <p>A little text about Ecommerce.</p>
          </div>
          <div className="">
            <img src="path/to/your/image.jpg" alt="Web Design" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
