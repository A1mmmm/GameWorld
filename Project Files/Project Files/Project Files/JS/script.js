burger_blabla = document.querySelectorAll('.burger_menu');
containerrr = document.querySelectorAll('.burger_container');
header_text2 = document.querySelectorAll('.header_text2');

burger_blabla.forEach(element => {
    element.addEventListener('click', () => {
        containerrr[0].classList.toggle('a');
    })
});

box21 = document.querySelectorAll('.box2');

secondMenu = document.querySelectorAll('.second_menu');
box = document.querySelectorAll('.box2');


const names_array = [
    'Evil Dead: The Game',
    'Tomb Raider',
    'Spider-Man Remastered',
    'Battlefield V',
    'World War Z',
    'Dark Souls',
    'Half-Life 2',
    'Resident Evil 4',
    'Disco Elysium',
    'God of War',
    'Super Mario World',
    'Red Dead Redemption II',
    'Skyrim',
    'Mortal Kimbat 11'
]

const images_array = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'image7.jpg',
    'image8.jpeg',
    'image9.jpg',
    'image10.jpg',
    'image16.jpg',
    'image12.jpg',
    'image13.jpeg',
    'image14.jpeg',
    'image15.jpeg'
]

let num;
name_game = document.querySelectorAll('.name_game2');
blabla = document.querySelector('.blablabla');
neww = document.querySelector('.new');

slider_right = document.querySelectorAll('.slider_right');
slider_left = document.querySelectorAll('.slider_left');
menu = document.querySelectorAll('.menu');
gta = document.querySelector('.gta6_block');
witcher = document.querySelector('.witcher4_block');
farcry = document.querySelector('.farcry7_block');
const images = [
    'img2.jpg',
    'gta6.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'img6.jpg'
]

const images2 = [
    'pic1.jpg',
    'witcher4.jpg',
    'img1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg'
]

const images3 = [
    'pic5.jpg',
    'farcry7.jpg',
    'pic6.jpg',
    'pic7.png',
    'pic8.webp',
    'pic9.jpg'
]

let i = 0;

menu[0].classList.add('active');
slider_right.forEach(element => {
    element.addEventListener('click', () => {
        i += 1;
        if (i == 6) i = 0;
        menu[i].classList.add('active');

        for (let x = 0; x < 6; x++) {
            if (x != i) {
                menu[x].classList.remove('active');
            }
        }
        console.log(images[i]);
        gta.style.backgroundImage = `url("./IMG/${images[i]}")`;
        witcher.style.backgroundImage = `url("./IMG/${images2[i]}")`;
        farcry.style.backgroundImage = `url("./IMG/${images3[i]}")`;
    })
});

slider_left.forEach(element => {
    element.addEventListener('click', () => {
        i -= 1;
        if (i == -1) i = 5;
        menu[i].classList.add('active');

        for (let x = 0; x < 6; x++) {
            if (x != i) {
                menu[x].classList.remove('active');
            }
        }
        gta.style.backgroundImage = `url("./IMG/${images[i]}")`;
        witcher.style.backgroundImage = `url("./IMG/${images2[i]}")`;
        farcry.style.backgroundImage = `url("./IMG/${images3[i]}")`;
    })
});

img_doc = document.querySelectorAll('.game_img1');
game_name = document.querySelectorAll('.name_game2');
type_text = document.querySelectorAll('.type_text');
sale_doc = document.querySelectorAll('.box_sale2');

let name_arr = [
    'Evil Dead: The Game',
    'Shadow of the Tomb Raider',
    'Marvel Spider-Man Remastered',
    'Battlefield V',
    'World War Z',
    'Cyberpunk 2077'
]

let type_arr = [
    'Экшен',
    'Экшен, Приключения',
    'Экшен, Приключения',
    'Экшен',
    'Экшен',
    'RPG'
]

let price_arr = [
    '2895',
    '1495',
    '1595',
    '1999',
    '1999'
]

let sale_arr = [
    '-28%',
    '-40%',
    '-71%',
    '-40%',
    '-40%'
]

let img_arr = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'cyberpunk.jpg'
]
const isFavariteMap = {};

test = document.querySelectorAll('.box_favorites');
container = document.querySelector('.none_fav');
musor = document.querySelectorAll('.musorniy_text');
let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0;
test.forEach(element => {
    element.addEventListener('click', () => {
        musor[0].classList.add('delete');
        console.log('element', element)
        const id = element.getAttribute('id')
        isFavariteMap[id] = !isFavariteMap[id]
        foo(element, id);
        if (isFavariteMap[id]) {
            let be = box21[id].cloneNode(true);
            be.id = 'f-' + id;
            container.appendChild(be);
            const block = document.createElement('div');
            block.classList.add('cart-product');
        } else {
            document.getElementById('f-' + id).remove()
        }
    })
});

for (let i = 1; i < 5; i++) {
    test[i].onclick = function () {
    }
}



function foo(el, id) {
    el.innerHTML = `
    <img class="fotka" src="IMG/star_${isFavariteMap[id] ? '2' : '3'}.png" alt="">
    <style>
    .fotka {
        width: 3vw;
        height: 3vw;
    }
    </style>
    `
}




