import { ReactNode } from 'react';

// import Link from 'next/link';

// import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}
    <div className="max-w-screen-md mx-auto ">

      {/* <div className="border-b border-gray-300">
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
            <li className="mr-6">
              <a
                className="text-gray-700 border-none hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="py-5 text-xl content">{props.children}</div>
      {/* <div className="col-lg-12 col-md-12 " id="copyright"> className="border-t border-gray-300 text-center py-8 text-sm"
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered by <a href="mailto:alexandru.bran@nokia.com">Alexandru Bran & Next.JS Avengers</a>
        
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
        
      </div> */}
    </div>
  </div>
);

export { Main };
