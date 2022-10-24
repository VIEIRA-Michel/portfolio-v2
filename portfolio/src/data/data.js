import css from '@/assets/icons/icon-css.svg';
import html from '@/assets/icons/icon-html.svg';
import javascript from '@/assets/icons/icon-javascript.svg';
import mongodb from '@/assets/icons/icon-mongodb.svg';
import mysql from '@/assets/icons/icon-mysql.svg';
import node from '@/assets/icons/icon-node.svg';
import react from '@/assets/icons/icon-react.svg';
import redis from '@/assets/icons/icon-redis.svg';
import sass from '@/assets/icons/icon-sass.svg';
import socketio from '@/assets/icons/icon-socketio.svg';
import vue from '@/assets/icons/icon-vuejs.svg';
import booki from '@/assets/images/booki.png';
import ohmyfood from '@/assets/images/ohmyfood.png';
import hootakes from '@/assets/images/hottakes.png';

export const data = [
    {
        id: 1,
        title: 'Booki',
        techno: "HTML, CSS",
        picture: booki,
        background: 'background: rgb(214, 230, 255)',
        url: "https://vieira-michel.github.io/projet-2-oc/",
        techno: [
            {
                id: 1,
                name: "HTML",
                picture: html,
            },
            {
                id: 2,
                name: "CSS",
                picture: css,
            }
        ]
    },
    {
        id: 2,
        title: 'Ohmyfood',
        techno: "HTML, CSS, Javascript",
        picture: ohmyfood,
        background: 'background: rgb(255, 214, 244)',
        url: "https://vieira-michel.github.io/projet-3-oc/",
        techno: [
            {
                id: 1,
                name: "HTML",
                picture: html,
            },
            {
                id: 2,
                name: "CSS",
                picture: css,
            },
            {
                id: 3,
                name: "Javascript",
                picture: javascript,
            }
        ]

    },
    {
        id: 3,
        title: 'Hot Takes',
        techno: "Javascript, NodeJS, MongoDB",
        background: 'background: rgb(217, 217, 217)',
        picture: hootakes,
        url: "https://github.com/VIEIRA-Michel/projet-6-oc",
        techno: [
            {
                id: 1,
                name: "Javascript",
                picture: javascript,
            },
            {
                id: 2,
                name: "NodeJS",
                picture: node,
            },
            {
                id: 3,
                name: "MongoDB",
                picture: mongodb,
            }
        ]
    },
    {
        id: 4,
        title: 'Dev-Dojo',
        techno: "Sass, React",
        url: "https://dev-dojo.netlify.app/",
        techno: [
            {
                id: 1,
                name: "Sass",
                picture: sass,
            },
            {
                id: 2,
                name: "React",
                picture: react,
            }
        ]
    },
    {
        id: 5,
        title: 'Groupomania',
        techno: "Sass, VueJS, NodeJS, MySQL, Redis, Socket.io",
        url: "https://github.com/VIEIRA-Michel/projet-7-oc",
        techno: [
            {
                id: 1,
                name: "Sass",
                picture: sass,
            },
            {
                id: 2,
                name: "VueJS",
                picture: vue,
            },
            {
                id: 3,
                name: "NodeJS",
                picture: node,
            },
            {
                id: 4,
                name: "MySQL",
                picture: mysql,
            },
            {
                id: 5,
                name: "Redis",
                picture: redis,
            },
            {
                id: 6,
                name: "Socket.io",
                picture: socketio,
                style: 'padding-left: 7px'
            }
        ]
    }
]