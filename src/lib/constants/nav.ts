export interface INavItem {
  name: string;
  link: string;
  externalLink: string;
  source: string;
}

export const navItems: INavItem[] = [
  {
    name: 'RouterOS',
    link: 'http://10.0.0.1',
    externalLink: 'http://10.0.0.1',
    source: 'routerOS.png'
  },
  {
    name: 'OpenWRT',
    link: 'http://10.0.0.2',
    externalLink: 'http://10.0.0.2',
    source: 'openWRT.png'
  },
  {
    name: 'Esxi',
    link: 'http://10.0.0.3',
    externalLink: 'http://10.0.0.3',
    source: 'esxi.png'
  },
  {
    name: 'K2P',
    link: 'http://10.0.0.4',
    externalLink: 'http://10.0.0.4',
    source: 'phicomm.png'
  },
  {
    name: 'Home Assistant',
    link: 'http://10.0.0.5',
    externalLink: 'http://10.0.0.5',
    source: 'homeAssistant.svg'
  },
  {
    name: '博客',
    link: 'http://10.0.0.5:8001',
    externalLink: 'http://10.0.0.5:8001',
    source: 'blog.png'
  },
  {
    name: 'Synology',
    link: 'http://10.0.0.5:8002',
    externalLink: 'http://10.0.0.5:8002',
    source: 'synology.png'
  },
  {
    name: '相册',
    link: 'http://10.0.0.5:8003',
    externalLink: 'http://10.0.0.5:8003',
    source: 'album.png'
  },
  {
    name: '文件夹',
    link: 'http://10.0.0.5:8004',
    externalLink: 'http://10.0.0.5:8004',
    source: 'file.png'
  },
  {
    name: 'Jellyfin',
    link: 'http://10.0.0.5:8005',
    externalLink: 'http://10.0.0.5:8005',
    source: 'jellyfin.svg'
  },
  {
    name: 'Surveillance',
    link: 'http://10.0.0.5:8006',
    externalLink: 'http://10.0.0.5:8006',
    source: 'surveillanceStation.png'
  },
  {
    name: '青龙',
    link: 'http://10.0.0.5:8007',
    externalLink: 'http://10.0.0.5:8007',
    source: 'qinglong.png'
  },
  {
    name: 'qBittorrent',
    link: 'http://10.0.0.5:8008',
    externalLink: 'http://10.0.0.5:8008',
    source: 'qBittorrent.png'
  },
  {
    name: 'Portainer',
    link: 'http://10.0.0.5:8009',
    externalLink: 'http://10.0.0.5:8009',
    source: 'portainer.svg'
  },
]