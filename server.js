import express from 'express';
import ps from 'prompt-sync';
import cors from 'cors';

const prompt = ps();
const app = express()
const port = 3000
const DM_APIEndpoint = 'https://1dhykmd78b.execute-api.ap-southeast-2.amazonaws.com/api/v1'
const APIKey = prompt("api key: ")

app.use(cors());

app.get('/test', function(req, res){
  res.send('id: ' + req.query.id);
});

app.get('/api/dashboard/test', (req, res) => {
  res.sendFile('/Users/bwhitely/datameet/react_stuff/datameet_screens/dummyData.json')
})

app.get('/metrics/chart', (req, res) => {
  chart(req.query.config).then(resp => res.send(resp))
})

app.get('/metrics/kpis', (req, res) => {
  kpis(req.query.type).then(resp => res.send(resp))
})


app.get('/metrics/timeseries', (req, res) => {
  const response = timeseries()
  res.send(response)
})

app.listen(port, () => {
    console.log("started server on port " + port);
});

async function chart(chartConfig) {

  let url = `${DM_APIEndpoint}/charts/timeseries?config=${chartConfig}`;

  const responseBody = await fetch ( url, {
    method: "GET",
    headers: {
      "x-api-key": APIKey,
    }
  });

  const data = await responseBody.json();

  return {
    statusCode: 200,
    body: data,
  };
}

async function kpis(kpiType) {

  let url = `${DM_APIEndpoint}/kpis?type=${kpiType}`;

  const responseBody = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": APIKey,
    },
  });

  const data = await responseBody.json();

  return {
    statusCode: 200,
    body: data,
  };
}



export async function timeseries(event) {
  console.log(JSON.stringify(event, null, 2));

  const userId =
    event.requestContext?.authorizer?.iam.cognitoIdentity.identityId ?? "";

  const viewname = event.queryStringParameters?.config ?? "none"; // viewname = database view name in IR33N

  let url = `${DM_APIEndpoint}/reporting/timeseries?viewname=${viewname}`;

  console.log(`url: ${url}`);

  const responseBody = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": APIKey,
      "x-user-id": userId,
    },
  });

  let data = await responseBody.json();

  if (event.queryStringParameters?.log)
    console.log(JSON.stringify(data, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify(data.result),
  };
}
