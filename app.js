$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight()//высота intro
		scrollOffset = $(window).scrollTop(); //записывается какой скролл есть сейчас


	/* Fixed header*/
	checkScroll(scrollOffset);	//как только зашли на страницу выполняется функция checkScroll и отправляются туда данные scrollOffset

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();// обновляэм количество проскролленых пикселй

		checkScroll(scrollOffset); // опять добавляем функцию и отправляем туда новые значения
		

	});

	function checkScroll(scrollOffset){
		
		if(scrollOffset >= introH){
			header.addClass("fixed"); // добавляем класс fixed
		} else {
			header.removeClass("fixed"); // удаляем класс fixed
		}
	}



	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event){/*наблюдаем за атрибутом data-scroll при клике*/
		event.preventDefault();/*отменим стандартное поведение ссылки*/
	
		var $this = $(this),/*Сохраняем значение в отдельную переменную что бы много раз не обращаться к элементу this*/
			blockId = $this.data('scroll'),/* сохраняем в переменную значение из атрибута data, то есть scroll (this - конкретный элемент на который мы нажали)*/
			blockOffset = $(blockId).offset().top; /*получаем позицию элемента от верха страници с помощью offset().top*/
		
			$("#nav a").removeClass("active");/*Удаляем класс active у всех ссылок блока nav*/
			$this.addClass("active");/*Добавляем к ссылке на которую нажали класс active*/

		$("html, body").animate({ /*Для плавного скрола*/
			scrollTop: blockOffset
		}, 500);
	});


	/*Menu nav toggle*/
	$("#nav__toggle").on("click", function(event){ /*Следим за кликом по ид nav__toggle*/

		event.preventDefault();/*Отменяем стандартное повеедние кнопки*/
		
		$(this).toggleClass("active"); /*Для данного элемента будем выдавать либо убирать класс active*/
		$("#nav").toggleClass("active");/*Добавляем или удаляем класс active в меню*/


	});


/*	// Hiding burger menu 
    $("#nav a").on("click", function(event){
        event.preventDefault();
        $("#nav_toggle").removeClass("active");
        $("#nav").hide();
        $("#nav-toggle").removeClass("active");
    });*/


	/*Collaps*/
	$("[data-collapse]").on("click", function(event){/*следим за кликом по єлементу с атрибутом data-collapse*/
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
	});


	/*Slider*/
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});


});