export default {
    title: 'VitePress',
    description: 'Just playing around.',
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Datenow-ts',
        nav: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Changelog', link: 'https://github.com/' }
        ],
        sidebar: [
            {
                text: 'Guide',
                collapsed: false,
                items: [
                    { text: 'Home', link: '/index' },
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            }
        ]
    },
}
