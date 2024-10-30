import React from 'react';

const DevenirArbitre = () => {
    return (
        <>
            <div className="preloader">
                <div className="loader">
                    <div className="loader__figure"></div>
                    <p className="loader__label">GAG GE</p>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="topbar">
                    {/* ============================================================== */}
                    {/* Header */}
                    {/* ============================================================== */}
                    <div className="header3">
                        <div className="po-relative">
                            <div className="h3-topbar">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <ul className="list-inline d-none d-md-block">
                                                <li>
                                                    <a href="mailto:info@gag-ge.ch">
                                                        <i className="icon-Mail info-icon"></i>
                                                        info@gag-ge.ch
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-7 t-r">
                                            <ul className="list-inline d-none d-lg-block">
                                                <li>
                                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a><span className="vdevider"></span></a>
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
                    {/* ============================================================== */}
                    {/* End Header */}
                    {/* ============================================================== */}
                </div>
                <div className="page-wrapper">
                    <section className="bg-light">
                        <div className="container">
                            <div className="row mini-spacer">
                                {/* Column */}
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
                                {/* Column */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="p-20">
                                        <img src="https://gag-ge.ch/front/default/images/arbitre_02.jpg" alt="wrapkit" className="rounded img-shadow img-responsive" data-aos="flip-right" data-aos-duration="1200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default DevenirArbitre;