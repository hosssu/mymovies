import React from 'react';
import './style.css';

class CrudSearch extends React.Component {

    state = { entry: '' }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }

    componentDidUpdate() {
        if (this.state.entry.length < 1) {
            this.props.getMovies()
        }
    }

    render() {

        return (
            <div className='searchContainer'>
                <form onSubmit={this.onFormSubmit}>
                    <div className='input'>

                        <input type="search" placeholder='Search MyMovies..'
                            onChange={(event) => this.setState({ entry: event.target.value })}
                            value={this.state.entry}>
                        </input>

                    </div>
                </form>
            </div>
        )
    }
}

export default CrudSearch;