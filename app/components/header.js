import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto px-5 sm:px-10 lg:px-20 xl:px-32 flex flex-wrap p-5 items-center justify-between">
      <div className="flex items-center flex-grow"> {/* Added flex-grow to make sure the items take remaining space */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-18 h-24 text-white" />
        </a>
        <nav className="ml-4 flex flex-wrap items-center text-base">
          <a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Why Us</a>
          <a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">About Us</a>
          <a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Services</a>
          <a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Contact Us</a>
        </nav>
      </div>
      <a href="tel:+13146966698" className="hidden sm:hidden md:flex items-center bg-[#4762FF] rounded-full px-8 py-2 text-white self-start md:self-center">
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/ffffff/incoming-call.png" alt="incoming-call" className="mr-2"/>
        +1 314 6966698
      </a>
    </div>
  );
};

export default Header;
