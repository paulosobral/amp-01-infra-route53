import { Route53Client, ListResourceRecordSetsCommand } from "@aws-sdk/client-route-53";
import { expect, describe, beforeAll, it } from '@jest/globals';

// Função auxiliar para verificar a existência de um registro no Route 53
async function recordExists(client: Route53Client, hostedZoneId: string, recordName: string, recordType: string): Promise<boolean> {
  const command = new ListResourceRecordSetsCommand({ HostedZoneId: hostedZoneId });
  const response = await client.send(command);
  return response.ResourceRecordSets?.some(record =>
    record.Name === recordName && record.Type === recordType
  ) ?? false;
}

describe('Route 53 Record Existence Check', () => {
  let client: Route53Client;
  const hostedZoneId = 'asmelhorespousadas.com.br'; // Substitua pelo ID da zona hospedada

  beforeAll(() => {
    // Inicialize o cliente Route53
    client = new Route53Client({ region: 'us-east-1' });
  });

  it('should check if a specific record exists in the hosted zone', async () => {
    
    const recordName = ''; // Substitua pelo nome do registro que você quer verificar (note o ponto no final)
    const recordType = 'MX'; // Substitua pelo tipo de registro que você quer verificar, por exemplo, 'A', 'CNAME', etc.

    const exists = await recordExists(client, hostedZoneId, recordName, recordType);

    // Asserção para verificar se o registro existe
    expect(exists).toBe(true);
  });
});
