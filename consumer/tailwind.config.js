const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/popup/popup.html'],
  theme: {
    extend: {
      backgroundImage: {
        none: 'none',
        'gradient-white':
          'linear-gradient(112.84deg, #FFFFFF 0.33%, #EDF5F2 100%)',
        'gradient-indigo':
          'linear-gradient(98.24deg, #5D75F3 0%, #A279F9 100%)',
        'gradient-fuchsia':
          'linear-gradient(112.84deg, #46BAEB 0.33%, #AF2CFF 38.23%, #F790AF 65.22%, #C1ABFF 100%)',
        'gradient-blue-2':
          'linear-gradient(90.41deg, #E0E7FF 0.25%, rgba(224, 231, 255, 0) 99.64%)',
        'gradient-orange':
          'linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%)',
        'gradient-purple-2':
          'linear-gradient(98.24deg, #F39682 0.01%, #7446F7 100%)',
        'gradient-black-2':
          'linear-gradient(133.11deg, #18181B 0%, #2E2E33 100%)',
        'gradient-orange-2':
          'linear-gradient(98.24deg, #EC5353 0%, #FFB36D 100%)',
        'gradient-blue': 'linear-gradient(98.24deg, #56C1E3 0%, #5B6AF0 100%)',
        'gradient-purple':
          'linear-gradient(98.24deg, #6C2DD1 0%, #FF7DBC 100%)',
        'gradient-violet-2':
          'linear-gradient(98.24deg, #FF9483 0%, #FFCBA4 0.01%, #8479F9 100%)',
        'gradient-cyan':
          'linear-gradient(90deg, rgba(108,213,246,1) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)',
        'gradient-cyan-2':
          'linear-gradient(98.24deg, #6CD5F7 0%, #FEE2CE 35.94%, #B0A9DF 69.27%, #5B6AF0 100%)',
        'gradient-black':
          'linear-gradient(98.24deg, #212121 0.01%, #1D1D1D 100%)',
        'gradient-red': 'linear-gradient(98.24deg, #FF9483 0%, #F17980 100%)',
        'gradient-green': 'linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)',
        'gradient-violet':
          'linear-gradient(98.24deg, #E0AEF8 1.56%, #3168F5 100%)',
        'gradient-pink':
          'linear-gradient(98.24deg, #FAF5F4 0%, #F4E3E4 55.95%, #F0D5D7 100%)',
        'gradient-pink-2':
          'linear-gradient(112.84deg, #FFFFFF 0.33%, #EEDFEF 100%)',
        'gradient-gray':
          'linear-gradient(125.68deg, #F4F4F5 0.59%, #FBFBFB 100%)',
        'gradient-gray-2':
          'linear-gradient(98.24deg, #FFFFFF 0%, #F9F9FF 47.4%, #EBECF7 100%)',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr':
          'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br':
          'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl':
          'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl':
          'linear-gradient(to top left, var(--tw-gradient-stops))',
        'warm-flame':
          'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        'night-fade': 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        'spring-warmth':
          'linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%)',
        'juicy-peach': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
        'young-passion':
          'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
        'lady-lips':
          'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        'sunny-morning': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'rainy-ashville': 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
        'frozen-dreams':
          'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
        'winter-neva': 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'dusty-grass': 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
        'tempting-azure': 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        'heavy-rain': 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        'amy-crisp': 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
        'mean-fruit': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
        'deep-blue': 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
        'ripe-malinka': 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        'cloudy-knoxville': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        'malibu-beach': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        'new-life': 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
        'true-sunset': 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
        'morpheus-den': 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
        'rare-wind': 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        'near-moon': 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
        'wild-apple': 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
        'saint-petersburg': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'arielles-smile':
          'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
        'plum-plate': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'everlasting-sky': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
        'happy-fisher': 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
        blessing: 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
        'sharpeye-eagle': 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
        'ladoga-bottom': 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
        'lemon-gate': 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
        'itmeo-branding': 'linear-gradient(180deg, #2af598 0%, #009efd 100%)',
        'zeus-miracle': 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)',
        'old-hat':
          'linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)',
        'star-wine':
          'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
        'happy-acid': 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)',
        'awesome-pine': 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)',
        'new-york': 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
        'shy-rainbow':
          'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
        'mixed-hopes': 'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)',
        'fly-high': 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
        'strong-bliss':
          'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
        'fresh-milk': 'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
        'snow-again': 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
        'february-ink': 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
        'kind-steel': 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)',
        'soft-grass': 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        'grown-early': 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        'sharp-blues': 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)',
        'shady-water': 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)',
        'dirty-beauty': 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)',
        'great-whale': 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)',
        'teen-notebook': 'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
        'polite-rumors':
          'linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)',
        'sweet-period':
          'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
        'wide-matrix':
          'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
        'soft-cherish':
          'linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)',
        'red-salvation': 'linear-gradient(to top, #f43b47 0%, #453a94 100%)',
        'burning-spring':
          'linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)',
        'night-party': 'linear-gradient(to top, #0250c5 0%, #d43f8d 100%)',
        'sky-glider': 'linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)',
        'heaven-peach': 'linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)',
        'purple-division': 'linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)',
        'aqua-splash': 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
        'above-clouds':
          'linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)',
        'spiky-naga':
          'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)',
        'love-kiss': 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
        'clean-mirror': 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
        'premium-dark': 'linear-gradient(to right, #434343 0%, black 100%)',
        'cold-evening':
          'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
        'cochiti-lake': 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
        'summer-games': 'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
        'passionate-bed': 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)',
        'mountain-rock': 'linear-gradient(to right, #868f96 0%, #596164 100%)',
        'desert-hump': 'linear-gradient(to top, #c79081 0%, #dfa579 100%)',
        'jungle-day': 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)',
        'phoenix-start': 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
        'october-silence': 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)',
        'faraway-river': 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)',
        'alchemist-lab': 'linear-gradient(-20deg, #d558c8 0%, #24d292 100%)',
        'over-sun': 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
        'premium-white':
          'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
        'mars-party': 'linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)',
        'eternal-constance':
          'linear-gradient(to top, #09203f 0%, #537895 100%)',
        'japan-blush':
          'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
        'smiling-rain': 'linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%)',
        'cloudy-apple':
          'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
        'big-mango': 'linear-gradient(to top, #c71d6f 0%, #d09693 100%)',
        'healthy-water': 'linear-gradient(60deg, #96deda 0%, #50c9c3 100%)',
        'amour-amour': 'linear-gradient(to top, #f77062 0%, #fe5196 100%)',
        'risky-concrete':
          'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
        'strong-stick': 'linear-gradient(to right, #a8caba 0%, #5d4157 100%)',
        'vicious-stance': 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        'palo-alto': 'linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)',
        'happy-memories': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
        'midnight-bloom': 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        crystalline: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
        'party-bliss': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'confident-cloud':
          'linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',
        'le-cocktail': 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)',
        'river-city': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'frozen-berry': 'linear-gradient(to top, #e8198b 0%, #c7eafd 100%)',
        elegance:
          'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)',
        'child-care': 'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)',
        'flying-lemon': 'linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)',
        'new-retrowave':
          'linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
        'hidden-jaguar': 'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',
        'above-the-sky':
          'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        nega: 'linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)',
        'dense-water':
          'linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)',

        seashore: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
        'marble-wall':
          'linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)',
        'cheerful-caramel': 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)',
        'night-sky':
          'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'magic-lake':
          'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
        'young-grass': 'linear-gradient(to top, #9be15d 0%, #00e3ae 100%)',
        'colorful-peach': 'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
        'gentle-care': 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)',
        'plum-bath': 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
        'happy-unicorn': 'linear-gradient(to top, #b3ffab 0%, #12fff7 100%)',
        'african-field':
          'linear-gradient(to top, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%, #b7ddb7 75%, #fef381 100%)',
        'solid-stone': 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
        'orange-juice': 'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)',
        'glass-water': 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
        'north-miracle': 'linear-gradient(to right, #00dbde 0%, #fc00ff 100%)',
        'fruit-blend': 'linear-gradient(to right, #f9d423 0%, #ff4e50 100%)',
        'millennium-pine': 'linear-gradient(to top, #50cc7f 0%, #f5d100 100%)',
        'high-flight': 'linear-gradient(to right, #0acffe 0%, #495aff 100%)',
        'mole-hall': 'linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)',
        'space-shift':
          'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)',
        'forest-inei': 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)',
        'royal-garden': 'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
        'rich-metal': 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)',
        'juicy-cake': 'linear-gradient(to top, #e14fad 0%, #f9d423 100%)',
        'smart-indigo': 'linear-gradient(to top, #b224ef 0%, #7579ff 100%)',
        'sand-strike':
          'linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)',
        'norse-beauty': 'linear-gradient(to right, #ec77ab 0%, #7873f5 100%)',
        'aqua-guidance': 'linear-gradient(to top, #007adf 0%, #00ecbc 100%)',
        'sun-veggie': 'linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)',
        'sea-lord':
          'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
        'black-sea':
          'linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)',
        'grass-shampoo':
          'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)',
        'landing-aircraft':
          'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
        'witch-dance': 'linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)',
        'sleepless-night':
          'linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)',
        'angel-care':
          'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
        'crystal-river':
          'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)',
        'soft-lipstick': 'linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)',
        'salt-mountain': 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
        'perfect-white': 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
        'fresh-oasis': 'linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)',
        'strict-november': 'linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)',
        'morning-salad': 'linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)',
        'deep-relief':
          'linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)',
        'sea-strike':
          'linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%)',
        'night-call':
          'linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)',
        'supreme-sky':
          'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)',
        'light-blue':
          'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
        'mind-crawl':
          'linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)',
        'lily-meadow':
          'linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)',
        'sugar-lollipop':
          'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
        'sweet-dessert':
          'linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)',
        'magic-ray':
          'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)',
        'teen-party':
          'linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)',
        'frozen-heat':
          'linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%)',
        'gagarin-view':
          'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)',
        'fabled-sunset':
          'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)',
        'perfect-blue':
          'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
      },
      colors: {
        brand: {
          50: '#ffe2ec',
          100: '#ffb1c5',
          200: '#ff7e9f',
          300: '#ff4c79',
          400: '#fe1a52',
          500: '#e50139',
          600: '#b3002c',
          700: '#80001e',
          800: '#4f0012',
          900: '#200005',
        },
      },
      animation: {
        grow: 'grow 30s ease-in alternate infinite',
        pan: 'pan 25s linear',
      },
      keyframes: {
        grow: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        pan: {
          '0%': {
            'background-position': '0 50%',
          },
          '50%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '100%': {
            'background-position': '0 50%',
          },
        },
      },
      fontFamily: {
        sans: ['LexendVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
