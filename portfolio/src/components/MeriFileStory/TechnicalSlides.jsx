import styles from './TechnicalSlides.module.css';

function Canvas({ children, className = '' }) {
  return <div className={`${styles.canvas} ${className}`.trim()}>{children}</div>;
}

export function MeriFileSlideTen() {
  const points = [
    ['One Sets Up For All', 'One child introduces the entire family.'],
    ['Family Lock In', 'Parents stay with the person who made access effortless.'],
    ['Data Lock In', 'Once the family archive is here, it is hard to leave.'],
    ['No Behavior Change', 'MeriFile lives on WhatsApp, where families already are.'],
  ];

  return (
    <Canvas className={styles.hypothesisCanvas}>
      <div className={styles.documentAtmosphere} aria-hidden="true" />
      <section className={styles.hypothesisPanel} aria-labelledby="hypothesis-title">
        <h2 id="hypothesis-title">Why this hypothesis is compelling</h2>
        <ol className={styles.hypothesisList}>
          {points.map(([title, detail], index) => (
            <li className={styles[`hypothesis${index + 1}`]} key={title}>
              <span className={styles.hypothesisStem} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </Canvas>
  );
}
