function generateTownName() {
    let prefix = [
        'County',
        'East',
        'Grand',
        'Great',
        'Lake',
        'Las',
        'Mount',
        'New',
        'North',
        'Park',
        'Port',
        'Saint',
        'San',
        'West',
    ];

    let townName = [
        'Arlington',
        'Ashland',
        'Burlington',
        'Chester',
        'Clayton',
        'Clinton',
        'Dayton',
        'Fairview',
        'Franklin',
        'Georgetown',
        'Greenville',
        'Kingston',
        'Madison',
        'Manchester',
        'Mansfield',
        'Marion',
        'McDonald',
        'Milford',
        'Milton',
        'Mohawk',
        'Oakland',
        'Oxford',
        'Parsons',
        'Riverside',
        'Rutledge',
        'Salem',
        'Springfield',
        'Talbott',
        'Trezevant',
        'Turtle',
        'Washington',
        'Waverly',
    ];

    let randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    let randomTownName = townName[Math.floor(Math.random() * townName.length)];

    return `${randomPrefix} ${randomTownName} <br />`;
}

function showTownName() {
    let nameHold = document.getElementById('nameHolder');

    nameHold.innerHTML += generateTownName();
}
