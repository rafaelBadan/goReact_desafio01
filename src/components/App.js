import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Robinson Cruzoè',
        avatar: 'http://lorempixel.com/output/cats-q-c-200-200-9.jpg',
        time: '14h40',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero incidunt vel. Voluptatum minima, sed consequatur, autem, ipsum fugiat tenetur tempore porro qui necessitatibus doloremque. Illum quis eos nisi unde.',
      },
      {
        id: 2,
        name: 'Eduardo Garcia',
        avatar: 'http://lorempixel.com/output/cats-q-c-200-200-7.jpg',
        time: '11h30',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero incidunt vel. Voluptatum minima, sed consequatur, autem, ipsum fugiat tenetur tempore porro qui necessitatibus doloremque. Illum quis eos nisi unde.',
      },
      {
        id: 3,
        name: 'Rebecca Gusmão',
        avatar: 'http://lorempixel.com/output/cats-q-c-200-200-2.jpg',
        time: '21h40',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero incidunt vel. Voluptatum minima, sed consequatur, autem, ipsum fugiat tenetur tempore porro qui necessitatibus doloremque. Illum quis eos nisi unde.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
