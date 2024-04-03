const RandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getPattern() {
    var lenght = 8;
    if (lenght === 5) {
        var subtype = RandInt(1, 3);
        if (subtype === 1) {
            var pattern = [0, 1, 1, 1, 1];
        } else if (subtype === 2) {
            var pattern = [0, 0, 1, 1, 1];
        } else {
            var pattern = [0, 1, 1, 2, 2];
        };
    } else if (lenght === 6) {
        var subtype = RandInt(1, 4);
        if (subtype === 1) {
            var pattern = [0, 1, 1, 1, 1, 1];
        } else if (subtype === 2) {
            var pattern = [0, 0, 1, 1, 1, 1];
        } else if (subtype === 3) {
            var pattern = [0, 1, 1, 2, 2, 2];
        } else {
            var pattern = [0, 1, 1, 1, 2, 2]
        };
    } else if (lenght === 7) {
        var subtype = RandInt(1, 7);
        if (subtype === 1) {
            var pattern = [0, 1, 1, 1, 1, 1, 1];
        } else if (subtype === 2) {
            var pattern = [0, 0, 1, 1, 1, 1, 1];
        } else if (subtype === 3) {
            var pattern = [0, 0, 0, 1, 1, 1, 1];
        } else if (subtype === 4) {
            var pattern = [0, 1, 1, 2, 2, 2, 2];
        } else if (subtype === 5) {
            var pattern = [0, 1, 1, 1, 2, 2, 2];
        } else if (subtype === 6) {
            var pattern = [0, 1, 1, 1, 1, 2, 2];
        } else {
            var pattern = [0, 1, 1, 2, 2, 3, 3]
        }
    } else {
        var subtype = RandInt(1, 11);
        if (subtype === 1) {
            var pattern = [0, 1, 1, 1, 1, 1, 1, 1];
        } else if (subtype === 2) {
            var pattern = [0, 0, 1, 1, 1, 1, 1, 1];
        } else if (subtype === 3) {
            var pattern = [0, 0, 0, 1, 1, 1, 1, 1];
        } else if (subtype === 4) {
            var pattern = [0, 2, 2, 1, 1, 1, 1, 1];
        } else if (subtype === 5) {
            var pattern = [0, 2, 2, 2, 1, 1, 1, 1];
        } else if (subtype === 6) {
            var pattern = [0, 2, 2, 2, 2, 1, 1, 1];
        } else if (subtype === 7) {
            var pattern = [0, 2, 2, 2, 2, 2, 1, 1];
        } else if (subtype === 8) {
            var pattern = [0, 0, 1, 1, 1, 2, 2, 2];
        } else if (subtype === 9) {
            var pattern = [0, 1, 1, 2, 2, 3, 3, 3];
        } else if (subtype === 10) {
            var pattern = [0, 1, 1, 1, 2, 2, 3, 3];
        } else if (subtype === 11) {
            var pattern = [0, 1, 1, 2, 2, 2, 3, 3];
        }
    };

    shuffle(pattern);
    return pattern
};

function getIcon() {
    return Icon(RandInt(1, 140).toString())
};

function Icon(id) {
    return 'https://cdn.jsdelivr.net/gh/suhorukovkirilo/iconcaptcha@b6e04dd0e153b4218b59f88580faf9c280ad8502/icons/' + id + '.png'
};

function CaptchaLoadStyles() {
    try {
        document.getElementById("IconCaptcha-Styling").outerHTML = "";
    } catch(error) {};
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://cdn.jsdelivr.net/gh/suhorukovkirilo/iconcaptcha';
    style.id = 'IconCaptcha-Styling';

    document.head.appendChild(style);
};

function Captcha(onfail, onsuccess, onclose) {
    CaptchaLoadStyles();

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

    dialog.appendChild(text);
    dialog.appendChild(captcha);

    var icons = [getIcon(), getIcon(), getIcon(), getIcon()];
    var steps = [0, 1, 2, 3, 4];

    var pattern = getPattern();

    if (pattern.length >= 6) {
        steps.push(5);
    };

    if (pattern.length >= 7) {
        steps.push(6);
    };

    if (pattern.length >= 8) {
        steps.push(7)
    }

    for (var i of steps) {
        var image = document.createElement('img');
        captcha.appendChild(image);
        var src = icons[pattern[i]];
        image.src = src;
        image.style.transform = 'rotate(' + (RandInt(0, 8) * 45).toString() + 'deg)';
        image.addEventListener('contextmenu', event => {
            event.preventDefault();
        });
        image.ondragstart = function() { return false; };
        if (pattern.length !== 7 && pattern.length !== 8) {
            image.style.width = '48px';
            image.style.height = '48px';
        } else if (pattern.length !== 8){
            image.style.width = '42px';
            image.style.height = '42px';
        } else {
            image.style.width = '36px';
            image.style.height = '36px';
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

CaptchaLoadStyles();
