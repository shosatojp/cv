function space_to_ensp(s) {
    return s.replace(/ /g, '&ensp;');
}

// name
document.getElementById('content-name-kana').innerHTML =
    data.name.myouji.kana + '&emsp;' + data.name.namae.kana;
document.getElementById('content-name-kanji').innerHTML =
    data.name.myouji.kanji + '&emsp;' + data.name.namae.kanji;


// birthday-gender
document.getElementById('content-birthday-year').innerHTML = data.birthday.year;
document.getElementById('content-birthday-month').innerHTML = data.birthday.month;
document.getElementById('content-birthday-day').innerHTML = data.birthday.day;
document.getElementById('content-age').innerHTML = data.age;
document.getElementById('content-gender').innerHTML = data.gender;

// address
document.getElementById('content-address-kana').innerHTML = space_to_ensp(data.address.kana);
document.getElementById('content-address-kanji').innerHTML = space_to_ensp(data.address.kanji);
document.getElementById('content-address-post').innerHTML = data.address.post;

// sns
document.getElementById('content-email').innerHTML = data.email;
document.getElementById('content-phone').innerHTML = data.phone;
document.getElementById('content-github').setAttribute('href', `https://github.com/${data.sns.github}`);
document.getElementById('content-github-id').innerHTML = data.sns.github;
document.getElementById('content-twitter').setAttribute('href', `https://twitter.com/${data.sns.twitter}`);
document.getElementById('content-twitter-id').innerHTML = data.sns.twitter;

// picture
document.getElementById('content-picture').setAttribute('src', data.picture);


// history
const history = data.history;
const history_container = document.querySelector('#history');
const t = document.querySelector('#history-row-template');

for (const h of history) {
    const e = document.importNode(t, true).content;
    e.querySelector('.history-row-year span').innerHTML = h.year;
    e.querySelector('.history-row-month span').innerHTML = h.month;
    e.querySelector('.history-row-content span').innerHTML = h.content;
    history_container.appendChild(e);
}

while (history_container.children.length < 22) {
    const e = document.importNode(t, true);
    history_container.appendChild(e.content);
}