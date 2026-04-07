// --- मास्टर डेटाबेस (Master Database) ---
const tattooData = {
    "Aliens": ["https://www.pinterest.com/jackadams7946/aliens01/", "https://www.pinterest.com/jackadams7946/aliens02/"],
    "Angels": ["https://www.pinterest.com/jackadams7946/angels01/"],
    "Bats": ["https://www.pinterest.com/jackadams7946/bats01/", "https://www.pinterest.com/jackadams7946/bats02/"],
    "Bears": ["https://www.pinterest.com/jackadams7946/bears01/"],
    "Bees": ["https://www.pinterest.com/jackadams7946/bees01/"],
    "Biblical": ["https://www.pinterest.com/jackadams7946/biblical01/"],
    "Birds": ["https://www.pinterest.com/jackadams7946/birds01/"],
    "Boats and Ships": ["https://www.pinterest.com/jackadams7946/boatsandships01/"],
    "Bugs and Insects": ["https://www.pinterest.com/jackadams7946/bugsandinsects01/"],
    "Butterflies": ["https://www.pinterest.com/jackadams7946/butterflies01/"],
    "Cartoon Characters": ["https://www.pinterest.com/jackadams7946/cartooncharacters01/"],
    "Castles": ["https://www.pinterest.com/jackadams7946/castles/"],
    "Cats": ["https://www.pinterest.com/jackadams7946/cats01/"],
    "Cemeteries & Tombstones": ["https://www.pinterest.com/jackadams7946/cemeteriesandtombstones01/"],
    "Chandeliers": ["https://www.pinterest.com/jackadams7946/chandelier01/"],
    "Clowns": ["https://www.pinterest.com/jackadams7946/clowns01/"],
    "Comics": ["https://www.pinterest.com/mindtatts/comics-tattoos/"],
    "Cowboys": ["https://www.pinterest.com/jackadams7946/cowboys01/"],
    "Cryptids": ["https://www.pinterest.com/jackadams7946/cryptids/"],
    "Deer": ["https://www.pinterest.com/jackadams7946/deer01/"],
    "Devils and Demons": ["https://www.pinterest.com/jackadams7946/demonsanddevils01/"],
    "Dragons": ["https://www.pinterest.com/jackadams7946/dragons01/"],
    "Dream Catchers": ["https://www.pinterest.com/jackadams7946/dreamcatchers01/"],
    "Eagles": ["https://www.pinterest.com/jackadams7946/eagles01/"],
    "Eyes": ["https://www.pinterest.com/jackadams7946/eyes/"],
    "Fairies": ["https://www.pinterest.com/jackadams7946/faeries/"],
    "Feathers": ["https://www.pinterest.com/jackadams7946/feathers/"],
    "Fingers": ["https://www.pinterest.com/jackadams7946/finger-tattoos/"],
    "Fish": ["https://www.pinterest.com/shAyDHD13/fish-tattoo/"],
    "Flowers": ["https://www.pinterest.com/jackadams7946/flowers01/", "https://www.pinterest.com/jackadams7946/flowers02/"],
    "Frogs": ["https://www.pinterest.com/jackadams7946/frogs01/"],
    "Ghosts": ["https://www.pinterest.com/jackadams7946/ghosts/"],
    "Grimm Reapers": ["https://www.pinterest.com/jackadams7946/grimreapers01/"],
    "Halloween": ["https://www.pinterest.com/jackadams7946/halloween01/", "https://www.pinterest.com/blackvelvetwitch/halloween-tattoos/"],
    "Hearts": ["https://www.pinterest.com/wtattoogallery/heart-tattoos/"],
    "Horror": ["https://www.pinterest.com/blackvelvetwitch/horror-tattoos/"],
    "Horses": ["https://www.pinterest.com/jackadams7946/horses/"],
    "Hot Rod / Rat Fink": ["https://www.pinterest.com/sublimedano/hot-rod-ratfink-tattoo/"],
    "Juggalo": ["https://www.pinterest.com/dmndxcrook/juggalo-tattoos/", "https://www.pinterest.com/guineapigbird/juggalo-tattoo-designs/", "https://www.pinterest.com/skyegothica93/juggalo-decortattoo-ideas/", "https://www.pinterest.com/bushidoprince06/juggaloclown-tattoo-designs/"],
    "Mermaids": ["https://www.pinterest.com/haglund0930/mermaid-tattoos/"],
    "Miscellaneous": ["https://www.pinterest.com/marissakaelene/miscellaneous-tattoos/"],
    "Minimalist": ["https://www.pinterest.com/sophieneillyy/minimalist-tattoo/"],
    "New School": ["https://www.pinterest.com/opt_orhanky/new-school-tattoos/"],
    "Old School": ["https://www.pinterest.com/wtattoo/old-school-tattoo/"],
    "Pokémon": ["https://www.pinterest.com/watch__me__draw_/pok%C3%A9mon-tattoos/"],
    "Punk": ["https://www.pinterest.com/loganpj41/punk-tattoos/"],
    "Rock and Roll": ["https://www.pinterest.com/gijoenino1964/rock-n-roll-tattoos/"],
    "Skulls and Skeletons": ["https://www.pinterest.com/watch__me__draw_/skullskeleton-tattoos/"],
    "Tim Burton Art": ["https://www.pinterest.com/jackadams7946/tim-burton-art/"],
    "Watercolor": ["https://www.pinterest.com/thetatt/watercolor-tattoos/"],
    "Zodiac": ["https://www.pinterest.com/HikenDip/zodiac-tattoos/"],
    "Zombies": ["https://www.pinterest.com/watch__me__draw_/zombie-tattoos/", "https://www.pinterest.com/rabbitzom84/zombie-tattoos/"]
};

