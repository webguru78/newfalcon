import React, { useState } from "react";

const tabs = [
  "Building Material",
  "Mechanical Material",
  "Electrical Material",
  "Safety Material",
  "Equipment Spare Parts",
  "Aggregate",
  "Industrial Chemical Supply",
];

const tabsData = {
  0: {
    image: "/assets/img/b1.jpg",
    category: "Construction",
    title: "Building Material",
    description: "Mountain Falcon Company, alongside Adka Trading & Contracting LLC, is well-renowned for its longstanding presence in the building and construction supply industry. With many years of experience, we take pride in the strong relationships we have built with trusted suppliers and valued clients across the country. Our customers can rely on us with full confidence, knowing that every product we deliver is backed by proven expertise and reliability.",
    items: [
      "Premium Cement & Concrete",
      "Steel Reinforcement Bars",
      "Concrete Blocks & Bricks",
      "Roofing Materials",
      "Insulation Products",
      "Timber & Wooden Materials",
      "Paint & Coating Solutions",
      "Construction Adhesives"
    ]
  },
  1: {
    image: "/assets/img/b2.jpg",
    category: "Mechanical",
    title: "Mechanical Material",
    description: "As the leading mechanical materials supplier in Saudi Arabia, Mountain Falcon Company assures our clients to deliver top-of-the-line products to address all of your needs. Ever since we began our operations, we have strived hard to establish our position in the region and achieved success in becoming renowned as the region's leading materials suppliers. Through our manufacturing network, we have the technical expertise to provide finished mechanical component solutions ready for fitment into your process.",
    items: [
      "Steel Pipes & Fittings",
      "Grooved Fittings & Valves",
      "Copper, Brass Pipes & Fittings",
      "Soldering & Welding Products",
      "Pipes, Fittings, Valves & Drains",
      "Pressure Tanks & Gaskets",
      "Gauges & Meters",
      "Clamps, Joints & Couplings",
      "Flanges & Butt Weld Fittings",
      "PVC/CPVC/UPVC/HDPE/PVDF",
      "Fasteners and Studs"
    ]
  },
  2: {
    image: "/assets/img/b3.jpg",
    category: "Electrical",
    title: "Electrical Material",
    description: "Mountain Falcon Company's success has been built by serving our customers' electrical construction materials needs for many years. As one of the nation's largest suppliers of electrical construction materials, we maintain an extensive inventory surplus of electrical materials. Large inventory, product knowledge, attractive pricing structures and timely shipments make us the number one source for electrical construction materials. With over 25 years of experience in the industry, we have managed to develop partnerships with top developers and gained the trust of our valuable clients.",
    items: [
      "Conduit Fittings & Accessories",
      "Electrical Connectors & Lugs",
      "Circuit Breakers & Fuses",
      "Wire Cables & Power Cables",
      "Junction Boxes & Enclosures",
      "Motor Control Centres",
      "Fire Detection & Alarm Systems",
      "Cable Trays & Ladders",
      "Lighting Solutions & Luminaires",
      "Earthing & Lightning Protection",
      "Industrial Automation Equipment",
      "Electrical Testing Equipment"
    ]
  },
  3: {
    image: "/assets/img/b.jpg",
    category: "Safety",
    title: "Safety Material",
    description: "Mountain Falcon Company understands the safety concerns of our customers whose employees work in risky environments where accidents are quite possible. We came up with exclusive safety equipment supplies to industrial, commercial, and residential units all across the globe. We partner with the best and renowned safety equipment manufacturers to provide a wide range of safety products to our potential clients. Our exclusive safety equipment supplies cover different types of safety and personal gears that are widely used in construction, industrial, marine, oil & gas, and other vital sectors.",
    items: [
      "Safety Shoes & Footwear",
      "Safety Goggles & Glasses",
      "Construction Safety Equipment",
      "Safety Helmets & Head Protection",
      "Full Body Harnesses",
      "Safety Gloves & Life Jackets",
      "Hearing Protection Equipment",
      "Workwear & Protective Clothing",
      "Eye & Face Protection",
      "Respiratory Protection",
      "Fall Protection Systems",
      "Eye Wash & Shower Stations"
    ]
  },
  4: {
    image: "/assets/img/b5.jpg",
    category: "Equipment",
    title: "Equipment Spare Parts",
    description: "Mountain Falcon Company is the team you can partner with when you need a reliable solution for the technical industry. Our well-equipped spare parts department can provide the correct parts at the most affordable prices within the minimum possible time. The Parts Department is managed by professionals with vast experience, ensuring that every customer order is handled quickly and efficiently. We offer a complete range of after-market & genuine parts for the entire range of equipment. Our experienced and dedicated team are always ready to help all our customers in providing the right technical solution.",
    items: [
      "Undercarriage Components",
      "Cutting Edges",
      "Engine & Transmission Parts",
      "Mechanical Parts",
      "Hydraulic Cartridges",
      "Filtration System Repair Kits",
      "Bearings & Carbon Brushes",
      "Flanges & Acrylic Sheets",
      "Replacement Parts for Heavy Machinery",
      "Genuine OEM Parts"
    ]
  },
  5: {
    image: "/assets/img/b6.jpg",
    category: "Aggregate",
    title: "Aggregate Supply",
    description: "Mountain Falcon Company is widely involved in supplying a wide range of aggregates to the construction industry. Aggregates are inert granular ingredients, such as sand, gravel, or crushed stone. We have been successfully supplying various small and large-scale projects, including some of the most iconic constructions. Today, Mountain Falcon is one of the leading suppliers of sands & aggregates in the region. We serve the best quality of aggregate all across the nations. Whatever the project, Mountain Falcon has the aggregates and sand to suit your needs.",
    items: [
      "Washed Sand",
      "River Sand",
      "Crushed Stone",
      "Gravel & Pebbles",
      "Construction Sand",
      "Concrete Aggregate",
      "Road Base Materials",
      "Decorative Aggregates",
      "Drainage Gravel",
      "Fill Sand"
    ]
  },
  6: {
    image: "/assets/img/b7.jpg",
    category: "Chemical",
    title: "Industrial Chemical Supply",
    description: "Mountain Falcon Company manages, supplies and distributes varieties of chemicals to diversified industries. In addition to that, we also provide custom-formulation of chemical solutions and offer our manufacturing line of chemicals to meet different customer needs & requirements. We have a professional team of industry experts ready to serve you and understand your personalized chemical needs. We also have tight connections and relationships with world-renowned chemical manufacturers to supply our customers with the best chemical solutions.",
    items: [
      "Structuro 507M & 601SMC",
      "Conbextra GP & 621",
      "NITOMORTAR TC2000 & FC",
      "Renderoc Series (S, FC, LA Xtra, HS Xtra)",
      "Supercast SW30 & SWX",
      "THIOFLEX 600 & NITOSEAL MS600",
      "Nitobond AR & EP",
      "CONCURE AB",
      "Lokfix DUR",
      "Flamex One Fire Rated Sealant",
      "PROOFEX & BITUCELL",
      "NITOPROOF 120"
    ]
  },
};

export default function ProcurementTabs() {
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