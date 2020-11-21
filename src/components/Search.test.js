import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render logo', () => {
    const renderer = TestRenderer.create(<Search />);
    const component = renderer.root;
    const img = component.findByType('img');
    expect(img.props.src).toBe("https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png");
    expect(img.props.alt).toBe("search-button");
});
