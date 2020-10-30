'use strict'

const core = require('../../core');
const Title = require('../../components/Title');
const Panel = require('../../components/Panel');
const { latoBold, indieFlowerRegular, permanentMarker } = require('../../consts/fonts');

const SCRIPT_1 = [
    {
        start: 0.096,
        length: 0.60,
        text: 'Create',
        transitionIn: 'zoom'
    },
    {
        start: 0.72,
        length: 0.62,
        text: 'videos'
    },
    {
        start: 1.38,
        length: 0.22,
        text: 'using'
    },
    {
        start: 1.64,
        length: 0.31,
        text: 'using html'
    },
    {
        start: 1.99,
        length: 0.26,
        text: 'using html and'
    },
    {
        start: 2.29,
        length: 0.31,
        text: 'using html and css'
    }
];

const SCRIPT_2 = [
    {
        start: 2.64,
        length: 0.56,
        text: 'with',
        transitionIn: 'slideLeft',
    },
    {
        start: 3.24,
        length: 0.68,
        text: 'the'
    }
];

const SCRIPT_3 = [
    {
        start: 3.98,
        length: 0.54,
        text: 'Shotstack',
        effect: 'zoomIn'
    }
];

const SCRIPT_4 = [
    {
        start: 4.56,
        length: 0.60,
        text: 'API',
        transitionIn: 'slideLeft',
    },
    {
        start: 5.20,
        length: 0.04,
        text: 'AP'
    },
    {
        start: 5.28,
        length: 0.04,
        text: 'I'
    }
];

const SCRIPT_5 = [
    {
        start: 5.36,
        length: 0.22,
        text: 'use'
    },
    {
        start: 5.62,
        length: 0.22,
        text: 'your'
    },
    {
        start: 5.86,
        length: 0.22,
        text: 'own'
    },
    {
        start: 6.12,
        length: 0.20,
        text: `font`
    },
    {
        start: 6.36,
        length: 0.26,
        text: `<span style='font-family: "${permanentMarker.family}"; font-size: 38px;'>font</span>`
    },
    {
        start: 6.66,
        length: 0.30,
        text: 'and'
    },
    {
        start: 7.0,
        length: 0.46,
        text: 'add'
    },
    {
        start: 7.5,
        length: 0.3,
        text: '<span style="color: #25d3d0;">color</span>'
    },
    {
        start: 7.84,
        length: 0.4,
        text: '<span style="color: #25d3d0;">color</span> and'
    },
    {
        start: 8.28,
        length: 0.38,
        text: `<span style="color: #fc73b4;">color</span> and <i>style</i></span>`
    },
    {
        start: 8.7,
        length: 0.38,
        text: `<span style="color: #fc73b4;">color</span> and <i><u>style</u></i>`
    }
];

const SCRIPT_6 = [
    {
        start: 9.12,
        length: 0.62,
        text: 'to'
    },
    {
        start: 9.78,
        length: 0.58,
        text: 'one'
    },
    {
        start: 10.4,
        length: 0.26,
        text: '<s>one</s> ten'
    },
    {
        start: 10.7,
        length: 0.26,
        text: `<s>one</s> <s>ten</s> hundreds`
    },
    {
        start: 11,
        length: 0.58,
        text: `<s>one</s> <s>ten</s> <s>hundreds</s> <span style="color: #000000;">thousands</span>`
    }
];

const SCRIPT_7 = [
    {
        start: 11.62,
        length: 0.18,
        text: `of`
    },
    {
        start: 11.84,
        length: 1,
        text: 'videos',
        effect: 'zoomIn',
        transitionOut: 'zoom'
    }
];

const textClips = [];

const generateTextClips = (script, color, size) => {
    script.forEach((word) => {
        const text = new Title(word.text, 450, 100, null, {
            font: latoBold.family,
            color,
            size,
            align: 'center',
            bold: true
        });

        const transitionIn = word.transitionIn || null;
        const transitionOut = word.transitionOut || null;
        const effect = word.effect || null;

        const titleClip = core.clip(text.asset, word.start, word.length, null, null, null, null, null, transitionIn, transitionOut, effect);
        textClips.push(titleClip);
    });
}


const generateTemplateJson = () => {
    generateTextClips(SCRIPT_1, '#ffffff', '30px');
    generateTextClips(SCRIPT_2, '#000000', '30px');
    generateTextClips(SCRIPT_3, '#ffffff', '34px');
    generateTextClips(SCRIPT_4, '#000000', '38px');
    generateTextClips(SCRIPT_5, '#ffffff', '30px');
    generateTextClips(SCRIPT_6, '#ffffff', '32px');
    generateTextClips(SCRIPT_7, '#000000', '34px');

    const textTrack1 = core.track(textClips);

    /** Panel Backgrounds */
    const whitePanelBg = new Panel(1024, 576, '#ffffff');
    const highlitePrimaryPanelBg = new Panel(1024, 576, '#25d3d0');
    const highliteSecondaryPanelBg = new Panel(1024, 576, '#fc73b4');

    const panel1BgClip = core.clip(whitePanelBg.asset, 2.64, 1.32);
    const panel2BgClip = core.clip(whitePanelBg.asset, 4.56, 0.76);
    const panel3BgClip = core.clip(highlitePrimaryPanelBg.asset, 9.12, 2.46);
    const panel4BgClip = core.clip(highliteSecondaryPanelBg.asset, 11.62, 1.22);

    const panelBgTrack = core.track([
        panel1BgClip,
        panel2BgClip,
        panel3BgClip,
        panel4BgClip
    ]);


    /** Outro */
    const logo = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/branding/logo-reverse.png');
    const outroClip = core.clip(logo, 12.88, 4, 'none', null, null, null, null, 'slideUp')
    const outroTrack = core.track([outroClip]);

    const tracks = [
        textTrack1,
        panelBgTrack,
        outroTrack
    ];

    const fonts = [
        core.font(latoBold.src),
        core.font(indieFlowerRegular.src),
        core.font(permanentMarker.src),
    ];

    const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/audiojungle/stomp_preview.mp3', 'fadeOut');
    const timeline = core.timeline(tracks, soundtrack, '#000000', fonts);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
