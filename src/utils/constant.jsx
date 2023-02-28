import { HiHome, HiKey } from 'react-icons/hi'
import { SiBitcoin } from 'react-icons/si'
export const navLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        icon: HiHome
    },
    {
        id: 2,
        title: 'Coin',
        path: '/coin',
        icon: SiBitcoin
    },
    {
        id: 3,
        title: 'Home',
        path: '/',
        icon: HiHome
    },
    {
        id: 4,
        title: 'Coin',
        path: '/coin',
        icon: SiBitcoin
    },

]

export const footerLinks = [
    {
        id: 1,
        title: 'Support',
        subLinks: [
            {
                id: 1,
                title: 'Help Center',
                link: "/"
            },
            {
                id: 2,
                title: 'Contact Us',
                link: "/"
            },
            {
                id: 3,
                title: 'API Status',
                link: "/"
            },
            {
                id: 4,
                title: 'Documentation',
                link: "/"
            }
        ]
    },
    {
        id: 2,
        title: 'Info',
        subLinks: [
            {
                id: 1,
                title: 'About Us',
                link: "/"
            },
            {
                id: 2,
                title: 'Careers',
                link: "/"
            },
            {
                id: 3,
                title: 'Invest',
                link: "/"
            },
            {
                id: 4,
                title: 'Legal',
                link: "/"
            }
        ]
    }
]