var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');


describe('Todo', () => {

    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with ID on click', () => {
        var todoData = {
            id:45,
            text: "new todo",
            completed:true
        }
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(45);
    });

});