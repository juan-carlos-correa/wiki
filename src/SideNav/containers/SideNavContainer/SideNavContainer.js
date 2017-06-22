import React from 'react';
import CollapsibleComponent from '../../components/CollapsibleComponent/';

import { SideNav, Button, } from 'react-materialize';

class SideNavContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsList: [],
      loading: true
    }

    this.getItemsList = this.getItemsList.bind(this);
  }

  getItemsList() {
    return [
      {
        name: 'FrontEnd',
        id: 10,
        childs: [
          { name: 'GRUNT', id: 1 },
          { name: 'SASS', id: 2 },
          { name: 'ANDROID', id: 3 },
          { name: 'EXTJS', id: 4 },
          { name: 'JAVASCRIPT', id: 5 },
          { name: 'IOS', id: 6 },
          { name: 'REACT', id: 7 },
          { name: 'BOOTSTRAP', id: 8 }
        ]
     },
      {
        name: 'Backend',
        id: 20,
        childs: [
          { name: 'NODE', id: 9 },
          { name: 'PHP', id: 10 }
        ]
      }
    ];
  }

  componentDidMount() {
    this.setState({
      itemsList: this.getItemsList(),
      loading: false
    })
  }

  render() {
    return (
      <SideNav
        trigger={<Button><i className="large material-icons">view_headline</i></Button>}
        options={{ closeOnClick: true }}
        >
        {
          !this.state.loading && (
            this.state.itemsList
              .map(item =>
                <CollapsibleComponent
                  name={ item.name }
                  childs={ item.childs }
                  key={ item.id }
                />
              )
          )
        }
      </SideNav>
    )
  }
}

export default SideNavContainer;