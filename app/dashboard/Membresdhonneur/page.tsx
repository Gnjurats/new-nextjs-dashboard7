export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Titre en gros et gras */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Membres d&apos;honneur</h1>
      
      {/* Phrase d&apos;introduction en taille moyenne */}
      <p style={{ fontSize: '24px', marginBottom: '40px' }}>
        Nous tenons à remercier chaleureusement tous nos membres d&apos;honneur.
      </p>
      <ul style={{ listStyleType: '', paddingLeft: '20px' }}> {/* Stylisation de la liste avec des cases */}
        <li style={{ marginBottom: '50px' }}>
          <img src="/Zezza.png" alt="Roberto Zezza" width="120" height="120" style={{ marginRight: '10px' }} />
          <strong>Roberto Zezza</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Boesiger.png" alt="Jacques André Boesiger" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Jacques André Boesiger</strong> 
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Detruche.png" alt="Claude Detruche" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Claude Detruche</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Malik.png" alt="Malik Ezzrari" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Malik Ezzrari</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Heinz.png" alt="Heinz Lutz" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Heinz Lutz</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Mariani.png" alt="Vincenzo Mariani" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Vincenzo Mariani</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Gianni.png" alt="Giovanni Matteucci" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Giovanni Matteucci</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Musso.png" alt="Salvatore Musso" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Salvatore Musso</strong>
        </li>
        <li style={{ marginBottom: '50px' }}>
          <img src="/Sugnaux.png" alt="Sugnaux Gabriel" width="100" height="100" style={{ marginRight: '10px' }} />
          <strong>Sugnaux Gabriel</strong>
        </li>
      </ul>
    </div>
  );
}
