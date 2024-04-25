import Contact from "../Contact";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test('should load contact page', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});


test('should load button inside contact component ', () => { 
    render(<Contact />)

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
});


test('should load text inside contact component', () => { 
    render(<Contact />);

    const text = screen.getByText('Submit');

    expect(text).toBeInTheDocument();
});


test('should load placeholder text inside contact component', () => { 
    render(<Contact />);

    const placeholderText = screen.getByPlaceholderText("Enter Your Name");

    expect(placeholderText).toBeInTheDocument();
});


test('should load 2 input boxes in contact component', () => { 
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(4);
});