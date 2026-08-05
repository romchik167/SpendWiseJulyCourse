import "./styles/spend-element.css"
type SpendElementProps = {
  sum: number;
  income: boolean;
  category: string;
}
export default function SpendElement({
  sum,
  income,
  category,
}: SpendElementProps) {
  const getInfo = (): {sign: string, label: string, className: string } => {
    if(income == true) {
      return { sign: "+", label: "Income", className: "spend-element-income" }
    } else {
      return { sign: "-", label: "Expence", className: "spend-element-expence"}
    }
  }
  const {sign, label, className} = getInfo()
  return (
    <div className={`spend-element-wrap ${className}`}>
      <div className="spend-element-sum">{sign}{sum}$</div>
      <div className="spend-element-text">{label} from {category}</div>
      <div className="spend-element-methods">
        <button className="button button-spend-element">change</button>
        <button className="button button-spend-element">delete</button>
      </div>
    </div>
  )
}