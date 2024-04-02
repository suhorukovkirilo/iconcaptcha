const RandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getPattern() {
    var patterns = [
        [0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1],
        [1, 1, 1, 1, 0],

        [0, 0, 1, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 0, 0],

        [0, 1, 0, 1, 1],
        [0, 1, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
        [1, 1, 0, 1, 0],

        [0, 1, 1, 2, 2],
        [0, 2, 2, 1, 1],
        [0, 1, 2, 2, 1],
        [0, 2, 1, 2, 1],
        [0, 2, 1, 1, 2],
        [0, 1, 2, 1, 2],

        [1, 0, 2, 2, 1],
        [1, 0, 1, 2, 2],
        [1, 0, 2, 1, 2],
        [2, 0, 2, 1, 1],
        [2, 0, 1, 2, 1],
        [2, 0, 1, 1, 2],

        [2, 2, 0, 1, 1],
        [1, 1, 0, 2, 2],
        [2, 1, 0, 2, 1],
        [2, 1, 0, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 0, 1, 2],

        [2, 2, 1, 0, 1],
        [1, 2, 2, 0, 1],
        [2, 1, 2, 0, 1],
        [1, 1, 2, 0, 2],
        [1, 2, 1, 0, 2],
        [2, 1, 1, 0, 2],

        [2, 2, 1, 1, 0],
        [1, 2, 2, 1, 0],
        [1, 1, 2, 2, 0],
        [2, 1, 2, 1, 0],
        [2, 1, 1, 2, 0],
        [1, 2, 1, 2, 0],
    ];
    
    var randNum = RandInt(0, patterns.length - 1);

    return patterns[randNum]
};

function getIcon() {
    return 'https://raw.githubusercontent.com/suhorukovkirilo/iconcaptcha/main/icons/' + RandInt(1, 140).toString() + '.png'
};

function Captcha(onfail, onsuccess) {
    function success() {
        onsuccess();
    };

    function fail() {
        onfail();
    };

    var dialog = document.createElement('dialog');
    var text = document.createElement('p');
    var captcha = document.createElement('div');

    var a1 = document.createElement('img');
    var a2 = document.createElement('img');
    var a3 = document.createElement('img');
    var a4 = document.createElement('img');
    var a5 = document.createElement('img');

    captcha.appendChild(a1);
    captcha.appendChild(a2);
    captcha.appendChild(a3);
    captcha.appendChild(a4);
    captcha.appendChild(a5);

    dialog.appendChild(text);
    dialog.appendChild(captcha);

    document.body.appendChild(dialog);

    var icons = [getIcon(), getIcon(), getIcon()];
    var images = [a1, a2, a3, a4, a5];

    var pattern = getPattern();

    for (var i of [0, 1, 2, 3, 4]) {
        var image = images[i];
        var src = icons[pattern[i]];
        image.src = src;
        image.style.transform = 'rotate(' + (RandInt(0, 3) * 90).toString() + 'deg)';
        if (pattern[i] === 0) {
            image.addEventListener('click', success);
        } else {
            image.addEventListener('click', fail);
        };
    };

    dialog.showModal();
};

Captcha(function(){console.log("fail")}, function(){console.log("success")});
