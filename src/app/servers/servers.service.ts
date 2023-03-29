export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      region: 'Mombasa',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      region: 'Kisumu',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      region: 'Nairobi',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, region: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.region = serverInfo.region;
      server.status = serverInfo.status;

    }
  }
}
