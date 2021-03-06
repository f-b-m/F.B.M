import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import {
  ContainerButtonEditDrill, ContainerButtonDeleteDrill,
} from './ContainerButtonDrill';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
};

class CardDrill extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes, drillId, drillTitle, drillContent, drillEditor, userId,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          )}
          action={(
            <div>
              {drillEditor === userId
                ? (
                  <div>
                    <ContainerButtonEditDrill
                      drillId={drillId}
                      title={drillTitle}
                      content={drillContent}
                    />
                    <ContainerButtonDeleteDrill
                      drillId={drillId}
                      title={drillTitle}
                      content={drillContent}
                    />
                  </div>
                )
                : <div />
              }
            </div>
          )}
          title={drillTitle}
          subheader="September 14, 2016"
        />
        {/*
        <CardMedia
        className={classes.media}
        image="../assets/images/field.jpeg"
        title="Paella dish"
        />
          */}
        <CardContent>
          <Typography component="p">
            {drillContent}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <Link to="/detail">detail</Link>
        </CardActions>
      </Card>
    );
  }
}

CardDrill.propTypes = {
  classes: PropTypes.object.isRequired,
  drillId: PropTypes.number.isRequired,
  drillTitle: PropTypes.string.isRequired,
  drillContent: PropTypes.string.isRequired,
  drillEditor: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default withStyles(styles)(CardDrill);
