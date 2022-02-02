<!doctype html>
<html lang="ja">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta name="robots" content="index, follow">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="<?php bloginfo('description'); ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
  <header class="header">
    <h1 class="header__logo">
      <a href="<?php echo home_url(); ?>">
      </a>
    </h1>
    <!-- ハンバーガーメニュー用 -->
    <input type="checkbox" name="res" id="burger__switch" class="burger__switch">
    <label for="burger__switch" id="burger__btn" class="burger__btn">
      <span id="burger__line" class="burger__line"></span>
    </label>
    <label for="burger__switch" id="burger__background" class="burger__background"></label>
    <!-- /ハンバーガーメニュー用 -->

    <nav class="header__nav burger__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-item"><a href="<?php echo home_url(); ?>">ホーム</a></li>
        <li class="header__nav-item"><a href="<?php echo home_url(); ?>/about">私について</a></li>
        <li class="header__nav-item"><a href="<?php echo home_url(); ?>/work">実績</a></li>
        <li class="header__nav-item"><a href="<?php echo home_url(); ?>/plans">料金プラン</a></li>
        <li class="header__nav-item header__nav-item--enquiry"><a href="<?php echo home_url(); ?>/enquiry">お問い合わせ</a></li>
      </ul>
    </nav>

  </header>

  <nav class="fixed-link">
    <a href="https://twitter.com/junyaUeda" class="fixed-link__item fixed-link__item--twitter">
      <img src="<?php echo get_template_directory_uri(); ?>/images/twitter-icon.png" alt="ツイッターのアイコン">
    </a>
    <a href="<?php home_url(); ?>/enquiry" class="fixed-link__item fixed-link__item--enquiry">
      <img src="<?php echo get_template_directory_uri(); ?>/images/mail-icon.png" alt="お問い合わせのアイコン">
    </a>
  </nav>

  <main>
    <article>