const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async() => {
    const data = await fetch(BASE_URL);
    then((res) => res.json())
        .catch((e) => console.log(e));


    return data.webpurl;


};

async function loadImg() {
    const catTmg = document.getElementsByTagName('cat');
    catImg.src = await getCasts();
}
catBtn.addEventListener('click', loadImg)

loadImg();