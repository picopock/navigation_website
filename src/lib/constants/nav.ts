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
    name: '思源笔记',
    link: 'http://10.0.0.16:6806/',
    externalLink: 'http://10.0.0.16:6806/',
    source: 'siyuanNote.png'
  },
  {
    name: '博客',
    link: 'http://10.0.0.6',
    externalLink: 'http://10.0.0.6',
    source: 'blog.png'
  },
  {
    name: 'Synology',
    link: 'http://10.0.0.5:5000',
    externalLink: 'http://10.0.0.5:5000',
    source: 'synology.png'
  },
  {
    name: '相册',
    link: 'http://10.0.0.5:5080',
    externalLink: 'http://10.0.0.5:5080',
    source: 'album.png'
  },
  {
    name: '文件夹',
    link: 'http://10.0.0.5:7000',
    externalLink: 'http://10.0.0.5:7000',
    source: 'file.png'
  },
  {
    name: 'Jellyfin',
    link: 'http://10.0.0.12',
    externalLink: 'http://10.0.0.12',
    source: 'jellyfin.svg'
  },
  {
    name: 'Surveillance',
    link: 'http://10.0.0.5:9900',
    externalLink: 'http://10.0.0.5:9900',
    source: 'surveillanceStation.png'
  },
  {
    name: 'Nas Tools',
    link: 'http://10.0.0.14',
    externalLink: 'http://10.0.0.14',
    source: 'nasTools.png'
  },
  {
    name: '青龙',
    link: 'http://10.0.0.15:5700',
    externalLink: 'http://10.0.0.15:5700',
    source: 'qinglong.png'
  },
  {
    name: 'qBittorrent',
    link: 'http://10.0.0.11:8085',
    externalLink: 'http://10.0.0.11:8085',
    source: 'qBittorrent.png'
  },
  {
    name: 'Portainer',
    link: 'https://10.0.0.10:9443',
    externalLink: 'https://10.0.0.10:9443',
    source: 'portainer.svg'
  },
  {
    name: 'Jackett',
    link: 'http://10.0.0.13',
    externalLink: 'http://10.0.0.13',
    source: 'jackett.png'
  },
]