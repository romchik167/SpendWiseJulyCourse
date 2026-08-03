import "./componentsCSS/CategoryElement.css"
type CategoryElementProps = {
  name: string;
  description: string;
  income: number;
  spend: number;
};
export default function CategoryElement({
  name,
  description,
  income,
  spend,
}: CategoryElementProps) {
  return (
    <div className="category-element-wrap">
      <h3 className="category-element-name">{name}</h3>
      <div className="category-element-description">{description}</div>
      <div className="category-element-income">
        income: {income}$
        <div className="income-progressbar"></div>
      </div>
      <div className="category-element-spend">
        spend: {spend}$
        <div className="spend-progressbar"></div>
      </div>
      <button className="button button-delete">delete</button>
    </div>
  );
}
