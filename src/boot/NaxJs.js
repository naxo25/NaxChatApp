import { date } from 'quasar';
import ImageTools from 'boot/redim.js';

let url = 'asd';

const NaxJs = {

    hora(){
        let hora = date.formatDate(new Date(), 'HH:mm DD/MM/YY');
        return hora;
    },

    leerTxt(){
       let xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

       xmlhttp.onreadystatechange = function () {
           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               alert(xmlhttp.responseText);
           }
       }

       xmlhttp.open("GET", "doc.json", true);
       xmlhttp.send()
    },

    scrollV(altura, limite_px){	
    	let cant_limit = Math.floor(altura/limite_px + altura/500)
    	return cant_limit;
    	//let scroll = document.scrollingElement || document.body
	    // window.onscroll = () => {
	    //     altura total == altura documento - posición scroll   && this.$route.fullPath.includes('/Clientes')
	    //     console.log(this.$q.screen.height)
	    //     console.log(scroll.scrollHeight - window.scrollY - 100)
	    //     if ( (this.$q.screen.height >= scroll.scrollHeight - window.scrollY - 200) ) 
	    //     	cant_limit += 5;
	    // }
    },
	async resizeTools(event, calidad){
	  url = await ImageTools.resize(event, {
	      width: calidad,
	      height: calidad
	  }, async function(blob, didItResize) {
	      let asd = await window.URL.createObjectURL(blob);
		  preview.src = asd;
	      //change.click()
	  });
	  console.log(url)
	  return url
	},

}

export default NaxJs;