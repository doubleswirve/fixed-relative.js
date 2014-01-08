<?php  

$handle = fopen('./data/load.json', 'rb');
$posts  = json_decode(stream_get_contents($handle));
fclose($handle);

?>

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <title>Scroll Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/style.css">

    <!--[if lt IE 9]>
      <script src="/js/html5shiv.js"></script>
    <![endif]-->
    
  </head>

  <body>

    <div id="main">

      <div class="sticky">
        <nav class="wrapper">
          <ul class="container main-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>

      <div class="wrapper">

        <div class="container">

          <div class="row">

            <div class="col-md-9 posts">

            <?php foreach ($posts as $post) : ?>
              
              <div class="row">
                
                <div class="col-md-12">
                  
                  <article class="post">

                    <h1><?= $post->title; ?></h1>

                    <span><?= $post->author; ?></span>

                    <?= $post->content; ?>

                    <div class="share-wrapper">
                      <div class="share-wrapper-inner">
                        <span>Share</span>
                        <div class="share">
                          <a href="javascript:void(0)">Facebook</a>
                          <a href="javascript:void(0)">Twitter</a>
                          <a href="javascript:void(0)">Google+</a>
                          <a href="javascript:void(0)">Reddit</a>
                        </div>
                      </div>
                    </div>

                  </article>

                </div>

              </div>
              
            <?php endforeach; ?>
            
            </div>

            <div class="col-md-3">
              
              <div class="row">
                <div class="col-md-12">

                  <section class="sidebar">

                    <h2>Something Sidebar</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem quis deserunt sapiente fugit dolorem autem doloremque iusto quidem rerum est quia tenetur culpa molestiae iste et in saepe sit.</p>

                  </section>

                </div>
              </div>

              <div class="row">
                <div class="col-md-12">

                  <section class="sidebar">

                    <h2>Something Sidebar</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem quis deserunt sapiente fugit dolorem autem doloremque iusto quidem rerum est quia tenetur culpa molestiae iste et in saepe sit.</p>
                    
                  </section>

                </div>
              </div>

              <div class="row">
                <div class="col-md-12">

                  <section class="sidebar">

                    <h2>Something Sidebar</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem quis deserunt sapiente fugit dolorem autem doloremque iusto quidem rerum est quia tenetur culpa molestiae iste et in saepe sit.</p>
                    
                  </section>

                </div>
              </div>

            </div>
  
          </div>

        </div>

      </div>

    </div>

    <script type="text/template" id="js-tpl">
      <div class="row">
                
        <div class="col-md-12">
          
          <article class="post">

            <h1>{{title}}</h1>

            <span>{{author}}</span>

            {{content}}

            <div class="share-wrapper">
              <div class="share-wrapper-inner">
                <span>Share</span>
                <div class="share">
                  <a href="javascript:void(0)">Facebook</a>
                  <a href="javascript:void(0)">Twitter</a>
                  <a href="javascript:void(0)">Google+</a>
                  <a href="javascript:void(0)">Reddit</a>
                </div>
              </div>
            </div>

          </article>

        </div>

      </div>
    </script>

    <script type="text/template" id="ad-tpl">
      <div class="row">
                
        <div class="col-md-12">
          
          <article class="post ad">

            <h1>Buy something!</h1>

          </article>

        </div>

      </div>
    </script>



    <script src="/js/jquery.js"></script>
    <script src="/js/fixed-relative.js"></script>
    <script src="/js/inf.js"></script>
    <script src="/js/url.js"></script>
    <script src="/js/script.js"></script>

  </body>

</html>
