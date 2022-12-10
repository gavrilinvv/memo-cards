<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="canonical" href="https://memo-cards.ru"/>
		<title>Memo-cards | игра для тренировки памяти</title>
		<link rel="stylesheet" href="/dest/css/style.css?<?=date('Hdmy')?>">
		<meta property="og:title" content="Memo-cards | игра для тренировки памяти"/>
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
	</head>
	<body>

		<div id="app">
			<div class="main">
				<div class="banner-left"></div>

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

				<div class="banner-right"></div>
			</div>

			<div class="banner-bottom"></div>

		</div>

		<script src="/dest/js/script.js?<?=date('Hdmy')?>"></script>
	</body>
</html>
