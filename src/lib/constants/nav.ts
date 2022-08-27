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
    link: 'http://10.0.0.6',
    externalLink: 'http://10.0.0.6',
    source: 'blog.png'
  },
  {
    name: 'Synology',
    link: 'http://10.0.0.6:6000',
    externalLink: 'http://10.0.0.6:6000',
    source: 'synology.png'
  },
  {
    name: '相册',
    link: 'http://10.0.0.6:6001',
    externalLink: 'http://10.0.0.6:6001',
    source: 'album.png'
  },
  {
    name: '文件夹',
    link: 'http://10.0.0.6:6002',
    externalLink: 'http://10.0.0.6:6002',
    source: 'file.png'
  },
  {
    name: 'Jellyfin',
    link: 'http://10.0.0.6:6003',
    externalLink: 'http://10.0.0.6:6003',
    source: 'jellyfin.svg'
  },
  {
    name: 'Surveillance',
    link: 'http://10.0.0.6:6004',
    externalLink: 'http://10.0.0.6:6004',
    source: 'surveillanceStation.png'
  },
  {
    name: '青龙',
    link: 'http://10.0.0.6:6005',
    externalLink: 'http://10.0.0.6:6005',
    source: 'qinglong.png'
  },
  {
    name: 'qBittorrent',
    link: 'http://10.0.0.6:6006',
    externalLink: 'http://10.0.0.6:6006',
    source: 'qBittorrent.png'
  },
  {
    name: 'Portainer',
    link: 'https://10.0.0.6:6006',
    externalLink: 'https://10.0.0.6:6006',
    source: 'portainer.svg'
  },
]