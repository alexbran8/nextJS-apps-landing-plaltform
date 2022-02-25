import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Application Portofolio"
          description="Next js Application Portofolio"
        />
      }
    >
      <table>
        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt">
              NPT
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt
            </a>
          </td>

          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<NPT> support request <NPT>&body=Please provide support for the following NPT  web application issues:">
              {' '}
              REQUEST SUPPORT{' '}
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/dashboard">
              Dashboard
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/dashboard">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/dashboard
            </a>
          </td>
          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<DASHBOARD> support request <DASHBOARD>&body=Please provide support for the following DASHBOARD web application issues:">
              {' '}
              REQUEST SUPPORT
            </a>{' '}
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdrbeta">
              CDR
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdrbeta">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdrbeta
            </a>
          </td>
          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<DASHBOARD> support request <DASHBOARD>&body=Please provide support for the following CDRBETA web application issues:">
              {' '}
              REQUEST SUPPORT
            </a>{' '}
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdr">
              CDR (OLD)
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdr">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdr${' '}
            </a>
          </td>
          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<CDR OLD> support request <CDR OLD>&body=Please  provide support for the following CDR(OLD) web application issues:">
              {' '}
              REQUEST SUPPORT{' '}
            </a>{' '}
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/tools">
              NI TOOLS
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/tools">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/tools{' '}
            </a>
          </td>
          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<NI TOOLS> support request <NI TOOLS>&body=Please  provide support for the following NI TOOLS  web application issues:">
              {' '}
              REQUEST SUPPORT{' '}
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/saotools">
              SAO TOOLS (WIP)
            </a>
          </td>
          <td>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/saotools">
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/saotools{' '}
            </a>
          </td>
          <td>
            <a href="mailto:I_EXT_APPS_GDCEUR_SUPPORT@internal.nsn.com?subject=<SAO TOOLS> support request <SAO TOOLS>&body=Please  provide support for the following SAO TOOLS  web application issues:">
              {' '}
              REQUEST SUPPORT{' '}
            </a>
          </td>
        </tr>

        <tr>
          <td style={{ color: 'red' }}>
            <a href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/tacdb">
              TACDB (END OF LIFE)
            </a>
          </td>
          <td>
            <a
              href="https://apps.gdceur.eecloud.dynamic.nsn-net.net/tacdb"
              // style="color:red;"
            >
              https://apps.gdceur.eecloud.dynamic.nsn-net.net/tacdb{' '}
            </a>{' '}
          </td>
          <td
          // style="color:red;"
          >
            {' '}
            NO POSSIBILITY TO REQUEST SUPPORT{' '}
          </td>
        </tr>
      </table>
    </Main>
  );
};

export default Index;
