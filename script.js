// alert("It's working");

// *** Sidebar ***
const menuItems = document.querySelectorAll('.menu-item');

// *** Messages ***
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

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




// ************* Add on/ Improvement / Fixes to do Later **************
// 1. add ... after 6 or 7 messages to see more
// 2. shift toggle bar to right for small screen (fixes).
// 3. Improve searching (search people according to any random letter written combined if available (ex:- bdc, azx). ) ---- ***(check which type of searching work in popular website)


