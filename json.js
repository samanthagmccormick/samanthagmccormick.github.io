// using localhost orgId and widget
// var localhostUrl = 'https://127.0.0.1:8888/api/v2/5629499534213120/logs?start=2018-01-01&end=2018-01-04';

// $.ajax({
//   // beforeSend: function(xhrObj) {
//   //   xhrObj.setRequestHeader("Content-Type", "application/json");
//   //   xhrObj.setRequestHeader("Accept", "application/json");
//   //   xhrObj.setRequestHeader('Access-Control-Allow-Origin', '*');
//   //   xhrObj.setRequestHeader("x-api-key", "3d73692b1b019ea1fc18c0c5c703093d");
//   // },
//   headers: {
//     "x-api-key": "3d73692b1b019ea1fc18c0c5c703093d"
//   },
//   dataType: "json",
//   contentType: "application/json; charset=utf-8",
//   url: localhostUrl,
//   method: "GET",
//   crossDomain: true,
//   success: function(data) {
//     console.log(data);
//     var count = 0;
//     for (i in data.cases) {
//       count++;
//     }
//     console.log("count of cases: " + count);
//   },
//   error: function(jqXHR, textStatus, errorThrown) {
//     console.log("error: " + errorThrown);
//   }
// });

// $.getJSON("jsonobject.json", function(data, textStatus, jqXHR) {
//   var count = 0;
//   $.each(data.cases, function(i) {

//     count++;
//     // Print dates
//     console.log(moment(data.cases[i].created_at_date)._d);

//     // Print users
//     console.log(data.cases[i].requested_by);

//     // Print case id
//     console.log(data.cases[i].id);

//   });
//   console.log("count: " + count);
// });
