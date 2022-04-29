import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

function ProductSize() {
  const [value, setValue] = useState("S");
  const sizes = ["S", "M", "L", "XL"];
  return (
    <div className="size  ">
      <div className="size-title flex mx-4 my-1   ">
        <h2 class="font-bold ">Beden :</h2>
        <span className="mx-1">{value}</span>
      </div>

      <div className="variants flex mx-4 my-1">
        {sizes.map((x) => (
          <div
            onClick={() => setValue(x)}
            className={`${x === value && "selected"} sp-item`}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSize;
