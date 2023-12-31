import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public')); //turi buti pries visas puslapio nuorodas
// app.use(express.static('downloads')); gali b uti toks folderis sakykim, isskaidyta

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coming soon</title>
    
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">  
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
    <link rel="manifest" href="./favicon/site.webmanifest">
    <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    
        <link rel="stylesheet" href="./css/pages/home.css">
    </head>
    <body>
        <main>
            <section class="container bg-main hero">
                <div class="row-short">
                    <img class="logo" src="./img/logo.png" alt="Logo">
                    <h1 class="main-title">Coming soon</h1>
                    <p class="main-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos asperiores necessitatibus vitae harum accusantium voluptatibus odio! Sit praesentium consequuntur ipsam.</p>
                    <div class="clock">
                        <div class="time">
                            <div class="value">432</div>
                            <div class="label">Days</div>
                        </div>
                        <div class="time">
                            <div class="value">09</div>
                            <div class="label">Hours</div>
                        </div>
                        <div class="time">
                            <div class="value">37</div>
                            <div class="label">Minutes</div>
                        </div>
                        <div class="time">
                            <div class="value">39</div>
                            <div class="label">Seconds</div>
                        </div>
                    </div>
                    <div class="mouse"></div>
                </div>
            </section>
            <section class="container">
                <div class="row">
                    <div class="column">
                        <h2>About startup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit quas quos commodi minima voluptatem, sed odit tempore modi excepturi aliquam qui quaerat impedit alias sit numquam corporis recusandae cupiditate.</p>
                        <div class="bar-container">
    
                            <div class="progress-bar">
                                <div class="top">
                                    <div class="label">UX Design</div>
                                    <div class="value">90%</div>
                                </div>
                                <div class="bottom">
                                    <div class="progress">
                                        <div class="bar"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <div class="top">
                                    <div class="label">Web Design</div>
                                    <div class="value">86%</div>
                            </div>
                            <div class="bottom">
                                <div style="width: 86%;" class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">Web Development</div>
                                <div class="value">50%</div>
                            </div>
                            <div class="bottom">
                                <div style="width: 50%;" class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div class="column right-column">
                        <h2>Have any question?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur ullam quos alias, omnis aut excepturi quis aspernatur soluta necessitatibus sit nisi fuga labore optio voluptate, beatae eum velit tempore.</p>
                       <form class="form" action="">
                        <label for="name">Name</label>
                        <input id="name" type="text" placeholder="Name" autocomplete="name" required>
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Surname" autocomplete="email" required>
                        <label for="message">Message</label>
                        <textarea itemid="message" name="" id="message" placeholder="Message" required></textarea>
                        <button class="btn" type="submit">Send message</button>
                       </form>
                    </div>
                </div>
            </section>
        </main>
    
        <footer class="container bg-main">
            <div class="row">
              <div class="socials">
                  <a class="fa fa-facebook" href="#"></a>
                  <a class="fa fa-twitter" href="#"></a>
                  <a class="fa fa-dribbble" href="#"></a>
                  <a class="fa fa-tumblr" href="#"></a>
                  <a class="fa fa-linkedin" href="#"></a>
                  <a class="fa fa-instagram" href="#"></a>
                  <a class="fa fa-wifi" href="#"></a>
                </div>
                <a class="btn btn-circle fa fa-angle-up" href="#"></a>
            </div>
            <div class="row-short">
                <img class="footer-logo" src="./img/logo-white.png" alt="Logo">
                <div class="text-trio">
                    <p>Copyright &copy; 2023 <a href="#">Matrox</a></p>
                    <p>All rights reserver</p>
                    <p>Designed by <a href="#" target="_blank">TrendyTheme</a></p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel facere dolor accusantium vero modi <a href="#">Matrox</a> nihil nisi aperiam. Doloremque nihil nisi ducimus sunt ratione temporibus possimus, minima <a href="#">Matrox</a> laudantium.</p>
            </div>
        </footer>
       
    </body>
    </body>
    </html>`);
});

app.get('/about', (req, res) => {
    res.send('About page!');
});

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');
    console.log(req.method);
    res.send('SECRET!!!');
}); //pagauna visus, esvarbu, koks metodas 

app.get('/services?', (req, res) => {
    res.send('Services list page!');
}); // klaustukas reiskia, kad s raide gali buti nebutina

app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    if (req.params.bookId > 1000) {
        res.send('ERROR: tokia knyga neegzistuoja');
    }
    res.send(req.params);
});

app.get('*', (req, res) => {
    res.send('404 page!');
}); //bet koks kitas puslapis, ka klientas gali parasyti

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
}); //bet koks kitas requestas, nebutinai puslapis, viska pagauna

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}); // gaudo visas technines nesamones, serverio klaida, pvz neprisikonektina prie DB

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});