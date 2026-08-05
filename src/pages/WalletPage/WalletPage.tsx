import CategoryElement from "../../components/CategoryElement/CategoryElement";
import SpendElement from "../../components/SpendElement/SpendElement";
import "./styles/wallet-page.css";
export default function WalletPage() {
  return (
    <div className="walletPage-wrap">
      <section className="add-spend-section grid-item-wallet-page">
        <h2>Here you can add your spend</h2>
      </section>
      <section className="categories-section grid-item-wallet-page">
        <h2>Categories of your last spends</h2>
        <button className="button button-add-category">Add category</button>
        <div className="categories-list">
          <CategoryElement
            name="React"
            description="React desc"
            income={100}
            spend={200}
          />
          <CategoryElement
            name="TypeScript"
            description="TypeScript desc"
            income={1300}
            spend={2400}
          />
          <CategoryElement
            name="JavaScript"
            description="JavaScript desc"
            income={1060}
            spend={2050}
          />
          <CategoryElement
            name="CSS"
            description="CSS desc"
            income={1700}
            spend={2200}
          />
          <CategoryElement
            name="CSS"
            description="CSS desc"
            income={1700}
            spend={2200}
          />
          <CategoryElement
            name="CSS"
            description="CSS desc"
            income={1700}
            spend={2200}
          />
          <CategoryElement
            name="CSS"
            description="CSS desc"
            income={1700}
            spend={2200}
          />
        </div>
      </section>
      <section className="last-spends-section grid-item-wallet-page">
        <h2>It's your last spends</h2>
        <div className="last-spends-list">
          <SpendElement 
          sum = {500}
          income = {true}
          category= "React" />
          <SpendElement 
          sum = {400}
          income = {false}
          category= "TypeScript" />
          <SpendElement 
          sum = {100}
          income = {true}
          category= "JavaScript" />
          </div>
      </section>
    </div>
  );
}
