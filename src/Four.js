import React, { Component } from 'react';

import data from './events.json';

class Four extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 4) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.presenter}</li>
                  <li>Like/hate: {people.room}</li>
                   <li>Favorite color: {people.color}</li>
                  <li>Birthday info: {people.summary}</li>
                  <li>Date: {people.date}</li>
                 </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Four;

