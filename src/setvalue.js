function space_to_ensp(s) {
    return s.replace(/ /g, '&ensp;');
}

// date
const now = new Date();
document.getElementById('content-date').innerHTML =
    `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日 現在`

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
if (data.sns.github) {
    document.getElementById('content-github').setAttribute('href', `https://github.com/${data.sns.github}`);
    document.getElementById('content-github-id').innerHTML = data.sns.github;
} else {
    document.getElementById('github').remove();
}
if (data.sns.twitter) {
    document.getElementById('content-twitter').setAttribute('href', `https://twitter.com/${data.sns.twitter}`);
    document.getElementById('content-twitter-id').innerHTML = data.sns.twitter;
} else {
    document.getElementById('twitter').remove();
}
if (data.sns.facebook) {
    document.getElementById('content-facebook').setAttribute('href', `https://facebook.com/${data.sns.facebook}`);
    document.getElementById('content-facebook-id').innerHTML = data.sns.facebook;
} else {
    document.getElementById('facebook').remove();
}
if (document.getElementById('sns').childElementCount % 2 == 1) {
    const div = document.createElement('div');
    document.getElementById('sns').appendChild(div);
}


// picture
document.getElementById('content-picture').setAttribute('src', data.picture);


// history
const history_container = document.querySelector('#history');
const history_row_template = document.querySelector('#history-row-template');

function make_history_row(h) {
    const e = document.importNode(history_row_template, true).content;
    e.querySelector('.history-row-year span').innerHTML = h.year || '';
    e.querySelector('.history-row-month span').innerHTML = h.month || '';
    e.querySelector('.history-row-content span').innerHTML = h.content || '';
    history_container.appendChild(e);
}

if (data.history.school.length > 0) {
    make_history_row({ content: '<div style="width:100%;text-align:center">学歴</div>' });
    for (const h of data.history.school) {
        make_history_row(h);
    }
}
if (data.history.job.length > 0) {
    if (data.history.school.length > 0) {
        make_history_row({});
    }
    make_history_row({ content: '<div style="width:100%;text-align:center">職歴</div>' });
    for (const h of data.history.job) {
        make_history_row(h);
    }
}
make_history_row({ content: '<div style="width:100%;text-align:right">以上</div>' });

while (history_container.children.length < 8) {
    const e = document.importNode(history_row_template, true);
    history_container.appendChild(e.content);
}

// advantage
document.getElementById('content-advantage').innerHTML = data.advantage || 'なし';

// misc
document.getElementById('content-motivation').innerHTML = data.motivation || 'なし';
document.getElementById('content-traveltime-hours').innerHTML = data.traveltime.hours;
document.getElementById('content-traveltime-minutes').innerHTML = data.traveltime.minutes;
if (!data.traveltime.hours) {
    document.getElementById('traveltime-hours').style.display = 'none';
}
if (!data.traveltime.minutes) {
    document.getElementById('traveltime-minutes').style.display = 'none';
}
document.getElementById('content-dependents').innerHTML = data.dependents || 'なし';
document.getElementById('content-spouse').innerHTML = data.spouse || 'なし';
document.getElementById('content-support-spouse').innerHTML = data.support_spouse || 'なし';

// other
document.getElementById('content-other').innerHTML = data.other || 'なし';

// requests
document.getElementById('content-requests').innerHTML = data.requests || '貴社の規定に従います';
