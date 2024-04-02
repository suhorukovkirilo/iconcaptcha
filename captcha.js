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

        [0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],

        [0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 0],

        [0, 1, 0, 1, 1, 1],
        [0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 1],
        [1, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0],
        [1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0],
        [1, 1, 1, 0, 1, 0],

        [0, 2, 2, 1, 1, 1],
        [0, 1, 2, 2, 1, 1],
        [0, 1, 1, 2, 2, 1],
        [0, 1, 1, 1, 2, 2],
        [0, 2, 1, 2, 1, 1],
        [0, 2, 1, 1, 2, 1],
        [0, 2, 1, 1, 1, 2],
        [0, 1, 2, 1, 2, 1],
        [0, 1, 2, 1, 1, 2],
        [0, 1, 1, 2, 1, 2],

        [1, 0, 2, 2, 1, 1],
        [1, 0, 1, 2, 2, 1],
        [1, 0, 1, 1, 2, 2],
        [1, 0, 2, 1, 2, 1],
        [1, 0, 2, 1, 1, 2],
        [1, 0, 1, 2, 1, 2],
        [2, 0, 2, 1, 1, 1],
        [2, 0, 1, 2, 1, 1],
        [2, 0, 1, 1, 2, 1],
        [2, 0, 1, 1, 1, 2],

        [1, 1, 0, 2, 2, 1],
        [1, 1, 0, 2, 1, 2],
        [1, 1, 0, 1, 2, 2],
        [2, 2, 0, 1, 1, 1],
        [2, 1, 0, 2, 1, 1],
        [2, 1, 0, 1, 2, 1],
        [2, 1, 0, 1, 1, 2],
        [1, 2, 0, 2, 1, 1],
        [1, 2, 0, 1, 2, 1],
        [1, 2, 0, 1, 1, 2],

        [2, 2, 1, 0, 1, 1],
        [1, 2, 2, 0, 1, 1],
        [2, 1, 2, 0, 1, 1],
        [1, 1, 1, 0, 2, 2],
        [1, 1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2, 1],
        [2, 1, 1, 0, 2, 1],
        [1, 1, 2, 0, 1, 2],
        [1, 2, 1, 0, 1, 2],
        [2, 1, 1, 0, 1, 2],

        [2, 2, 1, 1, 0, 1],
        [1, 2, 2, 1, 0, 1],
        [1, 1, 2, 2, 0, 1],
        [2, 1, 2, 1, 0, 1],
        [2, 1, 1, 2, 0, 1],
        [1, 2, 1, 2, 0, 1],
        [2, 1, 1, 1, 0, 2],
        [1, 2, 1, 1, 0, 2],
        [1, 1, 2, 1, 0, 2],
        [1, 1, 1, 2, 0, 2],

        [2, 2, 1, 1, 1, 0],
        [1, 2, 2, 1, 1, 0],
        [1, 1, 2, 2, 1, 0],
        [1, 1, 1, 2, 2, 0],
        [2, 1, 2, 1, 1, 0],
        [2, 1, 1, 2, 1, 0],
        [2, 1, 1, 1, 2, 0],
        [1, 2, 1, 2, 1, 0],
        [1, 2, 1, 1, 2, 0],
        [1, 1, 2, 1, 2, 0]
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
    dialog.id = 'IconCaptchaDialog';
    dialog.style.backgroundColor = '#4c4c4c';
    dialog.style.border = '3px solid rgba(0, 0, 0, 0.2)';
    dialog.style.borderRadius = '15px';
    dialog.style.padding = '10px';
    dialog.style.paddingLeft = '25px';
    dialog.style.paddingRight = '25px';

    var captcha = document.createElement('div');
    captcha.style.backgroundColor = '#ffffff';
    captcha.style.display = 'flex';
    captcha.style.justifyContent = 'center';
    captcha.style.gap = '5px';
    captcha.style.padding = '5px';
    captcha.style.border = '2px solid rgba(0, 0, 0, 0.2)'
    captcha.style.borderRadius = '10px';
    var text = document.createElement('p');
    text.innerHTML = 'Виберіть зображення, яке відображається рідше:';
    text.style.color = '#ffffff';

    var a1 = document.createElement('img');
    var a2 = document.createElement('img');
    var a3 = document.createElement('img');
    var a4 = document.createElement('img');
    var a5 = document.createElement('img');

    dialog.appendChild(text);

    captcha.appendChild(a1);
    captcha.appendChild(a2);
    captcha.appendChild(a3);
    captcha.appendChild(a4);
    captcha.appendChild(a5);

    dialog.appendChild(captcha);

    document.body.appendChild(dialog);

    var icons = [getIcon(), getIcon(), getIcon()];
    var images = [a1, a2, a3, a4, a5];
    var steps = [0, 1, 2, 3, 4];

    var pattern = getPattern();

    if (pattern.length >= 6) {
        var a6 = document.createElement('img');
        captcha.appendChild(a6);
        images.push(a6);
        steps.push(5);
    };

    if (pattern.length === 7) {
        var a7 = document.createElement('img');
        captcha.appendChild(a7);
        images.push(a7);
        steps.push(6);
    };

    for (var i of steps) {
        var image = images[i];
        var src = icons[pattern[i]];
        image.src = src;
        image.style.transform = 'rotate(' + (RandInt(0, 3) * 90).toString() + 'deg)';
        image.style.width = '48px';
        image.style.height = '48px';
        if (pattern[i] === 0) {
            image.addEventListener('click', success);
        } else {
            image.addEventListener('click', fail);
        };
    };

    dialog.showModal();
};

Captcha(function(){console.log("fail")}, function(){console.log("success")});
