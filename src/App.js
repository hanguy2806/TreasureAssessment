import React, { Component } from "react";
import ReactDOM from "react-dom";
import imgData from "./imgData";

class Footer extends React.Component {
  render() {
    return <footer>Copyright by Ha Nguyen.</footer>;
  }
}
class Search extends React.Component {
  state = {
    search: ""
  };

  renderImage = image => {
    const { search } = this.state;
    var caption = image.alt.toLowerCase();

    return (
      <div>
        <img alt={this.props.alt} src={this.props.imgUrl} />
        <caption>Caption:{this.props.caption}</caption>
        <p>Description: {this.props.description}</p>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredImages = imgData.filter(img => {
      return img.alt.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <input label="Search Image" icon="search" onChange={this.onchange} />
        {filteredImages.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image.imgUrl} alt={this.props.image.alt} />
        <caption>Caption: {this.props.image.caption}</caption>
        <p>Description: {this.props.image.description}</p>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    const imageItems = imgData.map(image => (
      <Image key={image.id} image={image} />
    ));

    return (
      <div class="grid-container">
        <Search />

        <Footer />
      </div>
    );
  }
}

export default App;
