import React from 'react';
import { Comment, Icon, Rating } from 'semantic-ui-react';
import { Link } from 'react-router';

const Item = ({item, match, activate}) => {
  let { name } = item
  //let { url } = match.match
  name = name.trim().replace(/\s/ig, '-')
  function handleClick(){
    activate(item.id)
    window.localStorage.activeID = item.id
    window.localStorage.item = JSON.stringify(item)
  }
  return (
    <div style={{"width":"700px"}}>
        <Comment>
        {/* <Comment.Avatar as='a' src={item.image_url} /> */}
        <Comment.Content>
            <Comment.Author>
                <Link to={`shop/${name}`} >
                    { item.name }
                </Link>
            </Comment.Author>

            <Comment.Metadata>
                <div>
                    { item.year }
                </div>
                <div>
                    { item.author }
                </div>
                <div>
                    <Icon name='star' />
                    5 Faves
                </div>
            </Comment.Metadata>

            <Comment.Text>
                { `${item.content.substr(0,300)}...` }
            </Comment.Text>
        </Comment.Content>
        </Comment>
        <hr/>
    </div>
)}

export default Item