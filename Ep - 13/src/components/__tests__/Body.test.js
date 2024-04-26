import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test('should render the body component with search button', () => { 
    render(<Body />);
});