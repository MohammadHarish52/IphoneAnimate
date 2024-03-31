import { appleImg, bagImg, searchImg } from "../utils";

const Devices = ["Phones", "MacBook", "Tablets"];

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {Devices.map((item) => {
            return (
              <div
                key={item}
                className="px-5 cursor-pointer text-gray text-sm hover:text-white transition-all"
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex gap-7  items-baseline max-sm:justify-end max-sm:flex-1 ">
          <img src={searchImg} alt="" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
