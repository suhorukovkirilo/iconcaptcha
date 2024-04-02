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
    return Icon(RandInt(1, 140).toString())
};

function Icon(id) {
    return 'https://raw.githubusercontent.com/suhorukovkirilo/iconcaptcha/main/icons/' + id + '.png'
};

function Captcha(onfail, onsuccess, onclose) {
    var dialog = document.createElement('dialog');
    dialog.id = 'IconCaptchaDialog';
    dialog.style.backgroundColor = '#4c4c4c';
    dialog.style.border = '3px solid rgba(0, 0, 0, 0.2)';
    dialog.style.borderRadius = '15px';
    dialog.style.padding = '10px';
    dialog.style.paddingLeft = '25px';
    dialog.style.paddingRight = '25px';
    dialog.style.width = '340px';
    dialog.style.height = '70px';

    var close = document.createElement('img');
    close.src = Icon('close');
    close.style.width = '16px';
    close.style.height = '16px';
    close.style.position = 'relative';
    close.style.top = '0.1%';
    close.style.left = '107%';
    close.addEventListener('click', function() {
        dialog.close();
        onclose();
    });

    var copyright = document.createElement('div');
    copyright.innerHTML = '©Icon Captcha';
    copyright.style.position = 'relative';
    copyright.style.top = '0.1%';
    copyright.style.left = '-7%';
    copyright.style.color = 'rgba(255, 255, 255, 0.25)';

    var load = document.createElement('div');
    load.style.backgroundColor = '#4c4c4c';
    load.style.borderRadius = '50%';
    load.style.border = '6px solid #52b3d9';
    load.style.width = '24px';
    load.style.height = '24px';
    load.style.position = 'absolute';
    load.style.top = '42px';
    load.style.left = '18px';


    var loadText = document.createElement('div');
    loadText.innerHTML = 'Підтвердіть, що ви людина';
    loadText.style.color = 'white';
    loadText.style.fontSize = '22px';
    loadText.style.position = 'absolute';
    loadText.style.top = '45px';
    loadText.style.left = '70px';

    var loadAnimation = document.createElement('style');
    loadAnimation.innerHTML = `@keyframes IconCaptchaLoading {
        0% {
            transform: scale(1);
        }

        50% {
            transform:  scale(1.3);
        }

        100% {
            transform: scale(1);
        }
    }`;

    document.head.appendChild(loadAnimation);
    load.style.animation = '2s linear infinite IconCaptchaLoading';

    var coverDiv = document.createElement('div');
    coverDiv.style.display = 'flex';
    coverDiv.style.width = '66%';
    
    coverDiv.appendChild(copyright);
    coverDiv.appendChild(close);
    dialog.appendChild(coverDiv);
    dialog.appendChild(load);
    dialog.appendChild(loadText)

    document.body.appendChild(dialog);

    dialog.showModal();

};

function CaptchaProccess(onfail, onsuccess, onclose) {
    function success() {
        while(captcha.firstChild) captcha.removeChild(captcha.lastChild);

        var success = document.createElement('img');
        success.src = Icon('success');
        success.style.width = '48px';
        success.style.height = '48px';
        success.style.marginLeft = '20px';
        success.style.marginRight = '5px';

        var successText = document.createElement('div');
        successText.innerHTML = 'Успішно!';
        successText.style.color = 'darkgreen';
        successText.style.fontSize = '32px';

        captcha.style.alignItems = 'center';
        captcha.style.justifyContent = 'left'
        captcha.appendChild(success);
        captcha.appendChild(successText);

        timer = setInterval(function() {
            dialog.innerHTML = '';
            dialog.close();
            clearInterval(timer);
            onsuccess();
        }, RandInt(2000, 3000));
    };

    function fail() {
        CaptchaAttempts -= 1;

        while(captcha.firstChild) captcha.removeChild(captcha.lastChild);

        var fail = document.createElement('img');
        fail.src = Icon('fail');
        fail.style.width = '48px';
        fail.style.height = '48px';
        fail.style.marginLeft = '20px';
        fail.style.marginRight = '5px';

        var failText = document.createElement('div');
        if (CaptchaAttempts > 1) {
            failText.innerHTML = 'Ой-ой... Лишилось ' + CaptchaAttempts.toString() + ' спроби';
        } else if (CaptchaAttempts === 1) {
            failText.innerHTML = 'Ой-ой... Лишилось 1 спроба';
        } else {
            failText.innerHTML = 'Ой-ой...';
        };
        failText.style.color = 'darkred';
        failText.style.fontSize = '24px';

        captcha.style.alignItems = 'center';
        captcha.style.justifyContent = 'left'
        captcha.appendChild(fail);
        captcha.appendChild(failText);

        timer = setInterval(function() {
            dialog.innerHTML = '';
            dialog.close();
            clearInterval(timer);
            if (CaptchaAttempts > 0) {
                Captcha(onfail, onsuccess, onclose);
            } else {
                onfail();
            };
        }, RandInt(2000, 3000));
    };

    var dialog = document.getElementById('IconCaptchaDialog');

    var captcha = document.createElement('div');
    captcha.style.backgroundColor = '#ffffff';
    captcha.style.display = 'flex';
    captcha.style.justifyContent = 'center';
    captcha.style.gap = '5px';
    captcha.style.padding = '5px';
    captcha.style.border = '2px solid rgba(0, 0, 0, 0.2)';
    captcha.style.borderRadius = '10px';

    var text = document.createElement('div');
    text.innerHTML = 'Виберіть зображення, яке відображається рідше:';
    text.style.color = '#ffffff';
    text.style.marginTop = '15px';
    text.style.marginBottom = '10px';

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
        image.style.cursor = 'pointer';
        if (pattern[i] === 0) {
            image.addEventListener('click', success);
        } else {
            image.addEventListener('click', fail);
        };
    };    
};

var CaptchaAttempts = 3;

Captcha(function(){console.log("fail")}, function(){console.log("success")});

var dialog = document.getElementById('IconCaptchaDialog')
console.log(dialog.offsetWidth)
console.log(dialog.offsetHeight)
