import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Icons
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import NoteIcon from '@material-ui/icons/Note';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles((theme) => ({
    root: {

        minHeight: '65vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
        }
    },
}));

const CardSection = () => {

const classes = useStyles();

    return(


        <div className={classes.root} id='card-selection'>


            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Corded Telephone"
                        height="400"
                        image="/assets/phone.jpg"
                        title="Contact Section"
                    />
                    <CardContent>
                        <ContactsIcon></ContactsIcon>
                        <Typography gutterBottom variant="h5" component="h2">
                            Contacts
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Do you need a place to create contacts?
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Open Book"
                        height="400"
                        image="/assets/notes.jpg"
                        title="Open Notebook"
                    />
                    <CardContent>
                        <NoteIcon></NoteIcon>
                        <Typography gutterBottom variant="h5" component="h2">
                            Notes
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Do you need to place jot down a quick note?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Grocery Produce"
                        height="400"
                        image="/assets/groceries.jpg"
                        title="Grocery Produce"
                    />
                    <CardContent>
                        <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                        <Typography gutterBottom variant="h5" component="h2">
                            Groceries
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Do you need somewhere to create a grocery list?
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </div>


    )
}

export default CardSection;
