import React, { useState } from "react";

const tabs = [
 

];

const tabsData = {
  0: {
    image: "/assets/img/scrap.jpg",
    category: "Scrap Buyers ",
    title: "Scrap Buyers & Dealers – Mountain Falcon Company",
    description: "Mountain Falcon Company is a trusted leader in scrap buying, scrap disposal, and industrial recycling solutions across the region. We specialize in handling, collecting, and disposing of all types of recyclable materials in a safe, clean, and environmentally responsible manner. With a strong commitment to quality and sustainability, we provide reliable scrap management services for industrial, commercial, and individual clients.Our team is experienced in purchasing a wide range of surplus and scrap materials, ensuring maximum value recovery while maintaining strict safety and environmental standards.We are committed to delivering prompt, professional, and eco-friendly scrap management services. Whether it's a construction site, manufacturing facility, or industrial plant, we handle the complete scrap removal and disposal process from start to finish.Mountain Falcon Company ensures ethical recycling practices, safe material handling, and maximum value recovery for all your recyclable assets.",
    items: [
      "Copper",
      "Brass",
      "Aluminium",
      "Nickel",
      "Stainless Steel",
      "Zinc",
      "Steel Billets",
      "Steel Angles",
      "Carbon Steel Pipes",
      "Steel Reinforcing Bars",
    ]
  },
 
  
  
 
 
  
};

