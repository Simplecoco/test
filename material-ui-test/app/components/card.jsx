import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import reptileImage from '../image/abd50bc0e11052fea9669f18f0c017bc.jpg';
import Grid from 'material-ui/Grid';


const styleSheet = createStyleSheet({
	card: {
		  minWidth: 230,
      maxWidth: 350,
      margin: "0 auto",
      opacity: "1",
      transition: "opacity 0.8s"
	},
	img: {
	  	width: "100%",
	},
//  cardMedia: {
//      maxHeight: 250,
//      overflow: "hidden"
//  }
});

class SimpleMediaCard extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            "activeKey": this.props.activeKey,
            "cardStyle": "opacity: 0.1"
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({"activeKey": nextProps.activeKey});
    }

    render() {
        let props = this.props;
        const classes = props.classes;
      

        if(this.state.activeKey.indexOf(props.index) !== -1){
        }
        return (
          <div>
            <Card className={classes.card} style = {this.state.card}>
              <CardMedia className={classes.cardMedia}>
                <img src={props.pic} alt="Contemplative Reptile" className={classes.img} />
              </CardMedia>
              <CardContent>
                <Typography type="headline" component="h2">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button dense color="primary">
                  Enter It
                </Button>
                <Button dense color="primary">
                  Konw More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
    }
}

export default withStyles(styleSheet)(SimpleMediaCard);