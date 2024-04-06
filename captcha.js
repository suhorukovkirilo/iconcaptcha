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
    var lenght = RandInt(5, 8);
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
        document.getElementById(CaptchaConfig.styleid).outerHTML = "";
    } catch(error) {};
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = CaptchaConfig.style;
    style.id = 'IconCaptcha-Styling';

    document.head.appendChild(style);
};

function Captcha() {
    CaptchaLoadStyles();

    CapcthaOpened = true; 
    var dialog = document.createElement('dialog');
    dialog.style.height = '70px';
    dialog.id = CaptchaConfig.id;
    
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
        dialog.style.height = '160px';
        CaptchaProccess();
    })

    var loadText = document.createElement('div');
    loadText.innerHTML = CaptchaConfig.confirmText;
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

async function CaptchaProccess() {
    function success() {
        circle.style.backgroundColor = 'red';
        dialog.removeChild(countdown);

        while(captcha.firstChild) captcha.removeChild(captcha.lastChild);

        var success = document.createElement('img');
        success.src = CaptchaConfig.successIcon;
        success.classList.add('SuccessIcon')

        var successText = document.createElement('div');
        successText.innerHTML = CaptchaConfig.successText;
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
                CaptchaConfig.onsuccess();
            };
        }, RandInt(2500, 4000));
    };

    function fail() {
        circle.style.backgroundColor = 'red';
        dialog.removeChild(countdown);

        CaptchaAttempts -= 1;

        while(captcha.firstChild) captcha.removeChild(captcha.lastChild);

        var fail = document.createElement('img');
        fail.src = CaptchaConfig.failIcon;
        fail.classList.add('SuccessIcon');

        var failText = document.createElement('div');
        if (countdown.innerHTML === "0:00") {
            failText.innerHTML = CaptchaConfig.TimeIsUp;
        } else if (CaptchaAttempts > 1) {
            failText.innerHTML = CaptchaConfig.Attempts2;
        } else if (CaptchaAttempts === 1) {
            failText.innerHTML = CaptchaConfig.Attempts1;
        } else {
            failText.innerHTML = CaptchaConfig.Attempts0;
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

                    CaptchaProccess();
                    dialog.showModal();
                } else {
                    DestroyCaptcha();
                    CaptchaConfig.onfail();
                };
            };
        }, RandInt(2500, 4000));
    };

    var dialog = document.getElementById(CaptchaConfig.id);

    var captcha = document.createElement('div');
    captcha.classList.add('DialogCaptcha');

    var text = document.createElement('div');
    text.innerHTML = CaptchaConfig.hint;
    text.classList.add('Dialog2Text');

    var countdown = document.createElement('div');
    countdown.innerHTML = CaptchaConfig.timer;
    countdown.classList.add("DialogCountdown")

    setInterval(function(){
        var minutes = parseInt(countdown.innerHTML.split(":")[0]);
        var seconds = parseInt(countdown.innerHTML.split(":")[1]);
        var total = 60 * minutes + seconds - 1;

        var minutes = 0
        var seconds = 0
        while (total > 59) {
            minutes += 1
            total -= 60
        };

        seconds = total;
        minutes = minutes.toString();
        if (seconds > 9) {
            seconds = seconds.toString();
        } else {
            seconds = "0" + seconds.toString();
        }

        countdown.innerHTML = minutes + ":" + seconds;

        if (countdown.innerHTML === "0:00") {
            fail();
        }
    }, 950);

    dialog.appendChild(text);
    dialog.appendChild(captcha);
    dialog.appendChild(countdown)

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
        image.style.cursor = 'none';
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

        if (pattern[i] === 0) {
            image.addEventListener('click', success);
        } else {
            image.addEventListener('click', fail);
        };
    };  
    
    dialog.addEventListener('mousemove', function(event) {
        mouseX = event.x - dialog.offsetLeft - circle.offsetWidth / 2;
        mouseY = event.y - dialog.offsetTop - circle.offsetHeight / 2;
    });

    var circle = document.createElement('div');
    circle.classList.add("FollowingCircle")
    dialog.appendChild(circle);

    var mouseX = 0;
    var mouseY = 0;

    var following = setInterval(function() {
        if (circle.style.backgroundColor === 'red') {
            circle.style.visibility = 'hidden';
            clearInterval(following);
            return false;
        }

        if ((mouseX > 19 && mouseX < 359) && (mouseY > 68 && mouseY < 125)) {
            circle.style.visibility = 'visible';
        } else {
            circle.style.visibility = 'hidden';
        };

        if (mouseX < dialog.offsetWidth - 20 && mouseY < dialog.offsetHeight - 20) {
            circle.style.left = (circle.offsetLeft + (mouseX - circle.offsetLeft) / 8).toString() + 'px';
            circle.style.top = (circle.offsetTop + (mouseY - circle.offsetTop) / 8).toString() + 'px';
        };
    }, 20);
};

function DestroyCaptcha() {
    document.getElementById(CaptchaConfig.id).outerHTML = "";
    document.getElementById(CaptchaConfig.styleid).outerHTML = "";
    CaptchaAttempts = 3;
    CapcthaOpened = false;
};

var CaptchaConfig = {
    "onfail": function(){},
    "onsuccess": function(){},
    "onclose": function(){},
    "id": 'IconCaptchaDialog',
    "styleid": 'IconCaptcha-Styling',
    "style": "https://cdn.jsdelivr.net/gh/suhorukovkirilo/iconcaptcha@b6e04dd0e153b4218b59f88580faf9c280ad8502/captcha.css",
    "confirmText": 'Confirm that you are human',
    "successIcon": Icon('success'),
    "successText": 'Successfully!',
    "failIcon": Icon('fail'),
    "TimeIsUp": 'Oh, oh... Time is up',
    "Attempts2": 'Uh-uh... 2 attempts left',
    'Attempts1': 'Oops... 1 attempt left',
    'Attempts0': 'Oh-uh...',
    'hint': 'Select the image displayed the less frequent of times:',
    'timer': '1:00'
}

var CaptchaAttempts = 3;
var CapcthaOpened = false;

CaptchaLoadStyles();
