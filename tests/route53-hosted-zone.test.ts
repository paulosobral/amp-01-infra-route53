import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53";

// Função auxiliar para verificar a existência de uma zona hospedada
async function hostedZoneExists(client: Route53Client, zoneName: string): Promise<boolean> {
  const command = new ListHostedZonesCommand({});
  const response = await client.send(command);
  return response.HostedZones?.some(zone => zone.Name === zoneName) ?? false;
}

describe('Route 53 Hosted Zone Existence Check', () => {
  let client: Route53Client;

  beforeAll(() => {
    // Inicialize o cliente Route53
    client = new Route53Client({ region: 'us-east-1' });
  });

  it('should check if a hosted zone exists', async () => {
    const zoneName = 'asmelhorespousadas.com.br'; // Substitua pelo nome da zona hospedada que você quer verificar

    const exists = await hostedZoneExists(client, zoneName);

    // Asserção para verificar se a zona hospedada existe
    expect(exists).toBe(true);
  });
});