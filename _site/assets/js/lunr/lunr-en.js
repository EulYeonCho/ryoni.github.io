<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.19.2 by Michael Rose
  Copyright 2013-2019 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
-->
<html lang="ko" class="no-js">
  <head>
    <meta charset="utf-8">

<!-- begin _includes/seo.html --><title>누구에게나 시간이 동일하게 흐르지는 않는다</title>
<meta name="description" content="var idx = lunr(function () {   this.field(‘title’)   this.field(‘excerpt’)   this.field(‘categories’)   this.field(‘tags’)   this.ref(‘id’) ">


  <meta name="author" content="Ryoni Cho">


<meta property="og:type" content="website">
<meta property="og:locale" content="ko_KR">
<meta property="og:site_name" content="누구에게나 시간이 동일하게 흐르지는 않는다">
<meta property="og:title" content="누구에게나 시간이 동일하게 흐르지는 않는다">
<meta property="og:url" content="http://localhost:4000/assets/js/lunr/lunr-en.js">


  <meta property="og:description" content="var idx = lunr(function () {   this.field(‘title’)   this.field(‘excerpt’)   this.field(‘categories’)   this.field(‘tags’)   this.ref(‘id’) ">











  

  


<link rel="canonical" href="http://localhost:4000/assets/js/lunr/lunr-en.js">




<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    
      "@type": "Person",
      "name": "Ryoni Cho",
      "url": "http://localhost:4000/"
    
  }
</script>






<!-- end _includes/seo.html -->


<link href="/feed.xml" type="application/atom+xml" rel="alternate" title="누구에게나 시간이 동일하게 흐르지는 않는다 Feed">

<!-- https://t.co/dKP3o1e -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="/assets/css/main.css">

<!--[if IE]>
  <style>
    /* old IE unsupported flexbox fixes */
    .greedy-nav .site-title {
      padding-right: 3em;
    }
    .greedy-nav button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  </style>
<![endif]-->



    <!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<!-- end custom head snippets -->

  </head>

  <body class="layout--single">
    <nav class="skip-links">
  <h2 class="screen-reader-text">Skip links</h2>
  <ul>
    <li><a href="#site-nav" class="screen-reader-shortcut">Skip to primary navigation</a></li>
    <li><a href="#main" class="screen-reader-shortcut">Skip to content</a></li>
    <li><a href="#footer" class="screen-reader-shortcut">Skip to footer</a></li>
  </ul>
</nav>

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->

    

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        
          <a class="site-logo" href="/"><img src="/assets/images/main_blog/LOGO_Proto_M.png" alt=""></a>
        
        <a class="site-title" href="/">
          누구에게나 시간이 동일하게 흐르지는 않는다
          <span class="site-subtitle">#Develop #Magic #Life #Drawing</span>
        </a>
        <ul class="visible-links"><li class="masthead__menu-item">
              <a href="/about/">About</a>
            </li><li class="masthead__menu-item">
              <a href="/categories/">Categories</a>
            </li><li class="masthead__menu-item">
              <a href="/tags/">Tag</a>
            </li><li class="masthead__menu-item">
              <a href="/categories/Arts/">Arts</a>
            </li></ul>
        
        <button class="greedy-nav__toggle hidden" type="button">
          <span class="visually-hidden">토글 메뉴</span>
          <div class="navicon"></div>
        </button>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>


    <div class="initial-content">
      



<div id="main" role="main">
  
  <div class="sidebar sticky">
  


<div itemscope itemtype="https://schema.org/Person">

  
    <div class="author__avatar">
      
        <img src="/assets/images/main_blog/profile.jpg" alt="Ryoni Cho" itemprop="image">
      
    </div>
  

  <div class="author__content">
    
      <h3 class="author__name" itemprop="name">Ryoni Cho</h3>
    
    
      <div class="author__bio" itemprop="description">
        <p>Game Client Developer</p>

<p>Amateur Magician</p>

      </div>
    
  </div>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">팔로우</button>
    <ul class="author__urls social-icons">
      
        <li itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
          <i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="name">Seoul/Korea</span>
        </li>
      

      
        
          
        
          
        
          
        
          
        
          
            <li><a href="https://github.com/RyoniCho" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">GitHub</span></a></li>
          
        
          
            <li><a href="https://www.instagram.com/choeulyeon/" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i><span class="label">Instagram</span></a></li>
          
        
      

      

      
        <li>
          <a href="mailto:carpinus0@gmail.com">
            <meta itemprop="email" content="carpinus0@gmail.com" />
            <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">이메일</span>
          </a>
        </li>
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      <!--
  <li>
    <a href="http://link-to-whatever-social-network.com/user/" itemprop="sameAs" rel="nofollow noopener noreferrer">
      <i class="fas fa-fw" aria-hidden="true"></i> Custom Social Profile Link
    </a>
  </li>
-->
    </ul>
  </div>
</div>

  
  </div>



  <article class="page" itemscope itemtype="https://schema.org/CreativeWork">
    
    <meta itemprop="description" content="var idx = lunr(function () {  this.field(‘title’)  this.field(‘excerpt’)  this.field(‘categories’)  this.field(‘tags’)  this.ref(‘id’)">
    
    

    <div class="page__inner-wrap">
      
        <header>
          
          <!--
            single page 포스트제목 밑 시간 표시 수정 (기존에는 read_time->date로 변경)
          
          
          -->
          
        </header>
      

      <section class="page__content" itemprop="text">
        
        var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' 개 결과 발견</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});

        
      </section>

      <footer class="page__meta">
        
        


        
      </footer>

      <section class="page__share">
  
    <h4 class="page__share-title">공유하기</h4>
  

  <a href="https://twitter.com/intent/tweet?text=%20http%3A%2F%2Flocalhost%3A4000%2Fassets%2Fjs%2Flunr%2Flunr-en.js" class="btn btn--twitter" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="공유하기 Twitter"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i><span> Twitter</span></a>

  <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A4000%2Fassets%2Fjs%2Flunr%2Flunr-en.js" class="btn btn--facebook" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="공유하기 Facebook"><i class="fab fa-fw fa-facebook" aria-hidden="true"></i><span> Facebook</span></a>

  <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Flocalhost%3A4000%2Fassets%2Fjs%2Flunr%2Flunr-en.js" class="btn btn--linkedin" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="공유하기 LinkedIn"><i class="fab fa-fw fa-linkedin" aria-hidden="true"></i><span> LinkedIn</span></a>
</section>


      
    </div>

    
  </article>

  
  
</div>

    </div>

    

    <div id="footer" class="page__footer">
      <footer>
        <!-- start custom footer snippets -->

<!-- end custom footer snippets -->
        <div class="page__footer-follow">
  <ul class="social-icons">
    
      <li><strong>팔로우:</strong></li>
    

    
      
        
      
        
      
        
      
        
      
        
      
        
      
    

    <li><a href="/feed.xml"><i class="fas fa-fw fa-rss-square" aria-hidden="true"></i> 피드</a></li>
  </ul>
</div>

<div class="page__footer-copyright">&copy; 2020 Ryoni Cho. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>

      </footer>
    </div>

    
  <script src="/assets/js/main.min.js"></script>
  <script src="https://kit.fontawesome.com/4eee35f757.js"></script>










  </body>
</html>
