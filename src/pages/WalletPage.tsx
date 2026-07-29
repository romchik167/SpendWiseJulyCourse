import "./pagesCSS/WalletPage.css";
export default function WalletPage() {
  return (
    <div className="walletPage-wrap">
      <section className="add-spend-section">
        <h2>Here you can add your spend</h2>
      </section>
      <section className="categories-section">
        <h2>Categories of your last spends</h2>
        <div className="categories-list"></div>
      </section>
      <section className="last-spends-section">
        <h2>It's your last spends</h2>
        <div className="last-spends-list">list of spends</div>
      </section>
    </div>
  );
}
