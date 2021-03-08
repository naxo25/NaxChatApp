let userId = '60teQqCd5dOD6b8wfgVBKA2en2O2';

self.addEventListener('push', e => {
    const data = e.data.json();
	console.log(data)
	console.log('notification')
});

function push() {
	let ult_chat;
	fetch('https://naxchatapp.herokuapp.com/chats')
	.then(response => response.json())
	.then(data => {
		ult_chat = data.reverse()[0]
		//console.log(data.reverse()[0])
	    self.registration.showNotification(ult_chat.name, {
	        body: ult_chat.chat,
	        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
	    });
	});
}

/*setInterval(function() {
	push()
}, 40000);*/