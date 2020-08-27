document.getElementById('form-newappln').addEventListener('submit', evaluateAppln);

function evaluateAppln(e) {
    console.log("asdadadad");

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const marital = document.getElementById("marital").value;
    const dependents = document.getElementById("dependents").value;
    const education = document.getElementById("education").value;
    const appincome = document.getElementById("appincome").value;
    const coappincome = document.getElementById("coappincome").value;
    const loanamt = document.getElementById("loanamt").value;
    const term = document.getElementById("term").value;
    const credhist = document.getElementById("credhist").value;
    const proparea = document.getElementById("proparea").value;

    var xmlreq = new XMLHttpRequest();
    xmlreq.open("GET", "https://iam.bluemix.net/oidc/token", true)
    xmlreq.send();
    console.log(xmlreq.responseText);

    // Paste your Watson Machine Learning service apikey here
    var apikey = "v9N93JWDetmZ1y7CP1Qp3UsQiQGpdCj00p6-KCFC9D79";

    // Use this code as written to get an access token from IBM Cloud REST API
    var IBM_Cloud_IAM_uid = btoa("homeathon3");
    var IBM_Cloud_IAM_pwd = btoa("nasHomeathon1");

    var options = {url     : "https://iam.bluemix.net/oidc/token",
                   headers : { "Content-Type"  : "application/x-www-form-urlencoded","Authorization" : "Basic " + IBM_Cloud_IAM_uid + ":" + IBM_Cloud_IAM_pwd},
                   body    : "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey" };

    xmlreq.open( options, function( error, response, body )
    {
        var iam_token = JSON.parse( body )["access_token"];
        console.log(iam_token);
    } );

    /*

    const btoa = require("btoa");
    const wml_credentials = new Map();

    // NOTE: generate iam_token based on provided documentation
    const wmlToken = "Bearer " + iam_token;

    // NOTE: retrieve ml_instance_id based on provided documentation
    const mlInstanceId = ml_instance_id;

    // NOTE: manually define and pass the array(s) of values to be scored in the next line
    const payload = '{"input_data": [{"fields": ["Loan Application#", " Gender", "Married", "Dependents", "Education", "Self_Employed", "Applicant Income", "Co Applicant Income", "Loan Amount", "Loan amount term", "Credit_history", "Property Area", "Loan_apply_date", "Loan_decision_date"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
    const scoring_url = "https://eu-gb.ml.cloud.ibm.com/v4/deployments/86144166-b14c-4569-9664-10c24401ea14/predictions";

    apiPost(scoring_url, wmlToken, mlInstanceId, payload, function (resp) {
        let parsedPostResponse;
        try {
            parsedPostResponse = JSON.parse(this.responseText);
        } catch (ex) {
            // TODO: handle parsing exception
        }
        console.log("Scoring response");
        console.log(parsedPostResponse);
    }, function (error) {
        console.log(error);
    });
*/

    e.preventDefault();
}

function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", loadCallback);
    oReq.addEventListener("error", errorCallback);
    oReq.open("POST", scoring_url);
    oReq.setRequestHeader("Accept", "application/json");
    oReq.setRequestHeader("Authorization", token);
    oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(payload);
}