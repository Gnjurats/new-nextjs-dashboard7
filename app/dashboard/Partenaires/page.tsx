import React from 'react';

const Partenaires = () => {
  // Liste des partenaires avec le lien de leur site et le chemin vers leur logo
  const partenaires = [
    {
      nom: "Onis",
      logo: "/Onisimage.png",
      site: "https://teamshop.onisswiss.ch"
    },
    {
      nom: "Blockchain Student Association",
      logo: "/Blockchainimage.png",
      site: "https://bsaepfl.ch"
    },
  ];

  return (
    <div className="partenaires" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "2em", lineHeight: "1.5" }}>
        Nos<br /> Partenaires
      </h2>
      <div className="partenaire-list">
        {partenaires.map((partenaire, index) => (
          <a
            key={index}
            href={partenaire.site}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginBottom: "1em",
              marginRight: index < partenaires.length - 1 ? "2em" : "0"
            }}
          >
            <img
              src={partenaire.logo}
              alt={`Logo de ${partenaire.nom}`}
              className="logo"
              style={{
                maxWidth: partenaire.nom === "Blockchain Student Association" ? "300px" : "250px", // Taille spécifique pour Blockchain
                height: "auto",
                margin: "0 auto"
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;
