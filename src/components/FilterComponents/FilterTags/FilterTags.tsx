import s from "./FilterTags.module.css";
const ITEMS = [
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
  {
    name: "Dientes",
    tag: "diente",
  },
];

function FilterTags() {
  return (
    <div className={s.tag}>
      <h3>Etiquetas</h3>
      <div>
        {ITEMS.map((item, idx) => (
          <button key={idx}>{item.name}</button>
        ))}
      </div>
    </div>
  );
}
export default FilterTags;
