<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, user-scalable=no" />
		<link rel="canonical" href="https://memo-cards.ru"/>
		<title>Memo-cards | игра для тренировки памяти</title>
		<link rel="stylesheet" href="/dest/css/style.css?<?=date('Hdmy')?>">
		<meta property="og:title" content="Memo-cards | Игры для тренировки памяти"/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://memo-cards.ru" />
		<meta name="description" content="Тренируйте память играя в такие простые игры как найти пару и повторить путь. Онлайн, бесплатно и без регистрации" />
		<meta property="og:description" content="Тренируйте память играя в такие простые игры как найти пару и повторить путь. Онлайн, бесплатно и без регистрации" />
		<meta name="keywords" content="тренировка памяти, игра, карточки, найти пару, повторить путь" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="theme-color" content="#ffffff">
		<meta name="yandex-verification" content="aaf076f87cfa355c" />
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();
		for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
		k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(91622004, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true
		});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/91622004" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->

		<!-- Yandex.RTB -->
		<script>window.yaContextCb=window.yaContextCb||[]</script>
		<script src="https://yandex.ru/ads/system/context.js" async></script>
	</head>
	<body>

		<div id="app">
			<div class="main">
				<div class="banner-left" id="yandex_rtb_R-A-2090765-2"></div>

				<div class="content">
					<?include('screens/start.php');?>
					<?include('screens/game-modes.php');?>
					<?include('screens/pair-menu.php');?>
					<?include('screens/sequence-menu.php');?>
					<?include('screens/losing.php');?>
					<?include('screens/winning.php');?>
					<?include('screens/other-games.php');?>
					<?include('screens/playground.php');?>
				</div>

				<div class="banner-right" id="yandex_rtb_R-A-2090765-3"></div>
			</div>

			<div class="banner-bottom" id="yandex_rtb_R-A-2090765-1"></div>

		</div>

		<script src="/dest/js/script.js?<?=date('Hdmy')?>"></script>

		<script>
			function renderAds() {
				// left
				window.yaContextCb.push(()=>{
					Ya.Context.AdvManager.render({
						renderTo: 'yandex_rtb_R-A-2090765-2',
						blockId: 'R-A-2090765-2'
					})
				})
				// right
				window.yaContextCb.push(()=>{
					Ya.Context.AdvManager.render({
						renderTo: 'yandex_rtb_R-A-2090765-3',
						blockId: 'R-A-2090765-3'
					})
				})
				// bottom
				window.yaContextCb.push(()=>{
					Ya.Context.AdvManager.render({
						renderTo: 'yandex_rtb_R-A-2090765-1',
						blockId: 'R-A-2090765-1'
					})
				})

				// bottom new
				window.yaContextCb.push(()=>{
					Ya.Context.AdvManager.render({
						type: 'floorAd',
						blockId: 'R-A-2090765-4'
					})
				})

				setTimeout(function(){
					renderAds();
				}, 60000);
			}
			renderAds();
		</script>
	</body>
</html>
