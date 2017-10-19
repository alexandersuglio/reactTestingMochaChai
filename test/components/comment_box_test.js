import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

let component;

beforeEach(()=> {

	component = renderComponent(CommentBox);

});

it('has the class "comment box"', () =>{
expect(component).to.have.class('comment-box');

});

it('has a text area', () =>{

expect(component.find('textarea')).to.exist;
});

it('has a button', () =>{


expect(component.find('button')).to.exist;
});


describe('entering some text', () =>{

beforeEach(() => {

	//find text area, simulate a text change of new comment
	component.find('textarea').simulate('change', 'new comment'); 
});

it('shows text that is entered', () => {

//tests to see if assertion is correct
expect(component.find('textarea')).to.have.value('new comment');

});

it('when submitted, clears the input', () => {
	// console.log(component);
	component.simulate('submit');
expect(component.find('textarea')).to.have.value('');


});

});

});

