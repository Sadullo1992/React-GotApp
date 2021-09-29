  
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error/errorMessage';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './app.css';

export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {   
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>
                        {/* <CharacterPage/>
                        <BooksPage/>
                        <HousesPage/> */}

                        {/* <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} /> */}
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        {/* <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                
                            return <BooksItem bookId={id}/>}
                        }/> */}
                        
                    </Container>
                </div>
            </Router>
        );
    }
};