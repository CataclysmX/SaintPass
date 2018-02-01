var request = require('request');
var figlet = require('figlet');


i = 0;
function execute(){
  //code to execute
  request('https://wrapapi.com/use/CataclysmX/check/test/0.0.1?wrapAPIKey=PGjrMdMfucZIFtxuus7ogmCpxdWHBXmR', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    var str = body;
    var regex = /":{\s*(.*?)\s*}/g;

    test = regex.exec(str);
    test2 = '{' + test[1] + '}';
    //alert(test2);

    //document.body.innerHTML = '<pre>' + test2 + '</pre>';


    myJSON = test2;
    var myObj = JSON.parse(myJSON);
    //document.getElementById("demo").innerHTML = myObj.Title[0];

    body = myObj.Title;
    var bodyOri = "";
    var Num;
    for (Num in myObj.Title[Num])
    {
      bodyOri += myObj.Title[Num] +"\n";
    }
    /*var regex = /{"T\s*(.*?)\s*}/g;
    body123 = regex.exec(body);*/
    //console.log("\n"+body);
    console.log("\n");
    if (typeof body2 !== 'undefined')
    {
        //if Defined :

      if(body2 == bodyOri)
      {
          console.log('No New : ' + i++ );
          //console.log(body2 + "  ==  " +body);
          //console.log("\n\n\n\n" + body2);
      }
      else
      {
          console.log('New ! ');

              request('https://smsapi.free-mobile.fr/sendmsg?user=30308139&pass=2gSF3Y1T26XwO4&msg=Vite+%21+%0D%0AWallah+y+a+du+Nouveau+%21%0D%0A%0A%0A%0Ahttps%3A%2F%2Fwww.saintepass.fr%2Foffres-a-saisir%3Fpage%3D1', function (error, response, bodyRep) {
                //console.log('error:', error); // Print the error if one occurred
                //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                /*console.log(bodyRep);*/});
          i = 0;
          body2 = bodyOri;
          bodyOri = "";
          console.log(body2);
      }
    }
    else
    {
      body2 = bodyOri;
      //body2 = "Paris"
      //console.log("Not Defined");
      console.log(figlet.textSync('Starting ...', {
          font: 'Bloody',
          horizontalLayout: 'default',
          verticalLayout: 'default'
      }));
      console.log("\n"+ body2 + "\n ");
    }


  });
  //process.stdout.write('\033c');
}

//setInterval(execute,2000);
setInterval(execute,60000);