export default function ScrapTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const currentData = tabsData[activeTab];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.headerLine}></div>
          <h1 style={styles.mainTitle}>Procurement Solutions</h1>
          <p style={styles.subtitle}>Discover our comprehensive range of industrial materials and equipment</p>
        </div>

        {/* Tab Navigation */}
        <div style={styles.tabsSection}>
          <div style={styles.carouselNav}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className="tab-button"
                style={{
                  ...styles.navLink,
                  ...(activeTab === index ? styles.navLinkActive : {}),
                }}
                onClick={() => setActiveTab(index)}
              >
                <span style={styles.tabText}>{tab}</span>
                {activeTab === index && <div style={styles.activeIndicator}></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div style={styles.contentContainer}>
          {currentData ? (
            <div style={styles.card} className="content-card">
              <div style={styles.media} className="media-container">
                <div style={styles.imgContainer} className="image-container">
                  <img src={currentData.image} alt={currentData.title} style={styles.img} />
                </div>
                <div style={styles.textContent} className="text-content">
                  <div style={styles.categoryBadge}>
                    <span style={styles.categoryDot}></span>
                    {currentData.category}
                  </div>
                  <h2 style={styles.title} className="content-title">{currentData.title}</h2>
                  <p style={styles.description} className="content-description">{currentData.description}</p>
                  
                  {/* Product List */}
                  <div style={styles.productList}>
                    <h3 style={styles.listTitle} className="list-title">Our Products Include:</h3>
                    <div style={styles.itemsGrid} className="items-grid">
                      {currentData.items.map((item, index) => (
                        <div key={index} style={styles.listItem}>
                          <span style={styles.bullet}>•</span>
                          <span style={styles.itemText} className="item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📦</div>
              <p style={styles.emptyText}>No items available for this category yet.</p>
              <p style={styles.emptySubtext}>Please check back soon for updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "80px 20px",
    minHeight: "100vh",
    background: "#ffffff",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "60px",
    position: "relative",
  },
  headerLine: {
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #73BAAA 0%, #5a9888 100%)",
    margin: "0 auto 30px",
    borderRadius: "2px",
  },
  mainTitle: {
    fontSize: "3.5rem",
    fontWeight: "700",
    color: "#000",
    marginBottom: "16px",
    letterSpacing: "-1px",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "1.125rem",
    color: "#333",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  tabsSection: {
    marginBottom: "30px",
    position: "relative",
  },
  carouselNav: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  navLink: {
    flex: "0 0 auto",
    padding: "16px 28px",
    background: "#73BAAA",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  navLinkActive: {
    background: "#5a9888",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(115, 186, 170, 0.4)",
  },
  tabText: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#ffffff",
    display: "block",
    transition: "color 0.3s ease",
  },
  activeIndicator: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "2px",
  },
  contentContainer: {
    position: "relative",
    background: "#ffffff",
    borderRadius: "24px",
    padding: "0",
  },
  card: {
    animation: "fadeIn 0.5s ease-in-out",
  },
  media: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
  },
  imgContainer: {
    flex: "0 0 40%",
    maxWidth: "40%",
    minHeight: "500px",
    position: "relative",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  textContent: {
    padding: "50px 60px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    overflowY: "auto",
    maxHeight: "none",
  },
  categoryBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#73BAAA",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "20px",
    paddingBottom: "12px",
    borderBottom: "2px solid #73BAAA",
    width: "fit-content",
  },
  categoryDot: {
    width: "8px",
    height: "8px",
    background: "#73BAAA",
    borderRadius: "50%",
    display: "inline-block",
  },
  title: {
    fontSize: "2rem",
    lineHeight: "1.3",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#000",
    letterSpacing: "-0.5px",
  },
  description: {
    color: "#333",
    fontWeight: "400",
    lineHeight: "1.8",
    fontSize: "15px",
    marginBottom: "30px",
    textAlign: "justify",
  },
  productList: {
    marginBottom: "30px",
  },
  listTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#000",
    marginBottom: "16px",
  },
  itemsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "12px",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },
  bullet: {
    color: "#73BAAA",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "1.5",
    flexShrink: 0,
  },
  itemText: {
    color: "#000",
    fontSize: "17px",
    lineHeight: "1.6",
    fontWeight: "600",
  },
  emptyState: {
    minHeight: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "20px",
  },
  emptyIcon: {
    fontSize: "64px",
    marginBottom: "24px",
    opacity: "0.5",
  },
  emptyText: {
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  emptySubtext: {
    color: "#666",
    fontSize: "15px",
  },
};

// Add comprehensive media queries and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  * {
    box-sizing: border-box;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Large Desktop */
  @media (min-width: 1200px) {
    .media-container {
      flex-direction: row !important;
    }
  }

  /* Tablet and below */
  @media (max-width: 1199px) {
    .media-container {
      flex-direction: column !important;
    }
    .image-container {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      min-height: 350px !important;
    }
    .text-content {
      padding: 40px 35px !important;
      max-height: none !important;
    }
    .content-title {
      font-size: 1.8rem !important;
    }
    .list-title {
      font-size: 20px !important;
    }
  }

  /* Tablet */
  @media (max-width: 991px) {
    [style*="fontSize: 3.5rem"] {
      font-size: 2.5rem !important;
    }
    [style*="padding: 80px 20px"] {
      padding: 60px 15px !important;
    }
    [style*="marginBottom: 60px"] {
      margin-bottom: 40px !important;
    }
    .text-content {
      padding: 35px 30px !important;
    }
    .content-title {
      font-size: 1.6rem !important;
    }
    .content-description {
      font-size: 14px !important;
    }
    .item-text {
      font-size: 15px !important;
    }
    .list-title {
      font-size: 19px !important;
    }
    .image-container {
      min-height: 300px !important;
    }
  }

  /* Mobile Landscape and Small Tablet */
  @media (max-width: 768px) {
    [style*="fontSize: 3.5rem"] {
      font-size: 2rem !important;
    }
    [style*="fontSize: 1.125rem"] {
      font-size: 1rem !important;
    }
    [style*="padding: 80px 20px"] {
      padding: 50px 15px !important;
    }
    [style*="marginBottom: 60px"] {
      margin-bottom: 35px !important;
    }
    [style*="marginBottom: 30px"] {
      margin-bottom: 25px !important;
    }
    .tab-button {
      padding: 14px 22px !important;
      font-size: 14px !important;
    }
    .text-content {
      padding: 30px 25px !important;
    }
    .content-title {
      font-size: 1.5rem !important;
      margin-bottom: 15px !important;
    }
    .content-description {
      font-size: 14px !important;
      margin-bottom: 25px !important;
    }
    .list-title {
      font-size: 18px !important;
      margin-bottom: 14px !important;
    }
    .item-text {
      font-size: 14px !important;
    }
    .items-grid {
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }
    .image-container {
      min-height: 280px !important;
    }
    [style*="gap: 10px"][style*="flexWrap"] {
      gap: 8px !important;
    }
  }

  /* Mobile Portrait */
  @media (max-width: 576px) {
    [style*="fontSize: 3.5rem"] {
      font-size: 1.75rem !important;
    }
    [style*="fontSize: 1.125rem"] {
      font-size: 0.95rem !important;
    }
    [style*="padding: 80px 20px"] {
      padding: 40px 12px !important;
    }
    [style*="padding: 0 20px"] {
      padding: 0 12px !important;
    }
    [style*="marginBottom: 60px"] {
      margin-bottom: 30px !important;
    }
    [style*="marginBottom: 30px"] {
      margin-bottom: 20px !important;
    }
    [style*="width: 80px"][style*="height: 4px"] {
      width: 60px !important;
      height: 3px !important;
      margin: 0 auto 20px !important;
    }
    .tab-button {
      padding: 12px 18px !important;
      font-size: 13px !important;
    }
    .tab-button span {
      font-size: 13px !important;
    }
    .text-content {
      padding: 25px 20px !important;
    }
    .content-title {
      font-size: 1.35rem !important;
      margin-bottom: 12px !important;
    }
    .content-description {
      font-size: 13px !important;
      line-height: 1.7 !important;
      margin-bottom: 20px !important;
      text-align: left !important;
    }
    .list-title {
      font-size: 17px !important;
      margin-bottom: 12px !important;
    }
    .item-text {
      font-size: 13px !important;
      line-height: 1.5 !important;
    }
    [style*="fontSize: 20px"][style*="fontWeight: bold"] {
      font-size: 18px !important;
    }
    .image-container {
      min-height: 240px !important;
    }
    [style*="borderRadius: 20px"] {
      border-radius: 16px !important;
    }
    [style*="borderRadius: 24px"] {
      border-radius: 18px !important;
    }
    [style*="gap: 10px"][style*="flexWrap"] {
      gap: 6px !important;
    }
    [style*="fontSize: 13px"][style*="letterSpacing"] {
      font-size: 11px !important;
    }
  }

  /* Small Mobile */
  @media (max-width: 400px) {
    [style*="fontSize: 3.5rem"] {
      font-size: 1.5rem !important;
    }
    [style*="fontSize: 1.125rem"] {
      font-size: 0.9rem !important;
    }
    [style*="padding: 80px 20px"] {
      padding: 30px 10px !important;
    }
    [style*="padding: 0 20px"] {
      padding: 0 10px !important;
    }
    .tab-button {
      padding: 10px 14px !important;
      font-size: 12px !important;
    }
    .tab-button span {
      font-size: 12px !important;
    }
    .text-content {
      padding: 20px 15px !important;
    }
    .content-title {
      font-size: 1.2rem !important;
      margin-bottom: 10px !important;
    }
    .content-description {
      font-size: 12px !important;
      margin-bottom: 18px !important;
    }
    .list-title {
      font-size: 16px !important;
      margin-bottom: 10px !important;
    }
    .item-text {
      font-size: 12px !important;
    }
    [style*="fontSize: 20px"][style*="fontWeight: bold"] {
      font-size: 16px !important;
    }
    .image-container {
      min-height: 200px !important;
    }
    [style*="gap: 12px"] {
      gap: 8px !important;
    }
  }

  /* Extra Small Mobile */
  @media (max-width: 350px) {
    [style*="fontSize: 3.5rem"] {
      font-size: 1.3rem !important;
    }
    .content-title {
      font-size: 1.1rem !important;
    }
    .text-content {
      padding: 18px 12px !important;
    }
    .tab-button {
      padding: 9px 12px !important;
      font-size: 11px !important;
    }
  }
  
  /* Hover Effects */
  button[style*="background: #73BAAA"]:hover {
    background: #5a9888 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(115, 186, 170, 0.3) !important;
  }
  
  button[style*="background: #73BAAA"]:hover span {
    transform: translateX(4px) !important;
  }
  
  button[style*="color: #73BAAA"]:hover {
    background: #73BAAA !important;
    color: #fff !important;
    transform: translateY(-2px) !important;
  }

  /* Ensure text is always visible */
  .text-content * {
    visibility: visible !important;
    opacity: 1 !important;
  }
`;
document.head.appendChild(styleSheet);