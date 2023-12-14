//Package Dependencies
const express = require('express');
const app = express();

//app dependencies
//const routes = require('./routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('/', (req, res) =>{
  const placeholderResponse = {
    "orderNumber": "RHAUL5R",
    "status": "CONFIRMED",
    "supplierName": "Sydney whale watching",
    "supplierAlias": "sydneywhalewatching",
    "resellerName": "Rezdy Agent",
    "resellerAlias": "rezdyagent",
    "resellerUser": {
      "firstName": "Sales",
      "lastName": "Person",
      "email": "sales1@test.com"
    },
    "customer": {
      "firstName": "Dusan",
      "lastName": "Zahoransky",
      "name": "Dusan Zahoransky"
    },
    "items": [
      {
        "productName": "Morning whale watching cruise",
        "productCode": "P12345",
        "externalProductCode": "MWWCRUISE",
        "startTime": "2016-10-02T13:00:00Z",
        "endTime": "2016-10-03T13:00:00Z",
        "startTimeLocal": "2016-10-03 00:00:00",
        "endTimeLocal": "2016-10-04 00:00:00",
        "quantities": [
          {
            "optionLabel": "Adult",
            "optionPrice": 75,
            "value": 1
          },
          {
            "optionLabel": "Child under 12",
            "optionPrice": 55,
            "value": 1
          }
        ],
        "totalQuantity": 2,
        "amount": 130,
        "extras": [
          {
            "name": "Hot breakfast",
            "price": 10,
            "extraPriceType": "QUANTITY",
            "quantity": 2
          }
        ],
        "participants": [
          {
            "fields": [
              {
                "label": "First Name",
                "value": "Dusan",
                "requiredPerParticipant": false,
                "requiredPerBooking": false
              },
              {
                "label": "Last Name",
                "value": "Zahoransky",
                "requiredPerParticipant": false,
                "requiredPerBooking": false
              }
            ]
          }
        ],
        "subtotal": 150,
        "pickupLocation": {
          "locationName": "Town hall Train Station",
          "address": "Town Hall Train Station, Sydney, New South Wales, Australia",
          "pickupTime": "2016-10-02 23:45:00",
          "pickupInstructions": "Meet outside the station\r\nPlease be at this location 15 minutes before pick up"
        }
      }
    ],
    "totalAmount": 150,
    "totalCurrency": "AUD",
    "totalPaid": 150,
    "totalDue": 0,
    "dateCreated": "2016-09-28T06:40:03Z",
    "dateConfirmed": "2016-09-28T06:40:03Z",
    "datePaid": "2016-09-28T06:40:05Z",
    "dateReconciled": "2016-09-28T06:40:03Z",
    "comments": "",
    "internalNotes": "",
    "payments": [
      {
        "type": "CREDITCARD",
        "amount": 150,
        "currency": "AUD",
        "date": "2016-09-28T06:40:05Z",
        "label": "Payment proceed at agent side"
      }
    ],
    "fields": [],
    "source": "MARKETPLACE_PREF_RATE",
    "resellerSource": "INTERNAL",
    "sourceChannel": "rezdyagent",
    "resellerComments": "",
    "commission": 11.25,
    "paymentOption": "CREDITCARD",
    "resellerReference": "ABC123"
  }
  const response = placeholderResponse;
  return res.status(200).send(response);
});

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));