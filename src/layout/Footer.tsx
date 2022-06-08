import { AppConfig } from "../utils/AppConfig";

function Footer(){
  return <div className="antialiased w-full text-gray-700 px-1">
  <div className="max-w-screen-md mx-auto ">
  <div className="col-lg-12 col-md-12 " id="copyright"> {/*className="border-t border-gray-300 text-center py-8 text-sm"*/}
  © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered by <a href="mailto:alexandru.bran@nokia.com">Alexandru Bran & Next.JS Avengers</a>
  {/*
   * PLEASE READ THIS SECTION
   * We'll really appreciate if you could have a link to our website
   * The link doesn't need to appear on every pages, one link on one page is enough.
   * Thank you for your support it'll mean a lot for us.
   */}
</div>
</div>
</div>
}

export default Footer;