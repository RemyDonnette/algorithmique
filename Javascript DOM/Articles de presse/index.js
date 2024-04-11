import { tabSortedByDate, createArticle, formatDateToText } from './array.js'
// import { * as array } from './array.js'

const root = document.querySelector('#root');

const articles = [
    {
        id: 1,
        titre: 'Une Fleur Bleue Éblouissante Dévoilée',
        content: "Dans une avancée scientifique captivante, une équipe de botanistes a annoncé la découverte d'une fleur bleue étonnante, jamais vue auparavant dans le règne végétal. Nichée dans les profondeurs d'une forêt tropicale isolée, cette fleur mystérieuse a captivé l'imagination des chercheurs du monde entier. Cette fleur, d'une teinte de bleu éblouissante, semble défier les conventions de la nature. Son apparition suscite des questions sur son origine et son évolution uniques. Les experts spéculent déjà sur les implications de cette découverte pour la biologie et l'écologie, envisageant des recherches approfondies pour percer les secrets de cette fleur énigmatique. Cette découverte promet de réécrire les livres d'histoire de la botanique, offrant un nouvel aperçu de la diversité et de la beauté de la vie sur notre planète. Alors que les scientifiques s'apprêtent à étudier de près cette fleur sans précédent, le monde retient son souffle, attendant avec impatience les révélations fascinantes que cette exploration pourrait apporter",
        picture: './images/image1.webp',
        alternativeText: 'image d\'une fleur bleue',
        createdAt: '2016/07/12', // année/mois/jour
        updatedAt: '2018/04/20',
        isActive: true
    },
    {
        id: 2,
        titre: 'Le Nouveau Symbole de l\'Avant-Garde Urbaine Se Lève',
        content: "Dans un élan de progrès architectural, la métropole accueillera bientôt le dernier-né de son horizon, un édifice futuriste qui définira les normes de la modernité. Le 'Nexus Tower', nommé ainsi pour sa connexion inégalée avec le futur, s'élève majestueusement au cœur de la ville, défiant les limites de l'ingénierie. Ce chef-d'œuvre d'envergure, d'une hauteur vertigineuse, promet de redéfinir le panorama urbain avec ses lignes audacieuses et ses technologies avant-gardistes intégrées. Conçu pour être à la fois fonctionnel et esthétique, le bâtiment abritera des espaces polyvalents, des espaces verts suspendus et des zones de travail innovantes. L'inauguration imminente du Nexus Tower marque un jalon crucial dans l'histoire de la ville, symbolisant son engagement envers l'innovation et son aspiration à un avenir résolument tourné vers l'avant. Ce monument architectural captivera les regards et inspirera les esprits, incarnant l'essence même du progrès dans le paysage urbain contemporain.",
        picture: './images/image2.webp',
        alternativeText: 'image d\'un building',
        createdAt: '2018/04/20',
        updatedAt: '2022/07/22',
        isActive: false
    },
    {
        id: 3,
        titre: 'Découvrez la Sérénité de Minami, un Joyau Méconnu du Japon',
        content: "Au cœur des montagnes majestueuses du Japon réside un petit trésor caché : le village de Minami. Niché dans une vallée verdoyante, ce havre de paix offre aux visiteurs une évasion incomparable de l'agitation urbaine. Avec ses ruelles étroites bordées de maisons traditionnelles en bois, ses temples séculaires et ses jardins zen envoûtants, Minami incarne l'essence même de la tranquillité japonaise. Les habitants chaleureux vous accueillent avec leur hospitalité légendaire, vous invitant à découvrir les délices de la cuisine locale et à vous imprégner de la culture ancestrale. Loin des sentiers battus, Minami vous offre une expérience authentique imprégnée de sérénité et de beauté naturelle.",
        picture: './images/image3.webp',
        alternativeText: 'image d\'un village japonais',
        createdAt: '2019/04/24',
        updatedAt: '2019/12/08',
        isActive: true
    }
    ];

createArticle(tabSortedByDate(articles));

