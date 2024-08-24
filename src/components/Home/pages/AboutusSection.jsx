const AboutusSection = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center min-h-screen w-full relative">
          <img
            src="/assets/page-4/about-image.jpeg"
            alt="about-image"
            className="object-cover w-full h-full absolute"
          />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 isolate">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white sm:text-4xl">
      Who we are?
    </h2>
  </div>
  <div className="relative">
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <li className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 italic">
            <strong>The Wings</strong>
          </h3>
          <div className="text-gray-600">
            <p>Wings, established in 2022 by Law and Management Graduates, is dedicated to delivering premium-quality cotton apparel featuring impressive prints and designs. Our primary objective is to provide customers with meticulously crafted garments that blend comfort, style, and durability seamlessly</p>
          </div>
        </div>
      </li>
      <li className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 italic">
            <strong>What we do?</strong>
          </h3>
          <div className="text-gray-600">
            <p>At Wings, we go beyond off-the-rack offerings by providing customized clothing options tailored to individual preferences. Additionally, we cater to bulk orders, ensuring that businesses, organizations, and events receive high-quality attire that aligns with their branding and requirements.</p>
          </div>
        </div>
      </li>
      <li className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            <strong>Why us?</strong>
          </h3>
          <div className="text-gray-600">
            <p>With Wings, experience clothing that not only reflects your unique personality but also meets your specific needs, whether you are an individual seeking personalized style or an organization looking to make a statement.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
        </div>

        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default AboutusSection;
