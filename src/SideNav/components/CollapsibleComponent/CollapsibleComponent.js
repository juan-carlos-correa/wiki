import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class CollapsibleComponent extends React.Component {
  render() {
    const i = 0;
    return (
      <Collapsible>
        <CollapsibleItem header={ this.props.name } key={ this.props.id + 10 }>
        {
          this.props.childs
            .map(item =>
              <Collapsible key={ item.id }>
                <CollapsibleItem header={ item.name } key={ i }>
                  asd
                </CollapsibleItem>
              </Collapsible>
            )
        }
        </CollapsibleItem>
      </Collapsible>
    )
  }
}

export default CollapsibleComponent;