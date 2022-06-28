import s from './section.module.scss';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
