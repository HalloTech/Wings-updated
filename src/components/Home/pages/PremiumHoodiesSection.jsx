import { useNavigate } from "react-router-dom";
import polos from "../../../../json/Home.json";

const PremiumHoodiesSection = () => {
  const navigate = useNavigate();

  const handleUserClick = (item) => {
    navigate(item.href);
  };

  return (
    <div style={{ flexGrow: 'inherit' }}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4 md:p-6 font-Amiri">
        {polos.map((item, index) => (
          <div 
            key={index} 
            className="bg-grey-600 h-13  shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            onClick={() => handleUserClick(item)}
          >
            <div className="w-full   ">
              <img
                src={item.images[0]}
                alt={item.alt}
                className="w-full"
              />
            </div>
            <div className="p-2 sm:p-3 flex flex-col justify-between">
              <h2 className="text-xs sm:text-sm md:text-md font-semibold text-gray-800 mb-1 sm:mb-2 truncate">{item.product_head}</h2>
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-green-600 font-semibold mr-1">{item.product_new_price}/-</span>
                <span className="text-red-600 line-through">{item.product_old_price}/-</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumHoodiesSection;