import React from 'react'

import { List } from 'semantic-ui-react'

const ItemListContainer = ({greeting}) => (
  <List className="list">
    <List.Item>{greeting}</List.Item>
  </List>
)

export default ItemListContainer