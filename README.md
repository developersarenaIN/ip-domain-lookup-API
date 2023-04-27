<h3>IP and Domain Lookup using AWS Lambda API</h3> project is a serverless application that allows users to query information about IP addresses and domains. The application is built using Node.js and the Axios library, and it uses the ipapi.com API to perform the queries.

To use this code in AWS Lambda, follow these steps:

Clone the project from the Github repository.
Install Node.js and NPM on your computer, if you haven't already.
Open a terminal or command prompt and navigate to the project directory.
Run the command npm install to install the required dependencies.
Create an AWS account and set up an IAM user with the Lambda execution role and permissions.
Create a new Lambda function in the AWS Management Console, and choose "Author from scratch" as the blueprint.
Choose "Node.js 14.x" as the runtime and configure the function's basic settings (e.g., name, description, timeout).
In the "Function code" section, copy and paste the contents of the index.js file from the project into the code editor.
Click on "Save" to save the Lambda function configuration.
Test the Lambda function by creating a new test event and providing a JSON object with the queryStringParameters property containing an ip property (e.g., {"queryStringParameters": {"ip": "8.8.8.8"}}).
Invoke the Lambda function to get the IP and domain lookup information.
To create an API for this Lambda function, follow these additional steps:

In the AWS Management Console, go to the API Gateway service and create a new API.
Choose "REST API" as the type and "New API" as the API name.
Create a new resource and method (e.g., GET) for the IP lookup endpoint.
Configure the method integration to use the Lambda function you created earlier.
Deploy the API to a new or existing stage.

Test the API by sending a GET request to the IP lookup endpoint with the ip query parameter (e.g., https://<API ID>.execute-api.<AWS Region>.amazonaws.com/<stage>/iplookup?ip=8.8.8.8).

one more thing for example this is my base url "https://ipapi.com/ip_api.php?ip=" when ever api is dead replace with other api which offer free services there are many sites in internet just find and use. 


npm install axios export

TEST WITHOUT IP 
https://pmn9sul7y5.execute-api.ap-south-1.amazonaws.com/default/ir?ip=

TEST WITHIP
https://pmn9sul7y5.execute-api.ap-south-1.amazonaws.com/default/ir?ip=your_ip