const emojiData = {
    "Aliens": "👽", "Angels": "👼", "Bats": "🦇", "Bears": "🐻", "Bees": "🐝", "Biblical": "🕊️",
    "Birds": "🐦", "Boats and Ships": "🚢", "Bugs and Insects": "🐞", "Butterflies": "🦋",
    "Cartoon Characters": "💥", "Castles": "🏰", "Cats": "🐈", "Cemeteries & Tombstones": "🪦",
    "Chandeliers": "💡", "Clowns": "🤡", "Comics": "🗯️", "Cowboys": "🤠", "Cryptids": "👣",
    "Deer": "🦌", "Devils and Demons": "👿", "Dragons": "🐉", "Dream Catchers": "🕸️",
    "Eagles": "🦅", "Eyes": "👁️", "Fairies": "🧚", "Feathers": "🪶", "Fingers": "☝️",
    "Fish": "🐟", "Flowers": "🌸", "Frogs": "🐸", "Ghosts": "👻", "Grimm Reapers": "💀",
    "Halloween": "🎃", "Hearts": "💖", "Horror": "🔪", "Horses": "🐎", "Hot Rod / Rat Fink": "🏎️",
    "Juggalo": "🪓", "Mermaids": "🧜‍♀️", "Miscellaneous": "🎲", "Minimalist": "▪️",
    "New School": "🎨", "Old School": "⚓", "Pokémon": "⚡", "Punk": "🎸", "Rock and Roll": "🤘",
    "Skulls and Skeletons": "💀", "Tim Burton Art": "🎩", "Watercolor": "🖌️", "Zodiac": "♈", "Zombies": "🧟"
};

let currentBoardIndex = 0;

function addNewBoard(url) {
    const stack = document.getElementById('pinterest-stack');
    const clipper = document.createElement('div');
    clipper.classList.add('board-clipper');
    clipper.innerHTML = `<a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="580" data-pin-scale-width="80" href="${url}"></a>`;
    stack.appendChild(clipper);
    setTimeout(() => { if (window.PinUtils) window.PinUtils.build(); }, 150);
}

window.onload = function() {
    const viewBtn = document.getElementById('view-btn');
    const moreBtn = document.getElementById('show-more-btn');
    const instBtn = document.getElementById('instruction-btn');
    const dropdown = document.getElementById('style-dropdown');
    const stack = document.getElementById('pinterest-stack');
    const moreArea = document.getElementById('more-area');

    instBtn.addEventListener('click', function(event) {
        createParticles(event, "🎃");
        document.getElementById('instruction-box').classList.toggle('hidden');
    });

    viewBtn.addEventListener('click', function(event) {
        const style = dropdown.value;
        const emoji = emojiData[style] || "🎃";
        createParticles(event, emoji);

        if (style) {
            stack.innerHTML = "";
            currentBoardIndex = 0;
            const boards = tattooData[style];
            addNewBoard(boards[0]);
            moreArea.style.display = "block";
            moreBtn.innerHTML = "Show More Designs";
            moreBtn.style.backgroundColor = "#000000";
            moreBtn.style.opacity = "1";
        }
    });

    moreBtn.addEventListener('click', function(event) {
        const style = dropdown.value;
        const boards = tattooData[style];
        const emoji = emojiData[style] || "💀";

        currentBoardIndex++;

        if (currentBoardIndex < boards.length) {
            createParticles(event, emoji);
            addNewBoard(boards[currentBoardIndex]);
        }
        else {
            createParticles(event, "🔥");
            // UPDATED MESSAGE AS REQUESTED
            moreBtn.innerHTML = `All curated designs loaded. Click here for more on Pinterest!`;
            moreBtn.style.backgroundColor = "#bd081c";

            // If they click this final version, it opens the search
            moreBtn.onclick = () => window.open(`https://www.pinterest.com/search/pins/?q=${style} tattoo design`, '_blank');
        }
    });
};

function createParticles(e, emoji) {
    for (let i = 0; i < 7; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerHTML = emoji;
        const x = e.clientX || window.innerWidth/2;
        const y = e.clientY || window.innerHeight/2;
        particle.style.left = x + 'px'; particle.style.top = y + 'px';
        const moveX = (Math.random() - 0.5) * 500 + 'px';
        const moveY = (Math.random() - 0.5) * 500 + 'px';
        particle.style.setProperty('--x', moveX); particle.style.setProperty('--y', moveY);
        document.body.appendChild(particle);
        setTimeout(() => { particle.remove(); }, 2000);
    }
}