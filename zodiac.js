function findZodiac() {
    const input = document.getElementById('birth-input').value.trim().toLowerCase();
    const [dayStr, month] = input.split(' ');
    const day = parseInt(dayStr, 10);
    const zodiacResult = document.getElementById('zodiac-result');

    if (!day || !month) {
        zodiacResult.innerHTM
        return;
    }

    let astroSign = '';
    let imgUrl = '';

    if (month === 'december') {
        astroSign = day < 22 ? 'Sagittarius' : 'Capricorn';
        imgUrl = day < 22 ? 'image/download.jpg' : 'images/capricorn.png';
    } else if (month === 'january') {
        astroSign = day < 20 ? 'Capricorn' : 'Aquarius';
        imgUrl = day < 20 ? 'images/capricorn.png' : 'images/aquarius.png';
    } else if (month === 'february') {
        astroSign = day < 19 ? 'Aquarius' : 'Pisces';
        imgUrl = day < 19 ? 'images/aquarius.png' : 'images/pisces.png';
    } else if (month === 'march') {
        astroSign = day < 21 ? 'Pisces' : 'Aries';
        imgUrl = day < 21 ? 'images/pisces.png' : 'images/aries.png';
    } else if (month === 'april') {
        astroSign = day < 20 ? 'Aries' : 'Taurus';
        imgUrl = day < 20 ? 'images/aries.png' : 'images/taurus.png';
    } else if (month === 'may') {
        astroSign = day < 21 ? 'Taurus' : 'Gemini';
        imgUrl = day < 21 ? 'images/taurus.png' : 'images/gemini.png';
    } else if (month === 'june') {
        astroSign = day < 21 ? 'Gemini' : 'Cancer';
        imgUrl = day < 21 ? 'images/gemini.png' : 'images/cancer.png';
    } else if (month === 'july') {
        astroSign = day < 23 ? 'Cancer' : 'Leo';
        imgUrl = day < 23 ? 'images/cancer.png' : 'images/leo.png';
    } else if (month === 'august') {
        astroSign = day < 23 ? 'Leo' : 'Virgo';
        imgUrl = day < 23 ? 'images/leo.png' : 'images/virgo.png';
    } else if (month === 'september') {
        astroSign = day < 23 ? 'Virgo' : 'Libra';
        imgUrl = day < 23 ? 'images/virgo.png' : 'images/libra.png';
    } else if (month === 'october') {
        astroSign = day < 23 ? 'Libra' : 'Scorpio';
        imgUrl = day < 23 ? 'images/libra.png' : 'images/scorpio.png';
    } else if (month === 'november') {
        astroSign = day < 22 ? 'Scorpio' : 'Sagittarius';
        imgUrl = day < 22 ? 'images/scorpio.png' : 'images/sagittarius.png';
    } else {
        zodiacResult.innerHTML = 'Please enter a valid month.';
        return;
    }

    zodiacResult.innerHTML = `
        <div style="text-align: center;">
            <p>Your zodiac sign is <strong>${astroSign}</strong>.</p>
            <img src="${imgUrl}" alt="${astroSign} image" style="max-width: 150px;">
        </div>`;
}
