import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
  const command = new PutItemCommand({
    TableName: "JobIntelResults",
    Item: {
      JobID : { S: "test-job-001" },
      title: { S: "AWS Cloud Engineer" },
      company: { S: "Test Company" },
      status: { S: "NEW" }
    }
  });

  await client.send(command);

  return {
    statusCode: 200,
    body: JSON.stringify("Job saved to DynamoDB!")
  };
};
