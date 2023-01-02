const CONFIG = {
  // profile setting
  profile: {
    name: 'lapis',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: '학생 개발자',
    bio: '대학생 개발자.',
    email: 'lapis0875@gmail.com',
    github: 'lapis0875',
    linkedin: '',
    instagram: '',
  },
  projects: [
    {
      name: 'Python Tutorials',
      href: 'https://github.com/KoreanTutorials/PythonTutorial'
    },
    {
      name: 'SimpleHome (Minecraft JE Paper Plugin)',
      href: 'https://github.com/Lapis0875/SimpleHome'
    },
    {
      name: 'SimpleLock (Minecraft JE Paper Plugin)',
      href: 'https://github.com/Lapis0875/SimpleLock'
    }
  ],
  // blog setting
  blog: {
    title: 'lazuli',
    description: 'welcome to lazuli!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://lazuli-blog.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'Life', 'Dev', 'Programming', 'Food', 'Desert', 'Pictures'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'Lapis0875/lazuli-blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
