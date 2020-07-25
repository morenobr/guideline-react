import React from "react";
import { Card, CardMedia, CardPrimaryAction, CardActions, CardActionButtons, CardActionIcons, CardButton, CardIconButton, CardIconButtonToogle } from './index';

export default {
  title: "Card"
};
const backgroundImage = 'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg")';

export const Simple = () => {
  return (
    <div>
      <h3>Simple card</h3>
      <div>
        <Card>Content example</Card>
      </div>
      <h3>Simple card with primary action</h3>
      <div>
        <Card>
          <CardPrimaryAction tabIndex={0}>
            Primary action
          </CardPrimaryAction>
          Content example
        </Card>
      </div>
      <h3>Simple card with media</h3>
      <div>
        <Card>
          <CardMedia style={{backgroundImage,width:300,height:300}}>
            Title
          </CardMedia>
          Content example
        </Card>
      </div>
    </div>
  );
};
export const Outlined = () => {
  return (
    <div>
      <h3>Card outlined</h3>
      <div>
        <Card outlined>Content example outlined</Card>
      </div>
      <h3>Card outlined with primary action</h3>
      <div>
        <Card outlined>
          <CardPrimaryAction tabIndex={0}>
            Primary action
          </CardPrimaryAction>
          Content example outlined
        </Card>
      </div>
      <h3>Card outlined with media</h3>
      <div>
        <Card outlined>
          <CardMedia style={{backgroundImage,width:300,height:300}}>
            Title
          </CardMedia>
          Content example outlined
        </Card>
      </div>
    </div>
  );
};

export const Media = () => {
  return (
    <div>
      <h3>Simple card with media</h3>
      <div>
        <Card>
          <CardMedia style={{backgroundImage,width:500,height:300}}>
            Title
          </CardMedia>
          Content example
        </Card>
      </div>
      <h3>Card outlined with media</h3>
      <div>
        <Card outlined>
          <CardMedia style={{backgroundImage,width:500,height:300}}>
            Title
          </CardMedia>
          Content example outlined
        </Card>
      </div>
      <h3>Card with media ratio 16:9</h3>
      <div>
        <Card>
          <CardMedia ratio16to9 style={{backgroundImage}}>
            Title
          </CardMedia>
          Content example
        </Card>
      </div>
      <h3>Card with media square</h3>
      <div>
        <Card>
          <CardMedia square style={{backgroundImage}}>
            Title
          </CardMedia>
          Content example
        </Card>
      </div>
    </div>
  );
};

export const Actions = () => {
  return (
    <div>
      <h3>Actions buttons</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardButton label="Action 1" />
            <CardButton label="Action 2" />
          </CardActions>
        </Card>
      </div>
      <h3>Actions icons</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardIconButtonToogle
              iconOn="favorite" iconOff="favorite_border"
              ariaLabelOn="Add to favorites"
              title="Add to favorites" />
            <CardIconButton icon="share" title="Share" />
            <CardIconButton icon="more_vert" title="More options" />
          </CardActions>
        </Card>
      </div>
      <h3>Actions Full Bleed</h3>
      <div>
        <Card>
          Content example
          <CardActions fullBleed>
            <CardButton label="All Business Headlines" icon="arrow_forward" iconPosition="right" />
          </CardActions>
        </Card>
      </div>
      <h3>Actions buttons and icons</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardButton label="Action 1" />
            <CardButton label="Action 2" />
            <CardIconButtonToogle
              iconOn="favorite" iconOff="favorite_border"
              ariaLabelOn="Add to favorites"
              title="Add to favorites" />
            <CardIconButton icon="share" title="Share" />
            <CardIconButton icon="more_vert" title="More options" />
          </CardActions>
        </Card>
      </div>
      <h3>Actions group buttons and group icons in same row</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardActionButtons>
              <CardButton label="Action 1" />
              <CardButton label="Action 2" />
            </CardActionButtons>
            <CardActionIcons>
              <CardIconButtonToogle
                iconOn="favorite" iconOff="favorite_border"
                ariaLabelOn="Add to favorites"
                title="Add to favorites" />
              <CardIconButton icon="share" title="Share" />
              <CardIconButton icon="more_vert" title="More options" />
            </CardActionIcons>
          </CardActions>
        </Card>
      </div>
      <h3>Actions group buttons and group icons in same row - icons first</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardActionIcons>
              <CardIconButtonToogle
                iconOn="favorite" iconOff="favorite_border"
                ariaLabelOn="Add to favorites"
                title="Add to favorites" />
              <CardIconButton icon="share" title="Share" />
              <CardIconButton icon="more_vert" title="More options" />
            </CardActionIcons>
            <CardActionButtons>
              <CardButton label="Action 1" />
              <CardButton label="Action 2" />
            </CardActionButtons>
          </CardActions>
        </Card>
      </div>
      <h3>Actions only group icons</h3>
      <div>
        <Card>
          Content example
          <CardActions>
            <CardActionIcons>
              <CardIconButtonToogle
                iconOn="favorite" iconOff="favorite_border"
                ariaLabelOn="Add to favorites"
                title="Add to favorites" />
              <CardIconButton icon="share" title="Share" />
              <CardIconButton icon="more_vert" title="More options" />
            </CardActionIcons>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};