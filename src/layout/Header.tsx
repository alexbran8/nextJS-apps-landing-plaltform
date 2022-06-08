import Link from "next/link";
import { AppConfig } from "../utils/AppConfig";

function Header(){
  return <div className="antialiased w-full text-gray-700 px-1">
  <div className="max-w-screen-md mx-auto ">
  <div className="border-b border-gray-300">
  <div className="pt-16 pb-8">
    <div className="font-bold text-3xl text-gray-900">
      {AppConfig.title}
    </div>
    <div className="text-xl">{AppConfig.description}</div>
  </div>
  <div>
    <ul className="flex flex-wrap text-xl">
      <li className="mr-6">
        <Link href="/">
          <a className="text-gray-700 border-none hover:text-gray-900">
            All Applications
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/request-support/">
          <a className="text-gray-700 border-none hover:text-gray-900">
            Request Support
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/report-issue/">
          <a className="text-gray-700 border-none hover:text-gray-900">
            Report issue
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/newsletter/">
          <a className="text-gray-700 border-none hover:text-gray-900">
            Newsletter
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/whyjs/">
          <a className="text-gray-700 border-none hover:text-gray-900">
            Why Modern JS?
          </a>
        </Link>
      </li>
      {/* <li className="mr-6">
        <a
          className="text-gray-700 border-none hover:text-gray-900"
          href="https://github.com/ixartz/Next-js-Boilerplate"
        >
          GitHub
        </a>
      </li> */}
    </ul>
  </div>
</div>
</div>
</div>
}

export default Header;