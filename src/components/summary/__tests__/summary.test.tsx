import Summary, {SummaryProps} from "../summary";
import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe('<Summary />', () => {
    let props: SummaryProps;
    
    describe('should render a summary of a podcast', () => {
        it('when users select to see its detail', () => {
            props = {
                podcast: {
                    id:"1",
                    title: "I'm Alive",
                    author: "Celine Dione",
                    description: "Lorem Ipsum es simplemente el texto de relleno",
                }
            }
            render(<Summary {...props}  />)
            const title = screen.getByText(props.podcast.title);
            expect(title).toBeInTheDocument();
        })
    })
})