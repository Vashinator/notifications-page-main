const markRead = document.querySelector('.header__mark-read');
const unreadNotifications = document.querySelector('.main__dot');

markRead.addEventListener('click', () => {

    const unread = unreadNotifications.getAttribute('data-unread');
    console.log(unread);

    if (unread === 'true') {
        unreadNotifications.setAttribute('data-unread', false);
        unreadNotifications.style.display = 'none';
        console.log(read);
    }
});


