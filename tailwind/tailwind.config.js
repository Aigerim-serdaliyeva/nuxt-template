/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const variants = require('./variants');
const plugins = require('./plugins');
const fonts = require('./fonts');

module.exports = {
    theme: {
        ...fonts,
        container: {
            center: true,
            padding: '15px'
        },
        opacity: {
            '30': '.3'
        },
        lineHeight: {
            '87%': '87%'
        },
        inset: {
            '17px': '17px',
            '22px': '22px',
            '1/1': '100%',
            '1/2': '50%',
            '1/3': '33,33%'
        },
        extend: {
            colors: {
                '252525': '#252525',
                '4D4D4D': '#4D4D4D',
                'gray-1': '#AFAFAF',
                'accent-color': '#EAF4F6',
                'gray-color': '#656565',
                'text-color': '#092B54',
                'blue-back': '#00305B',
                'footer-back': '#345879',
                'aqua-back': '#eaf4f6',
                '00305B': '#00305B',
                'form-back': '#eff6f8',
                '3D3D3D': '#3D3D3D',
                '3ca6cd': '#3ca6cd',
                'main-yellow': '#FFDC0A'
            },
            fontSize: {
                '94px': '94px',
                '80px': '80px',
                '70px': '70px',
                '65px': '65px',
                '60px': '60px',
                '40px': '40px',
                '36px': '36px',
                '30px': '30px',
                '24px': '24px',
                '22px': '22px',
                '20px': '20px',
                '18px': '18px',
                '16px': '16px',
                '14px': '14px',
                '12px': '12px'
            },
            spacing: {
                '1400px': '1400px',
                '870px': '870px',
                '400px': '400px',
                '450px': '450px',
                '300px': '300px',
                '170px': '170px',
                '87px': '87px',
                '80px': '80px',
                '70px': '70px',
                '60px': '60px',
                '50px': '50px',
                '40px': '40px',
                '30px': '30px',
                '25px': '25px',
                '20px': '20px',
                '16px': '16px',
                '15px': '15px',
                '14px': '14px',
                '10px': '10px',
                '5px': '5px',
                '30%': '30%',
                '33%': '33%',
                '12%': '12%'
            },
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
                '1/9': '11.1111111%',
                '2/9': '22.2222222%',
                '3/9': '33.3333333%',
                '4/9': '44.4444444%',
                '5/9': '55.5555555%',
                '6/9': '66.6666666%',
                '7/9': '77.7777777%',
                '8/9': '88.8888888%'
            },
            maxWidth: {
                '1400px': '1400px',
                '1280px': '1280px',
                '1140px': '1140px',
                '1089px': '1089px',
                '1070px': '1070px',
                '890px': '890px',
                '750px': '750px',
                '620px': '620px',
                '550px': '550px',
                '493px': '493px',
                '450px': '450px',
                '332px': '332px',
                '316px': '316px',
                '215px': '215px',
                '170px': '170px',
                '150px': '150px',
                '140px': '140px',
                '100px': '100px'
            },
            screens: {
                '2xl': '1360px',
                '3xl': '1460px'
            }
        }
    },
    variants,
    plugins
};
