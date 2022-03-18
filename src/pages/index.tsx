import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import axios from 'axios';
import { useEffect } from 'react';
import Jenkins from 'jenkins'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Head from 'next/head';

import { useQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../utils/jobs.query';

const Index = ({launches}) => {

  const { data, loading, error } = useQuery(JOBS_QUERY);

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
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
  // const router = useRouter();
  // console.log(launches)


  // // ngrok is used to expose Jenkins's URL to the internet, so that Github webhooks can connect properly to the Jenkins.
  // const jenkinsConfig = {
  //   baseUrl: 'http://10.129.210.207:8080/job/dashboard',
  //   crumbIssuer: true
  // };
  // const _jenkins = Jenkins(jenkinsConfig);

  // useEffect(() => {
  //   _jenkins.build.get({
  //     name: 'master',
  //     number: '1'
  //   }, (err, data) => {
  //     if (err) {
  //       console.log('Its on err!!! ::: ', err);
  //     }

  //     console.log('Can i see what is the data ::: ', data);
  //   });
  // }, []);

  // const getBuildInfo = () => {
  //   try {
  //     axios.get('/api/jenkins', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //         'Content-Type': 'application/json',

  //       }
  //     }).then(res => console.log(res))
  //       .catch(error => { console.log(error) })
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => { getBuildInfo() }, [])
  const headers = {
    'Content-Type': 'text/plain'
  };


  // FIXME: To be continued
  // useEffect(async () => {
  //   axios({
  //     method: 'post',
  //     // headers: { "Access-Control-Allow-Headers": "Authorization" },
  //     url: 'http://10.129.210.207:8080/job/dashboard/job/master/api/json',
  //     // headers: {'Authorization': 'Basic ' + btoa('username:apitoken')}
  //   }).then(function (response) {
  //     console.log(response.data);
  //   }).catch(error => console.log(error))
  //   // axios.post('http://root:110afc596defdc650fe704395b71df6344@10.129.210.207:8080/job/dashboard/job/master/api/json', 
  //   //   {headers}
  //   //       ).then(res => console.log(res))
  //   // .catch(error => console.log(error))
  // }, [])

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

export default Index

async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/ap/graphql/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  return {
    props: {
      launches: data.launchesPast
    }
  }
}
