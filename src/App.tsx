import '../page-2.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo">
            <a href="#"><img src="/Image-box/Main-Logo-2.png" alt="Logo" /></a>
          </div>
          <div className="navbar-cta">
            <a href="#quote" className="btn-gold">Get a Free Quote</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">Direct From Manufacturer — Best Price Guaranteed</div>
              <h1 className="hero-title">
                Heavy Equipment<br />
                <span>Delivered To<br />Your Doorstep</span>
              </h1>
              <p className="hero-subtitle">
                Premium construction, mining, and agricultural machinery sourced directly from
                <strong> 4 top Chinese manufacturers</strong> — delivered anywhere including Doha, Dubai, and across the Middle East.
              </p>
              <ul className="hero-points">
                <li><i className="fa-solid fa-circle-check"></i> Graders, Excavators, Dozers &amp; more</li>
                <li><i className="fa-solid fa-circle-check"></i> Direct factory pricing — no middleman markup</li>
                <li><i className="fa-solid fa-circle-check"></i> Full delivery to your project site</li>
                <li><i className="fa-solid fa-circle-check"></i> After-sales support &amp; spare parts available</li>
              </ul>
              <div className="hero-btns">
                <a href="#quote" className="btn-gold">Request a Quote</a>
                <a href="#equipment" className="btn-outline">View Equipment</a>
              </div>
            </div>
            <div className="hero-side">
              <div className="hero-form-box">
                <h3>Get Your <span className="gold-text">Free Quote</span></h3>
                <p className="form-tagline">Tell us what you need — we'll get back to you within 24 hours</p>
                <input type="text" className="fake-input" placeholder="Your Full Name" />
                <input type="email" className="fake-input" placeholder="Email Address" />
                <input type="tel" className="fake-input" placeholder="Phone / WhatsApp Number" />
                <select className="fake-input" defaultValue="">
                  <option value="" disabled>Select Equipment Type</option>
                  <option>Motor Grader</option>
                  <option>Excavator</option>
                  <option>Dozer / Bulldozer</option>
                  <option>Agricultural Machinery</option>
                  <option>Mining Equipment</option>
                  <option>Other</option>
                </select>
                <input type="text" className="fake-input" placeholder="Delivery Location (e.g. Doha, Qatar)" />
                <button className="btn-gold">Send My Inquiry &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                <p className="form-note"><i className="fa-solid fa-lock"></i> 100% confidential. No spam, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><h3>4</h3><p>Chinese Manufacturers</p></div>
            <div className="stat-item"><h3>3+</h3><p>Equipment Categories</p></div>
            <div className="stat-item"><h3>20+</h3><p>Countries Delivered</p></div>
            <div className="stat-item"><h3>24hr</h3><p>Quote Response Time</p></div>
          </div>
        </div>
      </div>

      {/* EQUIPMENT SHOWCASE */}
      <section className="equipment" id="equipment">
        <div className="container">
          <p className="section-title gold-text">Our Equipment Range</p>
          <div className="gold-divider"></div>
          <p className="section-subtitle">Construction — Mining — Agricultural Machinery</p>
          <div className="equipment-grid">
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-road"></i>
                <span className="equipment-tag">Construction</span>
              </div>
              <div className="equipment-info">
                <h3>Motor Graders</h3>
                <p>Heavy-duty motor graders for road construction, land leveling, and site preparation. Ideal for large-scale infrastructure projects.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> Factory Direct</span>
                  <span><i className="fa-solid fa-check"></i> Multiple Models</span>
                </div>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-truck-pickup"></i>
                <span className="equipment-tag">Construction</span>
              </div>
              <div className="equipment-info">
                <h3>Excavators</h3>
                <p>Hydraulic excavators for digging, demolition, and material handling. Available in mini, medium, and large configurations.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> All Size Classes</span>
                  <span><i className="fa-solid fa-check"></i> High Efficiency</span>
                </div>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-tractor"></i>
                <span className="equipment-tag">Construction</span>
              </div>
              <div className="equipment-info">
                <h3>Dozers / Bulldozers</h3>
                <p>Powerful bulldozers for earthmoving, land clearing, and heavy-duty pushing work across construction and mining sites.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> High Torque</span>
                  <span><i className="fa-solid fa-check"></i> Durable Build</span>
                </div>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-mountain"></i>
                <span className="equipment-tag">Mining</span>
              </div>
              <div className="equipment-info">
                <h3>Mining Equipment</h3>
                <p>Specialized machinery built for the demanding conditions of open-pit and underground mining operations worldwide.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> Heavy Duty</span>
                  <span><i className="fa-solid fa-check"></i> Long Lifespan</span>
                </div>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-leaf"></i>
                <span className="equipment-tag">Agricultural</span>
              </div>
              <div className="equipment-info">
                <h3>Agricultural Machinery</h3>
                <p>Modern farming equipment including tractors, harvesters, and planting machines for large-scale agricultural operations.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> High Yield</span>
                  <span><i className="fa-solid fa-check"></i> Fuel Efficient</span>
                </div>
              </div>
            </div>
            <div className="equipment-card">
              <div className="equipment-img">
                <i className="fa-solid fa-gears"></i>
                <span className="equipment-tag">Spare Parts</span>
              </div>
              <div className="equipment-info">
                <h3>Spare Parts &amp; Support</h3>
                <p>Genuine OEM spare parts and after-sales technical support available for all equipment supplied through our network.</p>
                <div className="equipment-meta">
                  <span><i className="fa-solid fa-check"></i> Genuine OEM</span>
                  <span><i className="fa-solid fa-check"></i> Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLIERS */}
      <section className="suppliers">
        <div className="container">
          <div className="suppliers-header">
            <p className="eyebrow">Our Manufacturing Partners</p>
            <h2 className="section-title">4 <span className="gold-text">Trusted Chinese Suppliers</span></h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">Vetted, certified manufacturers with decades of heavy equipment production experience</p>
          </div>
          <div className="suppliers-grid">
            <div className="supplier-card">
              <div className="supplier-icon"><i className="fa-solid fa-industry"></i></div>
              <p className="supplier-num">Supplier 01</p>
              <h3>Construction Equipment Specialist</h3>
              <p>Graders, dozers, and road construction machinery for large infrastructure projects globally.</p>
            </div>
            <div className="supplier-card">
              <div className="supplier-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              <p className="supplier-num">Supplier 02</p>
              <h3>Excavation Machinery Expert</h3>
              <p>Full range of hydraulic excavators from mini to heavy-duty class with ISO certification.</p>
            </div>
            <div className="supplier-card">
              <div className="supplier-icon"><i className="fa-solid fa-mountain-sun"></i></div>
              <p className="supplier-num">Supplier 03</p>
              <h3>Mining Equipment Manufacturer</h3>
              <p>Specialized in heavy mining machinery built to withstand extreme working environments.</p>
            </div>
            <div className="supplier-card">
              <div className="supplier-icon"><i className="fa-solid fa-seedling"></i></div>
              <p className="supplier-num">Supplier 04</p>
              <h3>Agricultural Machinery Producer</h3>
              <p>Modern farming equipment with advanced technology for high-efficiency agricultural operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How The <span className="gold-text">Process Works</span></h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">From your inquiry to equipment on-site — simple, fast, and transparent</p>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-file-lines"></i></div>
              <h4>Submit Your Inquiry</h4>
              <p>Tell us what equipment you need, quantity, and your delivery location</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-handshake"></i></div>
              <h4>Receive Custom Quote</h4>
              <p>We source the best price from our 4 suppliers and send you a detailed quote within 24 hours</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-ship"></i></div>
              <h4>Confirm &amp; Ship</h4>
              <p>Once confirmed, equipment is dispatched directly from the factory with full documentation</p>
            </div>
            <div className="step-item">
              <div className="step-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h4>Delivered to You</h4>
              <p>Equipment arrives at your project site — Doha, Dubai, or wherever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>Why Choose <span className="gold-text">Us?</span></h2>
              <p>We connect you directly with trusted Chinese manufacturers — cutting out the middleman so you get the best equipment at the best price, delivered where you need it.</p>
              <blockquote>
                "Quality machinery. Factory prices.<br />
                Delivered to your doorstep."
              </blockquote>
              <p>Whether you're building roads in Qatar, mining in Africa, or farming in Central Asia — we have the right machine and the right supplier for your project.</p>
              <a href="#quote" className="btn-gold">Get a Free Quote Today</a>
            </div>
            <div className="why-cards">
              <div className="why-card">
                <div className="why-icon"><i className="fa-solid fa-tag"></i></div>
                <h4>Factory Direct Price</h4>
                <p>No middlemen — lowest possible price guaranteed</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><i className="fa-solid fa-certificate"></i></div>
                <h4>Certified Quality</h4>
                <p>ISO-certified manufacturers with global standards</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><i className="fa-solid fa-globe"></i></div>
                <h4>Global Delivery</h4>
                <p>We ship to Doha, Dubai, Africa &amp; worldwide</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><i className="fa-solid fa-headset"></i></div>
                <h4>After-Sales Support</h4>
                <p>Spare parts &amp; technical support post-delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL QUOTE FORM */}
      <section className="form-section" id="quote">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-info">
              <h2>Request a <span className="gold-text">Free Quote</span></h2>
              <p>Fill in your details and one of our equipment specialists will contact you within 24 hours with pricing and availability for your requirements.</p>
              <ul className="form-benefits">
                <li><i className="fa-solid fa-arrow-right"></i> No obligation — 100% free quote</li>
                <li><i className="fa-solid fa-arrow-right"></i> Response within 24 hours</li>
                <li><i className="fa-solid fa-arrow-right"></i> Direct factory pricing, no hidden fees</li>
                <li><i className="fa-solid fa-arrow-right"></i> Delivery arranged to your location</li>
                <li><i className="fa-solid fa-arrow-right"></i> Spare parts &amp; after-sales support included</li>
              </ul>
            </div>
            <div className="ghl-form-box">
              <h3>Get Your <span className="gold-text">Free Quote</span></h3>
              <p className="form-tagline">Fill in your details — we'll respond within 24 hours</p>
              <input type="text" className="fake-input" placeholder="First Name" />
              <input type="text" className="fake-input" placeholder="Last Name" />
              <input type="email" className="fake-input" placeholder="Email Address" />
              <input type="tel" className="fake-input" placeholder="Phone / WhatsApp Number" />
              <select className="fake-input" defaultValue="">
                <option value="" disabled>Select Equipment Type</option>
                <option>Motor Grader</option>
                <option>Excavator</option>
                <option>Dozer / Bulldozer</option>
                <option>Agricultural Machinery</option>
                <option>Mining Equipment</option>
                <option>Other</option>
              </select>
              <input type="text" className="fake-input" placeholder="Quantity Required" />
              <input type="text" className="fake-input" placeholder="Delivery Location (e.g. Doha, Qatar)" />
              <textarea className="fake-input" rows={3} placeholder="Additional Requirements or Notes" style={{ resize: 'vertical' }}></textarea>
              <button className="btn-gold">Send My Quote Request &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
              <p className="form-note"><i className="fa-solid fa-lock"></i> Your information is 100% secure. We never share or sell your details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/Image-box/Main-Logo-2.png" alt="Logo" />
            </div>
            <div className="footer-links">
              <a href="#equipment">Equipment</a>
              <a href="#quote">Get a Quote</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 All rights reserved. | Heavy equipment sourced from certified Chinese manufacturers. Delivery terms apply.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
