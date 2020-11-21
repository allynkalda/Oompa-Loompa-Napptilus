import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Cards from './Cards';

const oompa = {
    image: 'sds',
    first_name: 'Maria',
    last_name: 'Jose',
    gender: 'F',
    profession: 'Worker'
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards oompa={oompa} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render two body1', () => {
    const renderer = TestRenderer.create(<Cards oompa={oompa} />);
    const component = renderer.root;
    const typo = component.findAllByType('p');
    expect(typo.length).toBe(2);
});

it('should render Gender as Woman', () => {
    const renderer = TestRenderer.create(<Cards oompa={oompa} />);
    const component = renderer.root;
    const typo = component.findAllByType('p');
    expect(typo[0].props.children).toBe('Woman');
});

it('should render name correctly', () => {
    const renderer = TestRenderer.create(<Cards oompa={oompa} />);
    const component = renderer.root;
    const h5 = component.findByType('h5');
    expect(h5.props.children).toMatchObject(["Maria", " ", "Jose"]);
});