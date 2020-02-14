import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class CardList extends Component {

    constructor(){
        super();
        this.state = {
            user: '',
            followers: []
        }
    }

    fetchData = (user) => {
        axios.get(`https://api.github.com/users/${user}/followers`)
            .then((res) => {
                console.log("following",res.data);
                this.setState({
                followers: res.data
            })
        }) 
    }

    componentDidMount(){
        this.setState({
            user: this.props.info.login
        })
        this.fetchData()
    }
    render() {
        return (
            <div className="card-container">
                <Card info={this.props.info}/>
                


                {this.state.followers.map(follower =>{
                    return <Card info={follower}/>
                })}
            </div>
        )
    }
}

