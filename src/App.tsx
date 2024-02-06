import { FC, } from 'react';
import { Info } from './components/Info/Info';

const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
Necessitatibus molestiae quisquam consectetur voluptates rerum, reiciendis \
adipisci, dolores est enim autem nulla iure obcaecati blanditiis eius!";


const html = `Lorem ipsum, dolor sit amet 
  <ul class="List">
    <li class="List-item">1 Lorem</li>
    <li class="List-item">2 Lorem ipsum, dolor sit</li>
  </ul> 
  enim autem nulla iure obcaecati blanditiis eius! 
  <p>Necessitatibus molestiae quisquam</p> 
`;

export const App: FC = () => {

  return (
    <main className="App">
      <Info html={html} className="App-preview">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, exercitationem!
        </h1>
      </Info>

      <Info html={text} className="App-preview">
        <h2>
          Lorem ipsum dolor sit amet.
        </h2>
      </Info>

      <Info html={html} className="App-preview">
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sunt rerum ab aliquid nihil corporis amet saepe quas eos, similique, accusantium atque, magni reprehenderit officiis.
        </h5>
      </Info>

      <Info html={text} className="App-preview">
        <div >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa totam necessitatibus nihil pariatur architecto repellendus fugit quis, officiis, iure ipsa debitis modi error, aliquid ea laboriosam earum quasi odit eveniet.
        </div>
      </Info>

      <Info html={html} className="App-preview-sub">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores!</span>
      </Info>
    </main>
  );
};
