import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Application Portofolio"
          description="Next js Application Portofolio"
        />
      }
    >
      <a href="">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
      <h1 className="font-bold text-2xl">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
    </Main>
  );
};

export default Index;
