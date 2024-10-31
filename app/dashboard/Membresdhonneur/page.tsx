export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Titre en gros et gras */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Membres d&apos;honneur</h1>
      
      {/* Phrase d'introduction en taille moyenne */}
      <p style={{ fontSize: '24px', marginBottom: '40px' }}>
      Nous tenons à remercier chaleureusement tous nos membres d&apos;honneur.
      </p>
      <ul style={{ listStyleType: '', paddingLeft: '20px' }}> {/* Stylisation de la liste avec des cases */}
      <li style={{ marginBottom: '50px' }}>
          <img src="/Zezza.png" alt="Subrahmanyan Chandrasekhar" width="120" height="120" style={{ marginRight: '10px' }} />
          <strong>Roberto Zezza</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Boesiger.png" alt="Creola Katherine Johnson" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Jacques André Boesiger</strong> 
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Detruche.png" alt="Mario José Molina-Pasquel Henríquez" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Claude Detruche</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Malik.png" alt="Pioupiou" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Malik Ezzrari</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Heinz.png" alt="Percy Lavon Julian" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Heinz Lutz</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Mariani.png" alt="Creola Katherine Johnson" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Vincenzo Mariani</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Gianni.png" alt="Mario José Molina-Pasquel Henríquez" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Giovanni Matteucci</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Musso.png" alt="Pioupiou" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Salvatore Musso</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Sugnaux.png" alt="Percy Lavon Julian" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Sugnaux Gabriel</strong>
        </li>
      </ul>
    </div>
  );
}
