// alert("It's working");

// *** Sidebar ***
const menuItems = document.querySelectorAll('.menu-item');

// *** Messages ***
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// *** Theme ***
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root'); // to change variable value of :root css


// ***** remove active class from all menu items ****
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // ***** !!!!! fix issue:- notification message open in right in small phone 
        // to show or hide notification tab & hide status(like 9+)
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});


// =============== Messages =================

// Searches Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();

    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    });
};

// Search Chat
messageSearch.addEventListener('keyup', searchMessage);

// Highlight messages section
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// ======== Theme and Display Customization ========

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// =============== Font Sizes ================

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
};

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector(); 

        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }

        // change font size of the Root HTML element
        document.querySelector('html').style.fontSize = fontSize;
    });
 
});


// ************* Add on/ Improvement / Fixes to do Later **************
// 1. add ... after 6 or 7 messages to see more
// 2. shift toggle bar to right for small screen (fixes).
// 3. Improve searching (search people according to any random letter written combined if available (ex:- bdc, azx). ) ---- ***(check which type of searching work in popular website)


