import { HiHome } from 'react-icons/hi'
import { SiBitcoin } from 'react-icons/si'
import { MdAllInclusive, MdQueryStats } from 'react-icons/md'
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
        path: '/',
        icon: SiBitcoin
    },
    {
        id: 3,
        title: 'Exchanges',
        path: '/',
        icon: MdQueryStats
    },
    {
        id: 4,
        title: 'NTF',
        path: '/',
        icon: MdAllInclusive
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