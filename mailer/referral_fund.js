const nodemailer = require("nodemailer");

let transporter2 = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "panteramining642@gmail.com",
    // pass: "desolidboy1",
    pass: "cvqydopvaddyfnfi",
    // secure:false,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options2 = (userInfo) => {
  return (mailOptions = {
    from: "panteramining@panteramining.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `
  <main>
   
  <style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

.maincontainer{
font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Nunito', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      font-weight: 100;
      line-height: 2.5;
    }
    .cordial {
      font-size: 16px;
    
    }
    .head-txt {
      text-align: center;
      background-color: #142c8e;
      font-size: 20px;
      color: #fff;
    }
    .paragraph-01,
    .paragraph-02 {
      font-size: 15.5px;
      padding: 1px;
    }
    .paragraph-03 {
      font-weight: 400;
      font-size: 15.5px;
      padding: 1px;
      color: green;
    }
    .paragraph-04{
      font-size: 15.5px;
      padding: 1px; 
    }
    .disclaimer{
        font-size: 12px;
        font-weight: 700;
        padding: 0px;
    }
    h1,h2,h4,h5,h6{
        font-size: 18px;
    }
  </style>

  <div class="maincontainer">
    <div class="head-txt">
      <h1 style=" text-align: center; font-size: 16px; color: #142c8e;">FLEEKINVEST.COM</h1>
      <h3 style="font-size: 15px;">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, a user that registerd with your referral link just made a deposit and you have recieved 10% referral bonus
     which amounts to ${userInfo.referral_amount} on <b>${datetime}</b>.

    </p>
    <p class="sm-p">
   Your 10% referral bonus has been added to your balance and also reflected on your referral bonus section
    </p>
    <p class="sm-p">
    NB:all  deposit are converted to (united state dollars(USD)) which is the default currency used @fleekinvest.
      For more detailed informations, please contact our customer support or your
      relationship officer
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h1 style="  font-size: 17px; text-align: center; background-color:  #142c8e; color: #fff;" >FLEEKINVEST</h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder;">
      Disclaimer: this message was automatically generated via fleekinvest secured channel,please do not reply to this message
      all correspondence should be addressed to FLEEKINVEST.COM or
      your relationship officer
    </p>
  </div>
</main>
 `,
  });
};
module.exports = { create_mail_options2, transporter2 };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
