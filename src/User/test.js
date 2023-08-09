import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import HomeBackground from "../Home/HomeBackground";
import { useSelector } from "react-redux";

const ProductList = () => {
  const tong2 = [];
  for (var i = 0; i < 1000; i++) {
    if (i % 2 == 0) {
      tong2.push(i);
    }
  }
  const tong1 = tong2.reduce((arr, crr) => {
    return arr + crr;
  });
  console.log(tong2);
  console.log(tong1);
  let tong = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      tong = tong + i;
    }
  }
  console.log("tong", tong);

  let userData = [
    { name: "diem" },
    { name: "thuan mau cho" },
    { name: "thien ha de nhat" },
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    userData = userData.map((item) => {
      return { ...item, isChecked: false };
    });
    setProducts(userData);
  }, []);
  const handleChange = (e, idCheckBox) => {
    let newProduct = products.map((item, index) => {
      return index === idCheckBox
        ? { ...item, isChecked: !item.isChecked }
        : item;
    });
    setProducts(newProduct);
  };
  const handleChangeAll = (e) => {
    const { checked } = e.target;
    if (checked) {
      let newProducts = products.map((item) => {
        return { ...item, isChecked: true };
      });
      setProducts(newProducts);
    } else {
      let newProducts = products.map((item) => {
        return { ...item, isChecked: false };
      });
      setProducts(newProducts);
    }
  };
  return (
    <div>
      <div>
        <input type="checkbox" value="allSelect" onChange={handleChangeAll} />
        Select All
      </div>

      {products.map((product, index) => (
        <div>
          <input
            type="checkbox"
            value={product.name}
            checked={product?.isChecked || false}
            onChange={(e) => handleChange(e, index)}
          />
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
