import Head from 'next/head';
import 'app/front/css/custom.css';
import 'app/front/css/demo.css';
import 'app/front/css/style.min.css';

export default function Page() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Devenir arbitre de football en Suisse - gag-ge.ch</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="rIJ1T3Be19C66Q3AiWKX47WSvKMTBxEFXhdEdep9" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://gag-ge.ch/front/default/images/favicon.png" />
        <link href="https://gag-ge.ch/front/default/node_modules/aos/dist/aos.css" rel="stylesheet" />
        <link href="https://gag-ge.ch/front/default/node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css" rel="stylesheet" />
        <link href="https://gag-ge.ch/front/default/css/style.min.css" rel="stylesheet" />
        <link href="https://gag-ge.ch/front/default/css/demo.css" rel="stylesheet" />
        <link href="https://gag-ge.ch/front/default/css/custom.css" rel="stylesheet" />
      </Head>

      {/* Loader */}
      <div className="preloader">
        <div className="loader">
          <div className="loader__figure"></div>
          <p className="loader__label">GAG GE</p>
        </div>
      </div>

      <div id="main-wrapper">
        <div className="topbar">
          <div className="header3">
            <div className="po-relative">
              <div className="h3-topbar">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <ul className="list-inline d-none d-md-block">
                        <li>
                          <a href="mailto:info@gag-ge.ch">
                            <i className="icon-Mail info-icon"></i> info@gag-ge.ch
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-7 t-r">
                      <ul className="list-inline d-none d-lg-block">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="vdevider"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://gag-ge.ch/fr/login">
                            <i className="icon-Lock-User info-icon"></i> Se connecter
                          </a>
                        </li>
                      </ul>
                      <button className="navbar-toggler d-flex ms-auto d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#header3" aria-controls="header3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h3-navbar">
                <div className="container">
                  <nav className="navbar navbar-expand-lg h3-nav">
                    <button className="navbar-toggler d-block ms-auto d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#header3" aria-controls="header3" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="ti-menu"></span>
                    </button>
                    <a className="navbar-brand" href="https://www.gag-ge.ch">
                      <img src="https://gag-ge.ch/front/default/images/logo.png" alt="wrapkit" />
                    </a>
                    <div className="collapse navbar-collapse hover-dropdown" id="header3">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="https://gag-ge.ch/fr">Accueil</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://gag-ge.ch/fr/groupe-arbitres-genevois">Qui sommes-nous?</a>
                        </li>
                      </ul>
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="https://gag-ge.ch/fr/devenir-arbitre">Devenir arbitre</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://gag-ge.ch/fr/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Devenir arbitre */}
        <section className="bg-light p-4 my-3 rounded">
          <div className="container">
            <div className="row mini-spacer">
              <div className="col-lg-6 order-2 order-lg-1">
                <h3 className="text-uppercase">Devenir arbitre de football</h3>
                <p>Tu aimes le football ? Prendre des décisions ? Tu possèdes de nombreuses qualités de meneur ? Et tu souhaites t'engager dans une fonction à responsabilités ?</p>
                <p>Voici les conditions pour devenir arbitre:</p>
                <ul className="list-block m-b-30">
                  <li><i className="sl-icon-check text-primary"></i> Etre agé(e) entre 15 et au maximum 45 ans</li>
                  <li><i className="sl-icon-check text-primary"></i> Avoir une bonne condition physique</li>
                  <li><i className="sl-icon-check text-primary"></i> Avoir une bonne connaissance de la langue française (oral / écrit)</li>
                  <li><i className="sl-icon-check text-primary"></i> Réussir le test d'entrée</li>
                  <li><i className="sl-icon-check text-primary"></i> Suivre la formation des arbitres débutants</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="p-20">
                  <img src="https://gag-ge.ch/front/default/images/arbitre_02.jpg" alt="wrapkit" className="rounded img-shadow img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Examen d'entrée */}
        <section className="p-4 my-3 rounded">
          <div className="container">
            <div className="row mini-spacer">
              <div className="col-lg-12">
                <h3>Examen d'entrée</h3>
                <p>L'examen d'entrée se compose principalement de 3 éléments:</p>
                <ul>
                  <li>Une course d’endurance 2200m avec un temps maximal d'admission de 12 minutes</li>
                  <li>Un sprint de 50m avec un temps maximal d'admission de 9 secondes</li>
                  <li>Un questionnaire sur les lois du jeu après la fin des cours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Important */}
        <section className="bg-light p-4 my-3 rounded">
          <div className="container">
            <div className="row mini-spacer">
              <div className="col-md-12 wrap-feature3-box">
                <div className="card card-shadow" data-aos="fade-down" data-aos-duration="1200">
                  <div className="card-body d-flex">
                    <div className="icon-space align-self-center">
                      <i className="icon-Danger display-2 text-danger"></i>
                    </div>
                    <div className="align-self-center">
                      <h3>Important</h3>
                      <p>Présence et ponctualité à tous les cours sont indispensables ! L’absence à un cours aura comme conséquence la radiation immédiate de la liste des candidats arbitres.</p>
                      <p>Une caution de CHF 50.00 est demandée lors du test physique, ce montant vous sera restitué à la fin de la formation si les cours ont été suivis dans leur totalité.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Assurance */}
        <section className="p-4 my-3 rounded">
          <div className="container">
            <div className="row mini-spacer">
              <div className="col-md-6 wrap-feature3-box">
                <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                  <div className="card-body d-flex">
                    <div className="icon-space align-self-center">
                      <i className="icon-Credit-Card3 display-2 text-primary"></i>
                    </div>
                    <div className="align-self-center">
                      <h3>Assurance</h3>
                      <p>Chaque participant doit être assuré personnellement contre la maladie et les accidents. La direction du cours et l’ACGF déclinent toute responsabilité et ne peuvent pas être tenus responsables pour un accident survenant pendant la durée du cours ou sur les trajets.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 wrap-feature3-box">
                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                  <div className="card-body d-flex">
                    <div className="icon-space align-self-center">
                      <i className="icon-Administrator display-2 text-primary"></i>
                    </div>
                    <div className="align-self-center">
                      <h3>Etrangers</h3>
                      <p>La fonction d’arbitre est considérée comme activité lucrative et une autorisation de travail est obligatoire pour les étrangers car la saison de football va au-delà de 3 mois par année. Nous acceptons les personnes étrangères ayant un livret pour étrangers (permis B, C ou G) ou autre autorisation Suisse.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Adhésion à un club et Disponibilité */}
        <section className="p-4 my-3 rounded">
          <div className="container">
            <div className="row mini-spacer">
              <div className="col-md-6 wrap-feature3-box">
                <div className="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                  <div className="card-body d-flex">
                    <div className="icon-space align-self-center">
                      <i className="icon-Affiliate display-2 text-primary"></i>
                    </div>
                    <div className="align-self-center">
                      <h3>Adhésion à un club</h3>
                      <p>Selon les règlements en vigueur, un arbitre officie pour le compte d’un club de football de l’ASF. Chaque candidat doit contacter un président du club de son choix.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 wrap-feature3-box">
                <div className="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                  <div className="card-body d-flex">
                    <div className="icon-space align-self-center">
                      <i className="icon-Stopwatch display-2 text-primary"></i>
                    </div>
                    <div className="align-self-center">
                      <h3>Disponibilité</h3>
                      <p>Le candidat doit être disponible les samedis matin et après-midi pour toute la durée du championnat. Les joueurs jouant dans des équipes engagées les samedis ne seront pas admis à la formation. Une fois la formation terminée, un arbitre doit diriger au minimum 12 matchs par saison, 2 cours d’instructions obligatoire par année. Pendant les 2 premières années un arbitre peut être radié sans possibilité de recours s’il ne donne pas satisfaction dans sa fonction d’arbitre.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Inscription */}
        <section className="container-fluid">
          <div className="static-slider3">
            <div className="container-fluid">
              <div className="row justify-content-center bg-primary spacer">
                <div className="col-md-8 align-self-center text-center">
                  <h1 className="text-white">Oui, je veux devenir arbitre, je m'inscris</h1>
                  <a className="btn btn-warning btn-md btn-arrow m-t-20 m-b-40" href="https://gag-ge.ch/fr/inscription">
                    <span>Inscription <i className="ti-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to top button */}
        <a className="bt-top btn btn-circle btn-lg btn-primary" href="#top">
          <i className="ti-arrow-up"></i>
        </a>

        {/* Footer */}
        <div className="footer4 mini-spacer">
          <hr />
          <div className="container">
            <div className="f4-bottom-bar">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex font-14">
                    <div className="m-t-10 m-b-10 copyright">
                      © 2024 <a href="https://www.gag-ge.ch">GAG GE</a>. Tous droits réservés
                    </div>
                    <div className="links ms-auto m-t-10 m-b-10">
                      made with <i className="icon-Heart text-primary"></i> by <a href="https://www.microweb.ch" target="_blank">microweb</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
