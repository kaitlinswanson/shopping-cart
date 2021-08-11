import React from 'react';
import './App.css';

function Shop() {
  return (
    <div className="shop">
        
        <div className="card-holder">
            <div className="item-card" id="item-1">
                <img className="item-images" id="tamagotchi" alt="tamagotchi" src="https://www.bandai.com/wp-content/uploads/42876A.jpg"></img>
                <div className="info"><div className="item-descriptions">Tamagotchi Toy</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
            <div className="item-card" id="item-2">
            <img className="item-images" id="furby" alt="furby" src="https://cdn.vox-cdn.com/thumbor/4mLPI9E-cl3ONBU1Z-y3snlZcQ8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13642126/Furbies_2.jpg"></img>
                <div className="info"><div className="item-descriptions">Furby Toy</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
            <div className="item-card" id="item-3">
            <img className="item-images" id="sandals" alt="slide sandals" src="https://cdn.shopify.com/s/files/1/2170/8465/products/STEVEMADDEN-SANDALS_SLINKY30_BLACK_SIDE_grande.jpg?v=1581448804"></img>
                <div className="info"><div className="item-descriptions">Slide Sandals</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
            <div className="item-card" id="item-4">
            <img className="item-images" id="handbag" alt="small handbag" src="https://hips.hearstapps.com/cos.h-cdn.co/assets/16/31/1024x1024/square-1470075457-louisvuitton-1.jpg?resize=480:*"></img>
                <div className="info"><div className="item-descriptions">Tiny Handbag</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
            <div className="item-card" id="item-5">
            <img className="item-images" id="pepsi" alt="crystal Pepsi bottle" src="https://i5.walmartimages.com/asr/da177328-8d3a-4f69-89c0-669b247695bd_1.798d89d0b9c041cdde16e3417f0a8cd4.jpeg"></img>
                <div className="info"><div className="item-descriptions">Clear Pepsi</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
            <div className="item-card" id="item-6">
            <img className="item-images" id="gameboy" alt="gameboy" src="https://cdna.artstation.com/p/assets/images/images/012/443/324/large/m-h-sr-01-00000.jpg?1534838164"></img>
                <div className="info"><div className="item-descriptions">Game Boy</div>
                <button className="add-cart-buttons">Add</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Shop;