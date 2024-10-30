export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Titre en gros et gras */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Comité</h1>
      
      {/* Phrase d'introduction en taille moyenne */}
      <p style={{ fontSize: '24px', marginBottom: '40px' }}>
        Nous sommes heureux de vous présenter le comité du groupe des Arbitres Genevois.
      </p>
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}> {/* Stylisation de la liste avec des cases */}
        <li style={{ marginBottom: '10px' }}>
          <img src="/KevinSaccone.png" alt="Creola Katherine Johnson" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Kevin Saccone:</strong> président
        </li>
        <li style={{ marginBottom: '10px' }}>
          <img src="/KazimUysal.png" alt="Mario José Molina-Pasquel Henríquez" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Kazim Uysal:</strong> vice-président et secrétaire
        </li>
        <li style={{ marginBottom: '10px' }}>
          <img src="/PedroCou.png" alt="Pioupiou" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Pedro Couto:</strong> trésorier
        </li>
        <li style={{ marginBottom: '10px' }}>
          <img src="/StefNeuh.png" alt="Percy Lavon Julian" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Stéphane Neuhäusler:</strong> entraîneur de la première équipe
        </li>
        <li style={{ marginBottom: '10px' }}>
          <img src="/MarcoOliveira1.png" alt="Subrahmanyan Chandrasekhar" width="120" height="120" style={{ marginRight: '10px' }} />
          <strong>Marco Oliveira:</strong> membre
        </li>
      </ul>
    </div>
  );
}