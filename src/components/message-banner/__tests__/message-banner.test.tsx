import React from "react";
import MessageBanner, { MessageBannerProps } from "../message-banner";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('<MessageBanner />', () => {
    let props: MessageBannerProps;
    describe('should inform users that data is being retrieved', () => {
        it('when the app gets initialized', () => {
            props = {
                message: "We are working to get the most popular podcasts..."
            }
            render(<MessageBanner {...props} />)
            const banner = screen.getByText(props.message);
            expect(banner).toBeInTheDocument();
        })
    })
})