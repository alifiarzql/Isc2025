const Header = () => {
  return (
    <div className="bg-[#0978FF] w-full h-[82px] flex items-center justify-between px-6 font-bold">
      <div className="text-xl font-bold text-white">
        <a href="/" className="hover:text-gray-200 text-[32px]">
          chekost.com
        </a>
      </div>

      <div className="flex items-center space-x-8 text-[20px] gap-10">
        <a
          href="#"
          className="flex items-center text-white hover:text-gray-200"
        >
          Mau apa?
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="flex items-center text-white hover:text-gray-200"
        >
          Punya kost?
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          Syarat dan ketentuan
        </a>
        <a href="/signin" className="text-white hover:text-gray-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Header;
