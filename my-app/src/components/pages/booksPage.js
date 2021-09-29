import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../error/errorMessage';
import gotService from '../../services/gotService';
//import BooksItem from './booksItem';
import RowBlock from '../rowBlock';
//import {withRouter} from 'react-router-dom';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }        

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )

        const bookDetails = (
            <ItemDetails
            itemId={this.state.selectedBook}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}
export default BooksPage;