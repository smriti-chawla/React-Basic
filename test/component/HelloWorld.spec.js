/**
 * Created by TTND on 1/6/2017.
 */
import renderPage from '../tools/renderPage'
import HelloWorld from '../../src/program2';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import React from 'react';

describe('Test from Hello World',function() {
  before(function (){
    this.page=renderPage(<HelloWorld/>);
  });
  after(function() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
  });
  it('should render hello world component',  function (){
    expect(this.page.find('.hello').at(0).length).eq(1)
  });
  it('should render hello world text', function (){
      expect(this.page.find('.hello').at(0).text()).eq('Hello World')
  }

  )
});
