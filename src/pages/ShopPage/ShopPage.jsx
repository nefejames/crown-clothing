import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import shopdata from "./shopdata";

export class ShopPage extends Component {
  state = {
    collections: shopdata,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
