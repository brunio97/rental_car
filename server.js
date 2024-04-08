const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


const PORT = process.env.PORT || 5000;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "bfsv97@gmail.com",
    pass: "uaha ghsh cgbd cgsa"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/banner", (req, res) => {
  const city = req.body.city;
  const zip = req.body.zip;
  const type = req.body.type;
  const model = req.body.model;
  const pickUpDate = req.body.pickUpDate;
  const pickUpTime = req.body.pickUpTime;
  const returnDate = req.body.returnDate;
  const returnTime = req.body.returnTime;
  const price = req.body.price;
  const age = req.body.age;
  const number = req.body.number;
  const email = req.body.email;
  const sender = email;
  
  const recipient = [sender, "bfsv97@gmail.com"];
  const mail = {
    from: email,
    to: recipient.join(),
    subject: "Contact Form Rental-Car",
    html: `Your reservation's info:
           <p>City: ${city}</p>
           <p>Zip: ${zip}</p>
           <p>Type: ${type}</p>
           <p>Model: ${model}</p>
           <p>PickUp Date: ${pickUpDate}</p>
           <p>pickUp Time: ${pickUpTime}</p>
           <p>Return Date: ${returnDate}</p>
           <p>Return Time: ${returnTime}</p>
           <p>Price: ${price}</p>
           <p>Age: ${age}</p>
           <p>phone: ${number}</p>
           <p>Email: ${email}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

/**ELerror Es no inicializar el servidor, sirve pero hay q solucionar al subirlo en linea*/