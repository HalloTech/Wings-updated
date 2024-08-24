import { useNavigate } from "react-router-dom";

import oversized from "../../../json/oversized.json";

const OverSizeTShirt = () => {
  const navigate = useNavigate();

  const handleUserClick = (oversized) => {
    // console.log("send the correct data from the users", oversized);
    navigate("/single-hoodies", { state: { hoodiesSingleData: oversized } });
    // navigate("/user-profile");
  };

  const truncateText = (text, wordLimit) => {
    // console.log(text, wordLimit);
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "....";
    }
    return text;
  };

  // console.log(hoodies[0].images[0]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4 md:p-6 font-Amiri">
        {oversized.map((itmes, index) => (
          // sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
          <div
            key={index}
            className="bg-grey-600 h-13  shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            onClick={() => handleUserClick(itmes)}
          >
            {/* <div className="h-[12rem]"> */}
            <img
              src={itmes.images[0]}
              alt={itmes.alt}
              className="w-full"
            />
            {/* </div> */}

            <div className="flex flex-col px-2">
              <h1 className="text-md font-semibold text-gray-800 mb-2">{itmes.product_head}</h1>
              <p className="text-sm text-gray-600 mb-3">
                {/* {itmes.product_para} */}
                {truncateText(itmes.product_para, 4)}
              </p>

              <span className="text-green-600 font-semibold">
                {itmes.product_new_price} /-{" "}
                <span className="text-red-600 text line-through">
                  {itmes.product_old_price}/-
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OverSizeTShirt;
