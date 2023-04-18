import Link from "next/link";

const NavBarHome = () => {
  return (
    <div className="flex w-full flex-row justify-between px-40 bg-slate-200">
      {/* Branding : logo */}
      <h2 className="text-sky-500 font-extrabold text-3xl m-2 bg-gradient-to-r from-blue-600 via-sky-400 to-pink-400 inline-block text-transparent bg-clip-text font-urbanist">
        {" "}
        ShufflePay
      </h2>

      {/* Nav bar links  */}
      <div>
        <ul className="flex justify-center">
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-archivo hover:text-sky-400 hover:underline text-lg"
            >
              About
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-archivo hover:text-sky-400 hover:underline text-lg"
            >
              Contact
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-archivo hover:text-sky-400 hover:underline text-lg"
            >
              FAQ
            </Link>
          </li>
          <li className="m-2">
            <Link
              href="/underprogress"
              className="text-sky-900 font-archivo hover:text-sky-400 hover:underline text-lg"
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarHome;
