<?php

/**
 * CSSをインラインで追加
 */
function output_inline_style()
{
    // reset.cssの読み込み
    wp_enqueue_style('reset-style', get_template_directory_uri() . '/reset.css');

    // swiper.min.cssの読み込み
    wp_enqueue_style('swiper-style', get_template_directory_uri() . '/js/plugins/swiper/swiper-bundle.min.css');
    // CSSスタイルファイルをキューに追加
    wp_register_style('style', false);
    wp_enqueue_style('style');
    // style.cssファイルを読み込み
    $css = file_get_contents(get_stylesheet_uri(), true);
    // インラインにCSSの内容を出力
    wp_add_inline_style('style', $css);
};
add_action('wp_enqueue_scripts', 'output_inline_style');


/**
 * 以下をサポート
 * 	title-tag
 */
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});


/**
 * 以下をサポート
 * 	投稿のサムネイル
 */
add_action('init', function () {
    add_theme_support('post-thumbnails');
});


// 新規投稿時に投稿表示順の初期値を挿入する
function my_hook($post_id, $post, $update)
{
    if ($update == false) { // 新規投稿のみ
        if (get_post_meta($post_id, '投稿表示順', true) == '') {
            update_post_meta($post_id, '投稿表示順',  9999);
        }
    }
}
add_action('save_post', 'my_hook', 10, 3);
