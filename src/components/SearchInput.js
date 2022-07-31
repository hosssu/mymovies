import React from 'react';
import './style.css';

class SearchInput extends React.Component {

    state = { entry: '' }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return (
            <div className='searchContainer'>
                <form onSubmit={this.onFormSubmit}>
                    <div className='input'>

                        <input type="search" placeholder='Search for a movie..'
                            onChange={(event) => this.setState({ entry: event.target.value })}
                            value={this.state.entry}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;