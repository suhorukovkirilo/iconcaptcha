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
        [1, 1, 2, 1, 2, 0],

        [0, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0],

        [0, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0],

        [0, 1, 0, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 0],

        [0, 2, 2, 1, 1, 1, 1],
        [0, 1, 2, 2, 1, 1, 1],
        [0, 1, 1, 2, 2, 1, 1],
        [0, 1, 1, 1, 2, 2, 1],
        [0, 1, 1, 1, 1, 2, 2],
        [0, 2, 1, 2, 1, 1, 1],
        [0, 2, 1, 1, 2, 1, 1],
        [0, 2, 1, 1, 1, 2, 1],
        [0, 2, 1, 1, 1, 1, 2],
        [0, 1, 2, 1, 2, 1, 1],
        [0, 1, 2, 1, 1, 2, 1],
        [0, 1, 2, 1, 1, 1, 2],
        [0, 1, 1, 2, 1, 2, 1],
        [0, 1, 1, 2, 1, 1, 2],
        [1, 0, 2, 2, 1, 1, 1],
        [1, 0, 1, 2, 2, 1, 1],
        [1, 0, 1, 1, 2, 2, 1],
        [1, 0, 1, 1, 1, 2, 2],
        [1, 0, 2, 1, 2, 1, 1],
        [1, 0, 2, 1, 1, 2, 1],
        [1, 0, 2, 1, 1, 1, 2],
        [1, 0, 1, 2, 1, 2, 1],
        [1, 0, 1, 2, 1, 1, 2],
        [1, 0, 1, 1, 2, 1, 2],
        [2, 0, 2, 1, 1, 1, 1],
        [2, 0, 1, 2, 1, 1, 1],
        [2, 0, 1, 1, 2, 1, 1],
        [2, 0, 1, 1, 1, 2, 1],
        [2, 0, 1, 1, 1, 1, 2],
        [2, 2, 0, 1, 1, 1, 1],
        [1, 1, 0, 2, 2, 1, 1],
        [1, 1, 0, 1, 2, 2, 1],
        [1, 1, 0, 1, 1, 2, 2],
        [1, 1, 0, 2, 1, 2, 1],
        [1, 1, 0, 2, 1, 1, 2],
        [1, 1, 0, 1, 2, 1, 2],
        [2, 1, 0, 2, 1, 1, 1],
        [2, 1, 0, 1, 2, 1, 1],
        [2, 1, 0, 1, 1, 2, 1],
        [2, 1, 0, 1, 1, 1, 2],
        [1, 2, 0, 2, 1, 1, 1],
        [1, 2, 0, 1, 2, 1, 1],
        [1, 2, 0, 1, 1, 2, 1],
        [1, 2, 0, 1, 1, 1, 2],
        [1, 1, 1, 0, 1, 1, 1],
        [2, 2, 1, 0, 1, 1, 1],
        [1, 2, 2, 0, 1, 1, 1],
        [2, 1, 2, 0, 1, 1, 1],
        [1, 1, 1, 0, 2, 2, 1],
        [1, 1, 1, 0, 1, 2, 2],
        [1, 1, 1, 0, 2, 1, 2],
        [2, 1, 1, 0, 2, 1, 1],
        [2, 1, 1, 0, 1, 2, 1],
        [2, 1, 1, 0, 1, 1, 2],
        [1, 2, 1, 0, 2, 1, 1],
        [1, 2, 1, 0, 1, 2, 1],
        [1, 2, 1, 0, 1, 1, 2],
        [1, 1, 2, 0, 2, 1, 1],
        [1, 1, 2, 0, 1, 2, 1],
        [1, 1, 2, 0, 1, 1, 2],
        [2, 2, 1, 1, 0, 1, 1],
        [1, 2, 2, 1, 0, 1, 1],
        [1, 1, 2, 2, 0, 1, 1],
        [2, 1, 2, 1, 0, 1, 1],
        [2, 1, 1, 2, 0, 1, 1],
        [1, 2, 1, 2, 0, 1, 1],
        [1, 1, 1, 1, 0, 2, 2],
        [1, 1, 1, 2, 0, 2, 1],
        [1, 1, 2, 1, 0, 2, 1],
        [1, 2, 1, 1, 0, 2, 1],
        [2, 1, 1, 1, 0, 2, 1],
        [1, 1, 1, 2, 0, 1, 2],
        [1, 1, 2, 1, 0, 1, 2],
        [1, 2, 1, 1, 0, 1, 2],
        [2, 1, 1, 1, 0, 1, 2],
        [2, 2, 1, 1, 1, 0, 1],
        [1, 2, 2, 1, 1, 0, 1],
        [1, 1, 2, 2, 1, 0, 1],
        [1, 1, 1, 2, 2, 0, 1],
        [2, 1, 2, 1, 1, 0, 1],
        [2, 1, 1, 2, 1, 0, 1],
        [2, 1, 1, 1, 2, 0, 1],
        [1, 2, 1, 2, 1, 0, 1],
        [1, 2, 1, 1, 2, 0, 1],
        [1, 1, 2, 1, 2, 0, 1],
        [1, 1, 1, 1, 2, 0, 2],
        [1, 1, 1, 2, 1, 0, 2],
        [1, 1, 2, 1, 1, 0, 2],
        [1, 2, 1, 1, 1, 0, 2],
        [2, 1, 1, 1, 1, 0, 2],
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
    LoadStyles();

    CapcthaOpened = true; 
    var dialog = document.createElement('dialog');
    dialog.style.height = '70px';
    dialog.id = 'IconCaptchaDialog';
    
    var close = document.createElement('img');
    close.src = Icon('close');
    close.classList.add('DialogClose');
    close.addEventListener('click', function() {
        dialog.close();
        DestroyCaptcha();
        onclose();
    });

    var copyright = document.createElement('div');
    copyright.innerHTML = '©Icon Captcha';
    copyright.classList.add('DialogCopyright')

    var load = document.createElement('div');
    load.classList.add('DialogLoading');
    load.addEventListener('click', function() {
        dialog.removeChild(load);
        dialog.removeChild(loadText)
        dialog.style.height = '130px';
        CaptchaProccess(onfail, onsuccess, onclose);
    })

    var loadText = document.createElement('div');
    loadText.innerHTML = 'Підтвердіть, що ви людина';
    loadText.classList.add('Dialog1Text');

    var coverDiv = document.createElement('div');
    coverDiv.classList.add('CoverDiv');
    
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
        success.classList.add('SuccessIcon')

        var successText = document.createElement('div');
        successText.innerHTML = 'Успішно!';
        successText.classList.add('SuccessText')

        captcha.style.alignItems = 'center';
        captcha.style.justifyContent = 'left'
        captcha.appendChild(success);
        captcha.appendChild(successText);

        timer = setInterval(function() {
            clearInterval(timer);
            if (CapcthaOpened) {
                dialog.close();
                DestroyCaptcha();
                onsuccess();
            };
        }, RandInt(2500, 4000));
    };

    function fail() {
        CaptchaAttempts -= 1;

        while(captcha.firstChild) captcha.removeChild(captcha.lastChild);

        var fail = document.createElement('img');
        fail.src = Icon('fail');
        fail.classList.add('SuccessIcon');

        var failText = document.createElement('div');
        if (CaptchaAttempts > 1) {
            failText.innerHTML = 'Ой-ой... Лишилось ' + CaptchaAttempts.toString() + ' спроби';
        } else if (CaptchaAttempts === 1) {
            failText.innerHTML = 'Ой-ой... Лишилось 1 спроба';
        } else {
            failText.innerHTML = 'Ой-ой...';
        };
        failText.classList.add('FailText');

        captcha.style.alignItems = 'center';
        captcha.style.justifyContent = 'left'
        captcha.appendChild(fail);
        captcha.appendChild(failText);

        timer = setInterval(function() {
            clearInterval(timer);
            if (CapcthaOpened === true) {
                dialog.innerHTML = '';
                dialog.close();
                if (CaptchaAttempts > 0) {
                    var close = document.createElement('img');
                    close.src = Icon('close');
                    close.classList.add('DialogClose');
                    close.addEventListener('click', function() {
                        dialog.close();
                        CapcthaOpened = false;
                        onclose();
                    });

                    var copyright = document.createElement('div');
                    copyright.innerHTML = '©Icon Captcha';
                    copyright.classList.add('DialogCopyright');

                    var coverDiv = document.createElement('div');
                    coverDiv.classList.add('CoverDiv');
                    
                    coverDiv.appendChild(copyright);
                    coverDiv.appendChild(close);
                    dialog.appendChild(coverDiv);

                    CaptchaProccess(onfail, onsuccess, onclose);
                    dialog.showModal();
                } else {
                    DestroyCaptcha();
                    onfail();
                };
            };
        }, RandInt(2500, 4000));
    };

    var dialog = document.getElementById('IconCaptchaDialog');

    var captcha = document.createElement('div');
    captcha.classList.add('DialogCaptcha');

    var text = document.createElement('div');
    text.innerHTML = 'Виберіть зображення, яке відображається рідше:';
    text.classList.add('Dialog2Text');

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
        image.addEventListener('contextmenu', event => {
            event.preventDefault();
        });
        image.ondragstart = function() { return false; };
        if (pattern.length !== 7) {
            image.style.width = '48px';
            image.style.height = '48px';
        } else {
            image.style.width = '42px';
            image.style.height = '42px';
        }
        image.style.cursor = 'pointer';
        if (pattern[i] === 0) {
            image.addEventListener('click', success);
        } else {
            image.addEventListener('click', fail);
        };
    };    
};

function DestroyCaptcha() {
    document.getElementById('IconCaptchaDialog').outerHTML = "";
    document.getElementById("IconCaptcha-Styling").outerHTML = "";
    CaptchaAttempts = 3;
    CapcthaOpened = false;
};

var CaptchaAttempts = 3;
var CapcthaOpened = false;

Captcha(function(){console.log("fail")}, function(){console.log("success")});
