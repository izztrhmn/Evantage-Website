var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
const { SitemapStream, streamToPromise } = require("sitemap");

app.use(express.static(__dirname));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// Home page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Product page
app.get('/evantage-cmms-webcore', function(req, res) {
  res.render('pages/evantage-cmms-webcore');
});
app.get('/evantage-cmms-mobile-app', function(req, res) {
  res.render('pages/evantage-cmms-mobile-app');
});
app.get('/evantage-cmms-webwork', function(req, res) {
  res.render('pages/evantage-cmms-webwork');
});

// Feature 
app.get('/feature-work-management', function(req, res) {
  res.render('pages/feature-work-management');
});
app.get('/feature-preventive-maintenance', function(req, res) {
  res.render('pages/feature-preventive-maintenance');
});
app.get('/feature-asset-management', function(req, res) {
  res.render('pages/feature-asset-management');
});
app.get('/feature-QRcode-management', function(req, res) {
  res.render('pages/feature-QRcode-management');
});
app.get('/feature-data-analytic', function(req, res) {
  res.render('pages/feature-data-analytic');
});
app.get('/feature-custom-dashboard', function(req, res) {
  res.render('pages/feature-custom-dashboard');
});
app.get('/feature-photo-evidence', function(req, res) {
  res.render('pages/feature-photo-evidence');
});
app.get('/feature-email-notification', function(req, res) {
  res.render('pages/feature-email-notification');
});
app.get('/feature-sparepart-management', function(req, res) {
  res.render('pages/feature-sparepart-management');
});
app.get('/feature-procurement-management', function(req, res) {
  res.render('pages/feature-procurement-management');
});
app.get('/feature-ai-driven', function(req, res) {
  res.render('pages/feature-ai-driven');
});


// testing
app.get('/Counter', function(req, res) {
  res.render('partials/Counter');
});

// Solutions
app.get('/cmms-facilitymanagement', function(req, res) {
  res.render('pages/cmms-facilitymanagement');
});
app.get('/cmms-healthcare', function(req, res) {
  res.render('pages/cmms-healthcare');
});
app.get('/cmms-manufacturing', function(req, res) {
  res.render('pages/cmms-manufacturing');
});
app.get('/cmms-portharbour', function(req, res) {
  res.render('pages/cmms-portharbour');
});
app.get('/cmms-watertreatment', function(req, res) {
  res.render('pages/cmms-watertreatment');
});
app.get('/cmms-energyutility', function(req, res) {
  res.render('pages/cmms-energyutility');
});
app.get('/cmms-fleetmanagement', function(req, res) {
  res.render('pages/cmms-fleetmanagement');
});
app.get('/cmms-foodbeverage', function(req, res) {
  res.render('pages/cmms-foodbeverage');
});

// About Us
app.get('/evantage-aboutus', function(req, res) {
  res.render('pages/evantage-aboutus');
});

// Contact Us
app.get('/evantage-contactus', function(req, res) {
  res.render('pages/evantage-contactus');
});

// Footer
app.get('/Privacy-Policy', function(req, res) {
  res.render('pages/Privacy-Policy');
});
app.get('/Terms-of-service', function(req, res) {
  res.render('pages/Terms-of-service');
});

// Sitemap route
app.get("/sitemap.xml", async (req, res) => {
  res.header("Content-Type", "application/xml");

  const smStream = new SitemapStream({
    hostname: "https://evantage.com.my" // 
  });

  // List all your public pages here
  smStream.write({ url: "/", priority: 1.0 });
  smStream.write({ url: "/evantage-cmms-webcore", priority: 0.9 });
  smStream.write({ url: "/evantage-cmms-mobile-app", priority: 0.9 });
  smStream.write({ url: "/evantage-cmms-webwork", priority: 0.9 });

  smStream.write({ url: "/feature-work-management", priority: 0.8 });
  smStream.write({ url: "/feature-preventive-maintenance", priority: 0.8 });
  smStream.write({ url: "/feature-asset-management", priority: 0.8 });
  smStream.write({ url: "/feature-QRcode-management", priority: 0.8 });
  smStream.write({ url: "/feature-data-analytic", priority: 0.8 });
  smStream.write({ url: "/feature-custom-dashboard", priority: 0.8 });
  smStream.write({ url: "/feature-photo-evidence", priority: 0.8 });
  smStream.write({ url: "/feature-email-notification", priority: 0.8 });
  smStream.write({ url: "/feature-sparepart-management", priority: 0.8 });
  smStream.write({ url: "/feature-procurement-management", priority: 0.8 });
  smStream.write({ url: "/feature-ai-driven", priority: 0.8 });

  smStream.write({ url: "/cmms-facilitymanagement", priority: 0.7 });
  smStream.write({ url: "/cmms-healthcare", priority: 0.7 });
  smStream.write({ url: "/cmms-manufacturing", priority: 0.7 });
  smStream.write({ url: "/cmms-portharbour", priority: 0.7 });
  smStream.write({ url: "/cmms-watertreatment", priority: 0.7 });
  smStream.write({ url: "/cmms-energyutility", priority: 0.7 });
  smStream.write({ url: "/cmms-fleetmanagement", priority: 0.7 });
  smStream.write({ url: "/cmms-foodbeverage", priority: 0.7 });

  smStream.write({ url: "/evantage-aboutus", priority: 0.6 });
  smStream.write({ url: "/evantage-contactus", priority: 0.6 });
  smStream.write({ url: "/Privacy-Policy", priority: 0.5 });
  smStream.write({ url: "/Terms-of-service", priority: 0.5 });

  smStream.end();

  const sitemap = await streamToPromise(smStream);
  res.send(sitemap.toString());
});

// Robots.txt route
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(
`User-agent: *
Disallow: /Counter
Disallow: /api/
Disallow: /internal/

Sitemap: https://evantage.com.my/sitemap.xml`
  );
});


app.listen(8080);
console.log('Server is listening on port 8080');

//middleware
app.use(express.static('/views/pages/'));
app.use(express.json());

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/views/pages/index.ejs')
})

app.post('/',(req,res)=>{
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'mail.evantage.com.my',
    port: 465,
      secure: true, // use SSL
      auth: {
          user: 'no-reply@evantage.com.my',
          pass: 'Evantage#0804'
      }
  });

  const mailOptions = {
    from: req.body.email,
    to: 'sales@evantage.com.my',
    // to: 'izzat@evantage.com.my',
    subject: 'Enquiry from Evantage Web Page',
    html: `
        <strong>Name</strong><br> ${req.body.name}<br><br>
        <strong>Company</strong><br> ${req.body.company}<br><br>
        <strong>Contact Number</strong><br> ${req.body.contactno}<br><br>
        <strong>Message</strong><br>
        ${req.body.message}
    `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Your message has been sent. Thank you!' + info.response);
      res.send('success')
    }
  });

})