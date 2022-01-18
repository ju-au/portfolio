</article>

</main>

<footer class="footer">
    <div class="footer__enquiry" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/footer.webp');">
        <h3 class="footer__title">お問い合わせ</h3>
        <p class="footer__copy">
            お見積りやご相談を受けてつけています。<br>
            お気軽にお問い合わせください。
        </p>
        <a href="<?php home_url(); ?>/enquiry" class="button footer__button">お問い合わせをする</a>
    </div>
    <!-- /.footer__enquiry -->
    <nav class="footer__nav">
        <ul class="footer__navUl">
            <li class="footer__navItem"><a href="<?php home_url() ?>/">ホーム</a></li>
            <li class="footer__navItem"><a href="<?php home_url() ?>/about">私について</a></li>
            <li class="footer__navItem"><a href="<?php home_url() ?>/work">実績</a></li>
            <li class="footer__navItem"><a href="<?php home_url() ?>/plans">料金プラン</a></li>
            <li class="footer__navItem"><a href="<?php home_url() ?>/enquiry">お問い合わせ</a></li>
        </ul>
        <!-- /.footer__navUl -->
    </nav>
    <!-- /.footer__nav -->
    <p class="footer__copyright">&copy;Junya Ueda 2022 All Rights Reserved</p>
</footer>


<script src="<?php echo get_template_directory_uri(); ?>/js/plugins/swiper/swiper-bundle.min.js"></script>
<script type="module" src="<?php echo get_template_directory_uri(); ?>/index.js"></script>

<?php wp_footer(); ?>

</body>

</html>