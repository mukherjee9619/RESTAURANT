import React from "react";
import "../styles/MenuBrochure.css";

const MenuBrochure = ({ darkMode }) => {
  return (
    <div className={`menu-card-page ${darkMode ? "dark" : "light"}`}>
      {/* HERO SECTION */}
      <section className="menu-hero">
        <h2 className="menu-title">Golden Spoon Menu Card</h2>
        <p className="menu-subtitle">A Royal Dining Experience Awaits You 🍽️</p>
      </section>

      {/* MAIN COURSE — Left Half Circle */}
      <div className="menu-section main-course">
        <div className="menu-row left-half">
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/main.jpg" alt="Main Course" />
            </div>
          </div>
          <div className="menu-items">
            <h3 className="section-title">MAIN COURSE</h3>
            <p>Chicken Biriyani <span>(1 pt)</span> <b>₹200</b></p>
            <p>Basanti Polao <span>(1 pt)</span> <b>₹200</b></p>
            <p>Mixed Fried Rice <span>(1 pt)</span> <b>₹250</b></p>
            <p>Chilli Chicken <span>(8 pcs)</span> <b>₹300</b></p>
            <p>Mutton Kosa <span>(4 pcs)</span> <b>₹480</b></p>
          </div>
        </div>
      </div>

      {/* BREAKFAST — Right Half Circle */}
      <div className="menu-section breakfast">
        <div className="menu-row right-half">
          <div className="menu-items">
            <h3 className="section-title">BREAKFAST</h3>
            <p>Chole Bhature <span>(2 pcs)</span> <b>₹50</b></p>
            <p>Idli <span>(2 pcs)</span> <b>₹50</b></p>
            <p>Pav Bhaji <span>(2 pcs)</span> <b>₹40</b></p>
            <p>Luchi Alur Dom <span>(4 pcs)</span> <b>₹40</b></p>
            <p>Litti Chokha <span>(4 pcs)</span> <b>₹40</b></p>
            <p>Paneer Uttapam <span>(2 pcs)</span> <b>₹200</b></p>
          </div>
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/breakfast.jpg" alt="Breakfast" />
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL VEG DISHES — Left Half Circle */}
      <div className="menu-section special-veg">
        <div className="menu-row left-half">
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/spveg.jpg" alt="Veg Dishes" />
            </div>
          </div>
          <div className="menu-items">
            <h3 className="section-title">SPECIAL VEG DISHES</h3>
            <p>Paneer Butter Masala <span>(8 pcs)</span> <b>₹280</b></p>
            <p>Malai Kofta <span>(4 pcs)</span> <b>₹160</b></p>
            <p>Aloo Posto <span>(1 pt)</span> <b>₹150</b></p>
            <p>Paneer Pasanda <span>(8 pcs)</span> <b>₹280</b></p>
            <p>Aloo Gobi <span>(1 pt)</span> <b>₹150</b></p>
            <p>Palak Paneer <span>(8 pcs)</span> <b>₹240</b></p>
          </div>
        </div>
      </div>

    {/*  SPECIAL FISH DISHES — Right Half Circle */}
      <div className="menu-section special-fish-dishes">
        <div className="menu-row right-half">
          <div className="menu-items">
            <h3 className="section-title"> SPECIAL FISH DISHES</h3>
            <p>Rui Posto <span>(3 pcs)</span> <b>₹240</b></p>
            <p>Pabda Jhal <span>(1 pc)</span> <b>₹250</b></p>
            <p>Shorshe Ilish<span>(2 pcs)</span> <b>₹500</b></p>
            <p>Doi Katla<span>(3 pcs)</span> <b>₹280</b></p>
             <p>Prawn Malai Curry <span>(4 pcs)</span> <b>₹300</b></p>
          </div>
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/spfish.jpg" alt="Special fish" />
            </div>
          </div>
        </div>
      </div>

      {/* NON VEG DISHES — Left Half Circle */}
      <div className="menu-section non-veg-dishes">
        <div className="menu-row left-half">
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/spnonveg.jpg" alt="Non Veg Dish" />
            </div>
          </div>
          <div className="menu-items">
            <h3 className="section-title">NON VEG DISHES</h3>
            <p>Chicken Dopyaja <span>(4 pcs)</span> <b>₹220</b></p>
            <p>Mutton Korma <span>(4 pcs)</span> <b>₹480</b></p>
            <p>Chicken 65 <span>(8 pcs)</span> <b>₹240</b></p>
            <p>Mutton Rogan Josh <span>(4 pcs)</span> <b>₹480</b></p>
            <p>Butter Chicken <span>(4 pcs)</span> <b>₹240</b></p>
          </div>
        </div>
      </div>
       {/*  STARTER — Right Half Circle */}
      <div className="menu-section starter">
        <div className="menu-row right-half">
          <div className="menu-items">
            <h3 className="section-title"> STARTER</h3>
            <p>Veg Kurkure Momo <span>(6 pcs)</span> <b>₹100</b></p>
            <p>Chicken Kurkure Momo <span>(4 pcs)</span> <b>₹160</b></p>
            <p>Mushroom Roll<span>(1 pc)</span> <b>₹90</b></p>
            <p>Paneer Tikka <span>(12 pcs)</span> <b>₹240</b></p>
            <p>Stripped Chicken Samosa<span>(2 pcs)</span> <b>₹80</b></p>
          </div>
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/start.jpg" alt="Starter" />
            </div>
          </div>
        </div>
      </div>

      {/* CHINESE DISHES — Left Half Circle */}
      <div className="menu-section chinese dishes">
        <div className="menu-row left-half">
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/chindish.jpg" alt="Chinese Dish" />
            </div>
          </div>
          <div className="menu-items">
            <h3 className="section-title">CHINESE DISHES</h3>
            <p>Kung Pao Chicken <span>(1 pt)</span> <b>₹320</b></p>
            <p>Mapo Tofu <span>(1 pt)</span> <b>₹280</b></p>
            <p>Peking Duck<span>(1 pt)</span> <b>₹300</b></p>
            <p>Beef With Broccoli<span>(1 pt)</span> <b>₹400</b></p>
            <p>Schezwan Chicken Fried Rice <span>(1 pt)</span> <b>₹250</b></p>
          </div>
        </div>
      </div>
       {/*  CONTINENTAL STARTER DISHES — Right Half Circle */}
      <div className="menu-section continental-starter">
        <div className="menu-row right-half">
          <div className="menu-items">
            <h3 className="section-title">CONTINENTAL STARTER DISHES</h3>
            <p>Pizza Margherita<span>(1 pt)</span> <b>₹240</b></p>
            <p>Croissant<span>(5 pcs)</span> <b>₹200</b></p>
            <p>Moussaka<span>(1 pt)</span> <b>₹400</b></p>
            <p>Quiche Lorraine<span>(1 pt)</span> <b>₹260</b></p>
             <p>Steak Frites<span>(1 pt)</span> <b>₹250</b></p>
          </div>
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/contstart.jpg" alt="Continental Starter" />
            </div>
          </div>
        </div>
      </div>

          {/* CONTINENTAL DISHES — Left Half Circle */}
      <div className="menu-section continantal-dishes">
        <div className="menu-row left-half">
          <div className="menu-wrapper">
            <div className="menu-image">
              <img src="/menucard/contdish.jpg" alt="Continental Dish" />
            </div>
          </div>
          <div className="menu-items">
            <h3 className="section-title">CONTINENTAL DISHES</h3>
            <p>Paella <span>(1 pt)</span> <b>₹600</b></p>
            <p>Ratatouille<span>(1 pt)</span> <b>₹240</b></p>
            <p>Mushroom Risotto <span>(1 pt)</span> <b>₹350</b></p>
            <p>Coq Au Vin <span>(1 pt)</span> <b>₹400</b></p>
            <p>Gazpacho<span>(1 pt)</span> <b>₹400</b></p>
             <p>Spaghetti Bolognese<span>(1 pt)</span> <b>₹400</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBrochure;
