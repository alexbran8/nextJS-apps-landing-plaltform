import { request } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
var http = require("http");

export default async (req: NextApiRequest, res: NextApiResponse) => {


  const JENKINS_BASE_URL = <string>'http://10.129.210.207:8080'
  const JENKINS_JOB=<string>'master'
  const JENKINS_USER_NAME=<string>'root'
  const JENKINS_API_KEY=<string>'scott!@#$3485'
// try{
//   console.log('here')
//   const options = {
//     host:'http://10.129.210.207:8080/job/dashboard/job/master/api/json'
//   }

//   var request = http.request(options, function (res) {
//     var responseString = "";
  
//     res.on("data", function (data) {
//       responseString += data;
//       // save all the data from response
//     });
//     res.on("end", function () {
//       console.log(responseString); 
//       // print to console when response ends
//     });
//   });

//   // console.log(result)
//     res.status(200).send("Hello world!");
//     // builds.then(res =>
//     //   console.log(res)
//     // )
//   }
//   catch (error){
//     console.log(error)
//     res.status(500).send(error);
//   }
};