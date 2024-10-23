import type { Site, Menu } from '@types'

const SITE: Site = {
  website: 'https://gaoqio.com',
  favicon: '/favicon.svg',
  author: 'gaoqio',
  title: 'gaoqio',
}

const MENUS: Menu[] = [
  { name: '首页', url: '/' },
  {
    name: '文章',
    children: [
      { name: '全部', url: '/posts' },
      { name: '分类', url: '/categories' },
      { name: '标签', url: '/tags' },
    ],
  },
  { name: '专题', url: '/series' },
  { name: '朋友', url: '/friends' },
]

export { SITE, MENUS }
