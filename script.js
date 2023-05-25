const markRead = document.querySelector('.header__mark-read');
const unread = document.querySelector('.header__unread');
const unreadNotifications = document.querySelector('.main__notification');

markRead.addEventListener('click', () => {
    const unread = unreadNotifications.getAttribute('data-unread');
    console.log(unread);

    if (unread === 'true') {
        unreadNotifications.setAttribute('data-unread', false);
        const read = unreadNotifications.getAttribute('data-unread');
        console.log(read);
    }
});


