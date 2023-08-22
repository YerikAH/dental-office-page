import s from "./SectionProducts.module.css";
interface props {
  children: JSX.Element[];
}
function SectionProducts({ children }: props) {
  return (
    <section className={s.section}>
      {children.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </section>
  );
}
export default SectionProducts;
