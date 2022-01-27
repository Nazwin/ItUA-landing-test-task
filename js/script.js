

let loader = document.querySelector('.loading');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.burger__btn');
let services = document.querySelector('.services__list');
let firstNew = document.querySelector('.news__first');
let news = document.querySelector('.news__list>.swiper-wrapper');

window.onload = async function(){
	await fetch('https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=152&ELEMENT_ORDER[ID]=ASC')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.result.forEach(item => {
			services.innerHTML +=
			`<div class="serv__item item-serv">
				<div class="item-serv__image">
					<img src="img/service_id${item.ID}.png" alt="">
				</div>
				<div class="item-serv__wrapper">
					<div class="item-serv__title">
						${item.NAME}
					</div>
					<div class="item-serv__description">
						${item.PREVIEW_TEXT}
					</div>
					<a href="${item.CODE}" class="item-serv__link">
					Подробнее<span class="material-icons-outlined">east</span>
					</a>
				</div>
			</div>`;
		})
	});

	let createSlider = async function(){
		await fetch('https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=153&ELEMENT_ORDER[ID]=DESC')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.result.forEach((item, i) => {
				if(i === 0) {
					firstNew.innerHTML =
					`<div class="first-new__image">
						<img src="img/news/newsid${item.ID}_image.png" alt="news">
					</div>
	     			<div class="first-new__body">
	     				<div class="first-new__info">
	     					<span class="first-new__topic topic-new">SEO</span>
	     					<span class="first-new__time time-new">5 мин чтения</span>
	     				</div>
	     				<div class="first-new__title title-new">${item.NAME}</div>
	     				<div class="first-new__description">
	     					${item.PREVIEW_TEXT}
	     				</div>
	     				<a href="${item.CODE}" class="first-new__link">
	     					Читать дальше
	     					<span class="material-icons-outlined">east</span>
	     				</a>
	     			</div>`;
				} else {
					news.innerHTML +=
					`<div class="news__item swiper-slide item-new">
						<div class="item-new__image">
							<img src="img/news/newsid${item.ID}_image.png" alt="">
						</div>
						<div class="item-new__info">
							<div class="first-new__info">
									<span class="first-new__topic topic-new">SEO</span>
									<span class="first-new__time time-new">5 мин чтения</span>
								</div>
								<a href="${item.CODE}" class="first-new__title title-new">${item.NAME}</a>
						</div>
					</div>`;
				}
			})
		});
		let swiper = new Swiper(".news__list", {
			slidesPerView: 'auto',
			spaceBetween: 30,
			freeMode: true,
			loop: false
			// breakpoints: {
			// 	768: {
			// 		slidesPerView: 2
					
			// 	},
			// 	1024: {
			// 		slidesPerView: 3
					
			// 	}
			// }
		});
	}()

	loader.classList.add("ready")
	document.body.classList.remove("noscroll")
	setTimeout(function(){
		loader.classList.add("hidden")
	}, 650)


	burger.addEventListener('click', ()=>{
		burger.classList.toggle("active");
		menu.classList.toggle("open");
		document.body.classList.toggle("noscroll");
	})

}







