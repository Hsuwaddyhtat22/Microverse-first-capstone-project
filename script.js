const menuMob = document.getElementById('mob-menu');
const menu = document.getElementById('menu');
const close = document.getElementById('close-button');

function menuOpen() {
    menuMob.style.display = 'flex';
}

function menuClose() {
    menuMob.style.display = 'none';
}

menu.addEventListener('click', menuOpen);
close.addEventListener('click', menuClose);

const Data = [{
        img: './images/ali.webp',
        name: 'James Author',
        profession: 'Violinst',
        description: 'Studied at Conservatory of Alexandria and graduated in 2016 specializing in baroque ',
    },
    {
        img: './images/gamal.webp',
        name: 'Mohammad Jamal',
        profession: 'Recorder Player',
        description: 'Master of a wide  repretoir from a rich variety of barouque and romantic pieces',
    },
    {
        img: './images/adel.jpg',
        name: 'Daniel',
        profession: 'Pianist',
        description: 'Classical and Jazz enthusiast',
    },
    {
        img: './images/halim.webp',
        name: 'Mohammad Halim',
        profession: 'Conductor',
        description: 'Very Talented conductor with years of experience in Musical teaching ',
    },
    {
        img: './images/jenny.png',
        name: 'Jenny Stevenson',
        profession: 'Flute player',
        description: 'incredible talent with wind instruments ',
    },
    {
        img: './images/mark.png',
        name: 'Mark val',
        profession: 'even coordinator',
        description: 'our Active Event manager ',
    },
];

const container = document.getElementById('container');

function computer() {
    Data.forEach(function(player) {
        container.innerHTML += '<div class="player-list">' +
            '<img src="' + player.img + '" alt="" class="player-img">' +
            '<div class="player-content">' +
            '<h2 class="player-header">' + player.name + '</h2>' +
            '<h3 class="player-profession">' + player.profession + '</h3>' +
            '<hr class="player-line">' +
            '<p class="player-description">' + player.description + '</p>' +
            '</div>' +
            '</div>';
    });
}

computer();


const programActivitiesData = [{
        icon: 'images/program_icon_01.png',
        title: 'Lecture',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: 'images/program_icon_02.png',
        title: 'CC Exhibition',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: 'images/program_icon_03.png',
        title: 'Forum',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: 'images/program_icon_04.png',
        title: 'Workshop',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: 'images/program_icon_05.png',
        title: 'CC Ignite',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    }
];

const programActivities = document.querySelector('.program-activities');

function createProgramActivity() {
    programActivitiesData.forEach(function(activity) {
        programActivities.innerHTML += '<div class="program-activities-details flex-container">' +
            '<img src="' + activity.icon + '" alt="program-ico">' +
            '<span>' + activity.title + '</span>' +
            '<p>' + activity.description + '</p>' +
            '</div>';
    });
}

createProgramActivity();

const moreButton = document.querySelector('.more-btn');
const speakers = Array.from(document.querySelectorAll('.player-list'));

moreButton.addEventListener('click', () => {
    speakers.slice(-4).forEach((speaker) => {
        speaker.classList.toggle('hidden');
    });

    if (moreButton.textContent === 'More') {
        moreButton.textContent = 'Less';
    } else {
        moreButton.textContent = 'More';
    }
});

function hideSpeakers() {
    if (window.innerWidth < 768) {
        speakers.slice(-4).forEach((speaker) => {
            speaker.classList.add('hidden');
        });
        moreButton.textContent = 'More';
    } else {
        speakers.forEach((speaker) => {
            speaker.classList.remove('hidden');
        });
        moreButton.textContent = 'More';
    }
}

hideSpeakers();

window.addEventListener('resize', () => {
    hideSpeakers();
});