import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    // Стан для збереження кольрів двох інтерактивних елементів
    this.state = {
      educationStyle: { backgroundColor: 'transparent', color: 'inherit' },
      hobbiesStyle: { backgroundColor: 'transparent', color: 'inherit' },
    };
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Обробник для першого інтерактивного елемента (Освіта)
  handleEducationClick = () => {
    this.setState({
      educationStyle: {
        backgroundColor: this.getRandomColor(),
        color: this.getRandomColor(),
      },
    });
  };

  // Обробник для другого інтерактивного елемента (Хобі)
  handleHobbiesClick = () => {
    this.setState({
      hobbiesStyle: {
        backgroundColor: this.getRandomColor(),
        color: this.getRandomColor(),
      },
    });
  };

  render() {
    return (
      <div className="content-section">
        <div>
          <p><strong>Дата і місце народження:</strong> 20 Лютого 2006 року Київ</p>
        </div>

        {/* Це був 3-й елемент у вашому HTML. Додаємо клік сюди. */}
        <div 
          style={this.state.educationStyle} 
          onClick={this.handleEducationClick}
          className="interactive-element"
        >
          <p>
            <strong>Освіта:</strong> Школа — СШ №305 з поглибленим вивченням іноземної мови;<br />
            Університет(зараз навчаюсь) — Київський політехнічний інститут імені Ігоря Сікорського
          </p>
        </div>

        {/* Це був 4-й елемент у вашому HTML. Додаємо клік сюди. */}
        <div 
          style={this.state.hobbiesStyle} 
          onClick={this.handleHobbiesClick}
          className="interactive-element"
        >
          <h3>Мої хобі:</h3>
          <ul>
            <li>Фотографія</li>
            <li>Малювання</li>
            <li>Читання художньої літератури</li>
            <li>Комп'ютерні ігри</li>
          </ul>
        </div>

        <div>
          <h3>Мої улюблені книги / фільми / серіали:</h3>
          <ol>
            <li>«Матриця» 1999р.</li>
            <li>«Любов, смерть і робти» 2019р.</li>
            <li>«Поклик Ктухлху» 1928р.</li>
          </ol>
        </div>

        <div>
          <h3>Моє улюблене місто <strong>Рим</strong></h3>
          <p>
            Рим — це місто, яке вражає своєю багатовіковою історією та архітектурою...
            (Текст скорочено для зручності)
          </p>
        </div>
      </div>
    );
  }
}

export default Content;