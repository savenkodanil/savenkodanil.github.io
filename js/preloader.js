// /**********************************
// **************PRELOADER************
// **********************************/
// let container = document.querySelector(".container");
// 	let ring = document.querySelector(".ring-frame");
// 	let disc = document.querySelector(".disc-frame");
// 	let i = 1;
// 	let num = 200;
// 	let radius = 150;
// 	let lim = 4;
	
// 	for (i; i < lim; i++){
// 		let span = document.createElement('span');
// 		let disk = document.createElement('span')
// 		span.setAttribute("class", "ring");
// 		disk.setAttribute("class", "disc");	
// 		span.style.height = `${(i*20) + num}px`;
// 	    span.style.width = `${(i*20) + num}px`;
// 		disk.style.animationDelay = `${i-.8}s`;
// 		ring.append(span);
// 		disc.append(disk);
// 	}

// let mask = document.querySelector('.container'); 
// let body = document.querySelector('body'); 
// let cursor = document.querySelector('.whole__cursor'); 

// window.addEventListener('load' , () => {
//   mask.classList.add('hide');
//   body.classList.add('ovf-auto');
//   cursor.classList.add('active');

//   setTimeout(() => {
//     mask.remove();
//   }, 600);
// });
