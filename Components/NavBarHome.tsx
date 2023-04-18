import Link from "next/link";

const NavBarHome = () => {
  return (
    <div className="flex w-full flex-row justify-between px-40 border-b py-2">
      {/* Branding : logo */}
      <h2 className="text-sky-500 font-extrabold text-3xl m-2 bg-gradient-to-r from-blue-600 via-sky-400 to-pink-400 inline-block text-transparent bg-clip-text font-urbanist">
        {" "}
        ShufflePay
      </h2>

      {/* Nav bar links for md and lg */}
      <div className="hidden md:flex flex-row items-center">
        <ul className="flex justify-center">
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-inter font-medium hover:text-sky-400 hover:underline text-md"
            >
              About
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-inter font-medium hover:text-sky-400 hover:underline text-md"
            >
              Contact
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-inter font-medium hover:text-sky-400 hover:underline text-md"
            >
              FAQ
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-inter font-medium hover:text-sky-400 hover:underline text-md"
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>

      {/* Nav bar links for sm */}

      {/* 🔴 add code here for Menu button (sidebar) */}
    </div>
  );
};

export default NavBarHome;
