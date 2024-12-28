export default function NavBarComponent() {
  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-full  md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 hover:text-gray-500 "
              >
                Kim Chansokpheng
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 hover:text-gray-500 "
              >
                About - Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 hover:text-gray-500 "
              >
                Skills
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
