import { React, Component } from "react";
class ProductTotal extends Component {
  render() {
    return (
      <tr>
        <th colSpan={3} className="text-end">
          Total
        </th>
        <th className="text-center">60</th>
        <th className="text-end">
          <sup>$</sup>1437.5
        </th>
        <th className="text-end">
          <sup>$</sup>85.000
        </th>
      </tr>
    );
  }
}
export default ProductTotal;
