const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "momentumglobalinvestment@gmail.com",
    
    pass: "lscloysvdjdlqboi",
    
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@momentumgloballtd.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `DEPOSIT INTO YOUR ACCOUNT`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
  <div class="maincontainer" style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
    <div class="head-txt">
      <h1 style="text-align: center; font-size: 16px; color: #825ee4">
        MOMENTUMGLOBALLTD.COM
      </h1>
      <h3 style="font-size: 15px">DEPOSIT REQUEST NOTIFICATION</h3>
    </div>

    <p class="sm-p">
       Dear ${userInfo.first_name} ${userInfo.last_name}, we have processed your request to make a deposit of ${userInfo.currency}${userInfo.amount} worth of ${userInfo.payment_method}.
    </p>
    <p>    To deposit into your MOMENTUMGLOBALINVESTMENT account,copy and send <b>${userInfo.currency}${userInfo.amount}</b> worth of <b>${userInfo.payment_method}</b> to the wallet address below</p>

    <h2 >Wallet Address: <b style="background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
        color: #fff; fon-size:22px; padding:4px; border-radius:4px"> ${userInfo.wallet}</b> </h2>

     
   

 <p class="sm-p">
    NB:All your deposit will be converted to (united state dollars(USD)) which is our default currency.
      For more detailed informations, please contact our customer support or your
      relationship officer
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h1
      
    >
      MOMENTUMGLOBALLTD.COM
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via momentum global investment ltd 
      secured channel, please do not reply to this message all correspondence
      should be addressed to MOMENTUMGLOBALLTD.COM or your relationship officer
    </p>
  </div>
</main>
 `,
  });
};
module.exports = { create_mail_options, transporter };
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
