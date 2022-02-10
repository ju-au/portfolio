<?php get_header(); ?>

<h2 class="page-title page-title--works">実績紹介</h2>

<section class="works">
    <ul class="works__wrapper">
        <?php
        $args = [
            'post_type' => 'post',
            'meta_key' => '投稿表示順',
            'orderby' => ['meta_value_num' => 'ASC', 'date' => 'DECS'],
        ];
        $sub_query = new WP_Query($args);
        if ($sub_query->have_posts()) :
            while ($sub_query->have_posts()) :
                $sub_query->the_post();
        ?>

                <li class="works__item" id="<?php echo $post->post_name; ?>">
                    <figure class="works__thumbnail">
                        <a href="<?php echo get_post_meta(get_the_id(), 'URL', true); ?>" target="blank" class="works__link">
                            <?php
                            if (has_post_thumbnail()) {
                                the_post_thumbnail('large');
                            } else {
                                echo '<p>画像がありません</p>';
                            };
                            ?>
                        </a>
                        <!-- /.works__link -->
                    </figure>
                    <?php
                    $categories = get_the_category();
                    if ($categories) :
                        foreach ($categories as $category) :
                    ?>
                            <span class="works__category"><?php echo $category->cat_name; ?></span>
                    <?php
                        endforeach;
                    endif;
                    ?>
                    <h3 class="works__item-title"><?php echo get_the_title(); ?></h3>
                    <dl class="works__data">
                        <div class="works__data-item">
                            <dt class="works__data-item-title">制作期間</dt>
                            <dl class="works__data-item-body"><?php echo get_post_meta(get_the_id(), '制作期間', true); ?></dl>
                        </div>
                        <div class="works__data-item">
                            <dt class="works__data-item-title">ページ数</dt>
                            <dl class="works__data-item-body"><?php echo get_post_meta(get_the_id(), 'ページ数', true); ?></dl>
                        </div>
                        <div class="works__data-item">
                            <dt class="works__data-item-title">担当範囲</dt>
                            <dl class="works__data-item-body"><?php echo get_post_meta(get_the_id(), '担当範囲', true); ?></dl>
                        </div>
                    </dl>
                    <!-- /.works__data -->
                    <h4 class="works__conscious">意識した点</h4>
                    <?php echo str_replace('<p', '<p class="works__body"', get_the_content()); ?>
                    <div class="works__sp">
                        <h4 class="works__sp-title">SPレイアウト(一部)</h4>
                        <ul class="works__sp-photos">
                            <li class="works__sp-photo"><img src="<?php echo wp_get_attachment_image_src(get_post_meta(get_the_id(), 'SP画像1', true), 'large')[0]; ?>" alt=""></li>
                            <li class="works__sp-photo"><img src="<?php echo wp_get_attachment_image_src(get_post_meta(get_the_id(), 'SP画像2', true), 'large')[0]; ?>" alt=""></li>
                            <li class="works__sp-photo"><img src="<?php echo wp_get_attachment_image_src(get_post_meta(get_the_id(), 'SP画像3', true), 'large')[0]; ?>" alt=""></li>
                        </ul>
                    </div>
                    <!-- /.works__sp -->
                </li>
                <!-- /.works__item -->


        <?php endwhile;
        endif;
        wp_reset_postdata(); ?>
    </ul>
    <!-- /.works__wrapper -->

</section>
<!-- /.works -->

<?php get_footer(); ?>