import { defineConfig } from 'vitepress'

const icon_npm = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="540px" height="210px" viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/></svg>'

export default defineConfig({
    title: 'datenow-ts',
    description: 'Working with dates in JS and TS',
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'datenow-ts',
        nav: nav(),
        socialLinks: sociallinks(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/leamoser/datenow-ts-documentation/edit/main/docs/:path',
            text: 'Edit this Page on GitHub'
        },
    }
})

function nav() {
    return [
        { text: 'Getting Started', link: '/getting-started/installation' },
        {
            text: 'Function Groups',
            items: [
                { text: '✍️ create', link: '/functions/create' },
                { text: '🤲 get', link: '/functions/get' },
                { text: '🎭 modify', link: '/functions/modify' },
                { text: '🎰 format', link: '/functions/format' },
                { text: '👵 until', link: '/functions/until' },
                { text: '🪢 span', link: '/functions/span' },
                { text: '👯 compare', link: '/functions/compare' },
            ]
        },
        { text: 'About', link: '/about' },
    ]
}
function sidebar() {
    return [
        {
            text: 'Getting Started',
            collapsed: false,
            items: [
                { text: 'Installation', link: '/getting-started/installation' },
                { text: 'What you can do', link: '/getting-started/usecases' }
            ]
        },
        {
            text: 'Function Groups',
            collapsed: false,
            items: [
                {
                    text: '✍️ create',
                    link: '/functions/create',
                    collapsed: true,
                    items: [
                        { text: 'dateNow()', link: '/functions/create#datenow' },
                        { text: 'dateByParams()', link: '/functions/create#datebyparams' },
                        { text: 'dateByMilliseconds()', link: '/functions/create#datebymilliseconds' },
                        { text: 'dateByDatestring()', link: '/functions/create#datebydatestring' }
                    ]
                },
                {
                    text: '🤲 get',
                    link: '/functions/get',
                    collapsed: true,
                    items: [
                        { text: 'year()', link: 'functions/get#year' },
                        { text: 'yearObject()', link: 'functions/get#yearobject' },
                        { text: 'monthIndex()', link: 'functions/get#monthindex' },
                        { text: 'monthObject()', link: 'functions/get#monthobject' },
                        { text: 'day()', link: 'functions/get#day' },
                        { text: 'dayObject()', link: 'functions/get#dayobject' },
                        { text: 'weekdayIndex()', link: 'functions/get#weekdayindex' },
                        { text: 'weekdayObject()', link: 'functions/get#weekdayobject' },
                        { text: 'calendarWeek()', link: 'functions/get#calendarweek' },
                        { text: 'hour()', link: 'functions/get#hour' },
                        { text: 'minute()', link: 'functions/get#minute' },
                        { text: 'second()', link: 'functions/get#second' },
                        { text: 'millisecond()', link: 'functions/get#millisecond' },
                        { text: 'calendarizedMonth()', link: 'functions/get#calendarizedmonth' }
                    ]
                },
                {
                    text: '🎭 modify',
                    link: '/functions/modify',
                    collapsed: true,
                    items: [
                        { text: 'add()', link: '/functions/modify#add' },
                        { text: 'subtract()', link: '/functions/modify#subtract' },
                        { text: 'changeTo()', link: '/functions/modify#changeto' }
                    ],

                },
                { text: '🎰 format', link: '/functions/format' },
                { text: '👵 until', link: '/functions/until' },
                { text: '🪢 span', link: '/functions/span' },
                { text: '👯 compare', link: '/functions/compare' }
            ]
        },
        {
            text: 'Translations',
            collapsed: false,
            items: [
                { text: 'Languages', link: '/translations/languages' }
            ]
        },
    ]
}
function sociallinks() {
    return [
        { icon: 'github', link: 'https://github.com/leamoser/datenow-ts' },
        { icon: { svg: icon_npm }, link: 'https://www.npmjs.com/package/datenow-ts' }
    ]
}

