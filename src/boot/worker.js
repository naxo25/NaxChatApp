console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
    });
});


/*function push() {
	let ult_chat;
	fetch('https://naxchatapp.herokuapp.com/chats')
	.then(response => response.json())
	.then(data => {
		ult_chat = data.reverse()[0]
		console.log(data.reverse()[0])
	    self.registration.showNotification(ult_chat.name, {
	        body: ult_chat.chat,
	        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
	    });
	});
}
push()

setInterval(function() {
	push()
}, 40000);*/