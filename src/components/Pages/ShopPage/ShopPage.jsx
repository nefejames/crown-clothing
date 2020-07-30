import React, { Component } from "react";
import shopData from "./ShopData";
import CollectionPreview from "../../CollectionPreview/CollectionPreview";

export default class ShopPage extends Component {
  state = {
    collections: shopData,
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}
