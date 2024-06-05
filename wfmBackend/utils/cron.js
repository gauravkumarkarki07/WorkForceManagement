import  cron  from 'cron';
import {https} from 'https';

const URL="https://workforcemanagement.onrender.com/"

const job = new cron.CronJob("*/1 * * * *",function(){
    https
        .get(URL,(res)=>{
            if(res.statusCode===200){
                console.log("Get request successfull")
            }
            else{
                console.log("Get request failed",res.statusCode)
            }
        })
        .on("error",(e)=>{
            console.log("Error while sending request",e)
        })
}
	
);

export default job;